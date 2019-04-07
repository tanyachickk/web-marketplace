<template lang="pug">
  router-link.requests-table__item(:to="`/requests/${request.id}`")
    .item-field.item-field_id {{ request.id }}
    .item-field.item-field_customer {{ contractorName }}
    .item-field.item-field_type {{ typeValue }}
    .item-field.item-field_address {{ request.address || '-' }}
    .item-field.item-field_status 
      .badge {{ status }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/ui/card/Card.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import SecondaryButton from '@/components/ui/SecondaryButton.vue';
import { getUsername } from '@/helpers/userData';
import { getStatus, getType } from '@/helpers/transformData';

@Component({
  components: {
    Card,
    CardHeader,
    SecondaryButton,
  },
})
export default class RequestTableItem extends Vue {
  @Prop()
  private request: any;

  get contractorName() {
    return getUsername(this.request.customerDetails);
  }

  get typeValue() {
    return getType(this.request);
  }

  get status() {
    return getStatus(this.request);
  }

  technologyConnectionByTimeScheme;
  technologyConnectionByEnergyRedistribution;
  documentsRecovery;

  get responseCount() {
    const count = this.request.responseCount;
    let text = 'откликов';
    if (count % 10 === 1) {
      text = ' отклик';
    }
    if (count % 10 === 2 || count % 10 === 3 || count % 10 === 4) {
      text = ' отклика';
    }
    return `${count} ${text}`;
  }
}
</script>

<style lang="scss" scoped>
.requests-table__item {
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  .item-field {
    text-align: center;
    font-size: 0.75rem;
    padding: 0.75rem;
    border-bottom: 1px solid #dee2e6;
    font-weight: 400;
    color: #5a6169;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &_id {
      width: 50px;
    }
    &_customer {
      width: 200px;
    }
    &_type {
      width: 250px;
    }
    &_address {
      flex: 1 1 auto;
    }
    &_status {
      align-self: stretch;
      position: relative;
      width: 150px;
      .badge {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 10px;
        color: white;
        padding: 0.15rem 0.5rem;
        background-color: #17c671;
        border-radius: 0.5rem;
        transform: translate(-50%, -50%);
      }
    }
  }
  &:hover {
    box-shadow: 0 0.125rem 0.625rem rgba(129, 142, 163, 0.2), 0 0.0625rem 0.125rem rgba(129, 142, 163, 0.3);
  }
}
</style>
