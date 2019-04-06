<template lang="pug">
  .customer
    breadcrumb.customer__header(title='ООО "Комплексные решения"')
    .customer__body
      .customer__content
        card.customer-info
          card-header Информация о подрядчике
          .customer-info__body
        card.customer-reviews
          card-header Отзывы о подрядчике
          .customer-reviews__body
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
    bottom: 0;
    display: flex;
  }
}
</style>
