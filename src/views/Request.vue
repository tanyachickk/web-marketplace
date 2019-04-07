<template lang="pug">
  .request
    breadcrumb.request__header(:title="`Заявка #${requestId}`")
    .request__body
      .request__content(v-if="request")
        .grid
          card.customer-data
            card-header
              router-link.customer-header(:to="`/customer/${request.customerId}`")
                .customer-header__text Заказчик
                .customer-header__button
                  span Подробнее
                  i.material-icons arrow_forward
            .customer-data__body
              .field
                .field__label ФИО
                .field__value {{ customerName }}
              .field
                .field__label Тип
                .field__value {{ request.customerDetails.isLegalEntity ? 'Юридическое лицо' : 'Физическое лицо' }}
              .field
                .field__label Адрес
                .field__value {{ request.customerDetails.address }}
          card.contractor-data
            card-header(v-if="!request.contractorId") Подрядчик
            card-header(v-else)
              router-link.contractor-header(:to="`/contractor/${request.contractorId}`")
                .contractor-header__text Подрядчик
                .contractor-header__button
                  span Подробнее
                  i.material-icons arrow_forward
            .contractor-data__body(v-if="request.contractorId")
              .field
                .field__label ФИО
                .field__value Петров Алексей Сергеевич
              .field
                .field__label Вид заявки
                .field__value Технологическое присоединение
              .field
                .field__label Адрес
                .field__value г.Казань, ул. Красносельская, д.51
            .contractor-data__body.centered(v-else)
              .field
                .field__value Подрядчик не выбран
              .field(v-if="user.role === 'contractor'" @click="response")
                basic-button.response-button Откликнуться
          card.request-data
            card-header Заявка
            .request-data__body
              .field
                .field__label Вид
                .field__value {{ requestType }}
              .field
                .field__label Статус
                .field__value {{ requestStatus }}
              .field
                .field__label Адрес
                .field__value {{ request.address }}
              .field
                .field__label Количество откликов
                .field__value {{ request.responseCount }}
              .field
                .field__label Прикрепленные файлы
                .field__value -
          card.request-history
            card-header Информация о выполнении заявки
            .request-history__body
              .request-history__item(v-for="msg in serviceMessages")
                .request-history__value {{ msg.text }}
                .request-history__date {{ msg.date }}
            .request-history__footer
              .request-history__aprove(
                v-if="request.isFinishedByCustomer && request.isFinishedByContractor && !request.isApproved && user.role === 'admin'"
                @click="aprove"
              )
                basic-button Подтвердить
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import moment from 'moment';
import RequestsService from '@/services/RequestsService';
import Breadcrumb from '@/components/ui/Breadcrumb.vue';
import Card from '@/components/ui/card/Card.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import CardItem from '@/components/ui/card/CardItem.vue';
import { getStatus, getType } from '@/helpers/transformData';
import { getUsername } from '@/helpers/userData';
import BasicButton from '@/components/ui/BasicButton.vue';

@Component({
  components: {
    Breadcrumb,
    Card,
    CardHeader,
    CardItem,
    BasicButton,
  },
})
export default class Request extends Vue {
  @State('requests')
  private requestsList: any;
  @State('user')
  private user: any;
  @State('responses')
  private responsesList: any;
  @Action('getRequest')
  private getRequest: any;
  @Action('getRequests')
  private getRequests: any;
  @Action('getResponses')
  private getResponses: any;
  @Action('getMessages')
  private getMessages: any;
  @Action('finishRequest')
  private finishRequest: any;

  @Prop({ type: Number, default: 0 })
  private requestId: number;

  private RequestsService = new RequestsService();
  private messages: any[] = [];

  get request() {
    return this.requestsList[this.requestId];
  }

  get contractorName() {
    return getUsername(this.request.contractorDetails);
  }

  get customerName() {
    return getUsername(this.request.customerDetails);
  }

  get requestType() {
    return getType(this.request);
  }

  get requestStatus() {
    return getStatus(this.request);
  }

  get responses() {
    return Object.values(this.responsesList).filter((item: any) => item.requestId === this.requestId);
  }

  get serviceMessages() {
    return this.messages
      .filter((message) => !message.senderId)
      .map((msg: any) => ({ ...msg, date: moment(+msg.timestamp).format('DD.MM.YYYY') }));
  }

  private get title() {
    return `Заявка #${this.requestId}`;
  }

  private async aprove() {
    await this.finishRequest(this.requestId);
    this.getRequests();
    this.messages = await this.getMessages(this.requestId);
  }

  private response() {
    // console.log('response!');
  }
}
</script>

<style lang="scss" scoped>
.request {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &__body {
    position: relative;
    flex-grow: 1;
  }
  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 1rem;
  }
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'customer-data request-data request-history' 'contractor-data request-data request-history';
  grid-gap: 1.5rem;
  height: 100%;
}
.field {
  &__label {
    font-weight: 400;
    margin-bottom: 0.3rem;
    color: #868e96;
    font-size: 13px;
  }
  &__value {
    font-weight: 400;
    margin-bottom: 0.7rem;
    color: #5a6169;
    font-size: 14px;
  }
}
.request-data {
  grid-area: request-data;
  &__body {
    padding: 1rem;
  }
}
.customer-data {
  grid-area: customer-data;
  &__body {
    padding: 1rem;
  }
}
.contractor-data {
  grid-area: contractor-data;
  &__body {
    padding: 1rem;
    &.centered {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
.request-history {
  grid-area: request-history;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &__body {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  &__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    color: #3d5170;
    padding: 1rem 0.75rem;
    font-size: 0.8125rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    transition: all 0.2s ease;
    &:last-child {
      border-bottom: none;
    }
  }
  &__date {
    color: #868e96;
    font-weight: 300;
    margin-right: 0.5rem;
  }
  &__aprove {
    display: flex;
    justify-content: center;
    margin: 0.75rem;
  }
  &__footer {
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    flex-shrink: 0;
  }
}
.response-button {
  margin-top: 0.5rem;
}
.customer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #3d5170;
  cursor: pointer;
  &__button {
    display: flex;
    align-items: center;
    color: #3d5170;
    font-size: 0.625rem;
    i {
      margin-left: 0.2rem;
      font-size: 1rem;
    }
  }
}
.contractor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #3d5170;
  cursor: pointer;
  &__button {
    display: flex;
    align-items: center;
    color: #3d5170;
    font-size: 0.625rem;
    i {
      margin-left: 0.2rem;
      font-size: 1rem;
    }
  }
}
</style>
