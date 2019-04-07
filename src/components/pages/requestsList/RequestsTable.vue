<template lang="pug">
  card.requests-table
    //- .requests-table__toolbar
    .requests-table__header.header
      .header__item.header__item_id #
      .header__item.header__item_customer Заказчик
      .header__item.header__item_type Вид заявки
      .header__item.header__item_address Адрес
      .header__item.header__item_status Статус
    .requests-table__body
      request-table-item(v-for="request in requests" :key="request.id" :request="request")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/ui/card/Card.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import RequestTableItem from '@/components/pages/requestsList/RequestsTableItem.vue';
import SecondaryButton from '@/components/ui/SecondaryButton.vue';
import { getUsername } from '@/helpers/userData';
import requests from './requests';

@Component({
  components: {
    Card,
    CardHeader,
    SecondaryButton,
    RequestTableItem,
  },
})
export default class RequestsTable extends Vue {
  @Prop()
  private requests: any[];
  // private requests: any[] = requests;
}
</script>

<style lang="scss" scoped>
.requests-table {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &__body {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__toolbar {
    height: 4rem;
    border-bottom: 1px solid #dee2e6;
  }
}
.header {
  display: flex;
  align-items: center;
  background-color: #fbfbfb;
  &__item {
    text-align: center;
    font-size: 0.75rem;
    padding: 0.75rem;
    border-bottom: 1px solid #dee2e6;
    font-weight: 600;
    white-space: nowrap;
    color: #5a6169;
    &_id {
      width: 50px;
    }
    &_customer {
      width: 200px;
    }
    &_type {
      width: 200px;
    }
    &_address {
      flex: 1 1 auto;
    }
    &_status {
      width: 150px;
    }
  }
}
</style>
