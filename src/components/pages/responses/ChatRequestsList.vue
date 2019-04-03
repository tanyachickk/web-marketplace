<template lang="pug">
    card.requests-list
      card-header.requests-list__header Заявки
      .requests-list__body
        .requests-list__item(v-for="i in 25" :key="i") request {{ i }}
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
    font-weight: 400;
    color: #3d5170;
    padding: .625rem;
    font-size: .8125rem;
    border-bottom: 1px solid rgba(0,0,0,.125);
  }
}
</style>
