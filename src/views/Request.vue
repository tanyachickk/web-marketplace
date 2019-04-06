<template lang="pug">
  .request
    breadcrumb.request__header(:title="`Заявка #${id}`")
    .request__body
      .request__content
        .grid
          card.customer-data
            card-header Заказчик
            .customer-data__body
              .field
                .field__label ФИО
                .field__value Петров Алексей Сергеевич
              .field
                .field__label Вид заявки
                .field__value Технологическое присоединение
              .field
                .field__label Адрес
                .field__value г.Казань, ул. Красносельская, д.51
          card.contractor-data
            card-header Подрядчик
            .contractor-data__body
              .field
                .field__label ФИО
                .field__value Петров Алексей Сергеевич
              .field
                .field__label Вид заявки
                .field__value Технологическое присоединение
              .field
                .field__label Адрес
                .field__value г.Казань, ул. Красносельская, д.51
          card.request-data
            card-header Заявка
            .request-data__body
              .field
                .field__label Вид
                .field__value Технологическое присоединение
              .field
                .field__label Адрес
                .field__value г.Казань, ул. Красносельская, д.51
              .field
                .field__label Вид
                .field__value Технологическое присоединение
              .field
                .field__label Адрес
                .field__value г.Казань, ул. Красносельская, д.51
              .field
                .field__label Вид
                .field__value Технологическое присоединение
              .field
                .field__label Адрес
                .field__value г.Казань, ул. Красносельская, д.51
              .field
                .field__label Вид
                .field__value Технологическое присоединение
              .field
                .field__label Адрес
                .field__value г.Казань, ул. Красносельская, д.51
          card.request-history
            card-header Информация о выполнении заявки
            .request-history__body
              .request-history__item
                .request-history__value Подана заявка на подключение
                .request-history__date 06.04.2019
              .request-history__item
                .request-history__value Заключен договор об осуществлении технологического присоединения
                .request-history__date 07.04.2019
              .request-history__item
                .request-history__value Назначен подрядчик для выполнения мероприятий в соответствии с технологическими условиями
                .request-history__date 12.04.2019
              .request-history__item
                .request-history__value Подрядчик завершил выполнение мероприятий
                .request-history__date 16.04.2019

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import RequestsService from '@/services/RequestsService';
import Breadcrumb from '@/components/ui/Breadcrumb.vue';
import Card from '@/components/ui/card/Card.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import CardItem from '@/components/ui/card/CardItem.vue';

@Component({
  components: {
    Breadcrumb,
    Card,
    CardHeader,
    CardItem,
  },
})
export default class Request extends Vue {
  @State('requests')
  private requestsList: any;
  @State('responses')
  private responsesList: any;
  @Action('getRequest')
  private getRequest: any;
  @Action('getResponses')
  private getResponses: any;

  @Prop({ type: Object, default: () => ({}) })
  private request: any;
  @Prop({ type: Number, default: 0 })
  private id: number;

  private RequestsService = new RequestsService();

  // get request() {
  //   return this.requestsList[this.id];
  // }

  get responses() {
    return Object.values(this.responsesList).filter((item: any) => item.requestId === this.id);
  }

  private get title() {
    return `Заявка #${this.id}`;
  }

  private async created() {
    if (!this.request) {
      this.getRequest(this.id);
    }
    if (!this.responses.length) {
      this.getResponses();
    }
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
  }
}
.request-history {
  grid-area: request-history;
  &__body {
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
  }
  &__date {
    color: #868e96;
    font-weight: 300;
    margin-right: 0.5rem;
  }
}
</style>
