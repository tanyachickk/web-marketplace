<template lang="pug">
  .request
    breadcrumb.request__header(:title="request ? request.title : title")
    .request__body
      .request__content
        card.request__info(v-if="request")
          card-header Информация о заявке
          .request-info
            .request-info__item
              .request-info__title Название:
              .request-info__value {{ request.title }}
            .request-info__item
              .request-info__title Описание:
              .request-info__value {{ request.description }}
            div budget {{ request.budget }}
            div contractorId {{ request.contractorId }}
            div customerId {{ request.customerId }}
            div expirationDate {{ request.expirationDate }}
            div isConfirmed {{ request.isConfirmed }}
            div isFinished {{ request.isFinished }}
            div publishDate {{ request.publishDate }}
        card.request__responses
          card-header Отклики на заявку ({{ responses.length }})
          .responses__list
            card-item.response(v-for="(response, index) in 20" :key="index")
              .response__text Отклик {{ index }}
              i.material-icons chevron_right

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

  @Prop({ type: Number, default: 0 })
  private id: number;

  private RequestsService = new RequestsService();

  get request() {
    return this.requestsList[this.id];
  }

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
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;
  overflow: hidden;

  &__body {
    position: relative;
    width: 100%;
    flex-grow: 1;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: stretch;
  }

  &__info {
    width: 800px;
  }

  &__responses {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 1.5rem;
  }
}
.request-info {
  padding: 1rem;
}
.responses {
  &__list {
    flex-grow: 1;
    overflow-y: auto;
  }
}
.response {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(100, 100, 100, 0.03);
  }

  &__link {
    color: #3d5170;
    font-size: 0.75rem;
    font-weight: 400;
  }
}
</style>
