<template lang="pug">
    card.requests-list
      card-header.requests-list__header Заявки
      .requests-list__body
        .requests-list__item(v-for="request in requests" :key="request.id")
          .requests-list__text {{ request.title }}
          .requests-list__icon
            i.material-icons chevron_right
        .requests-list__item(v-for="(request, i) in 20" :key="i")
          .requests-list__text test request {{ i }}
          .requests-list__icon
            i.material-icons chevron_right
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Card from '@/components/ui/card/Card.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';

@Component({
  components: {
    Card,
    CardHeader,
  },
})
export default class ChatRequestsList extends Vue {
  @Prop({ type: Array, default: () => [] })
  private requests!: any[];
}
</script>

<style lang="scss" scoped>
.requests-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  &__header {
    flex-shrink: 0;
  }
  &__body {
    flex-grow: 1;
    overflow-y: auto;
  }
  &__item {
    position: relative;
    font-weight: 400;
    color: #3d5170;
    padding: 0.625rem;
    font-size: 0.8125rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    transition: all 0.2s ease;
    line-height: 1.5rem;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    right: 0.625rem;
    font-size: 1rem;
    color: #cacedb;
    transform: translateY(-50%);
  }
}
</style>
