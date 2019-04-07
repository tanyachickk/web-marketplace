<template lang="pug">
    card.responses-list
      card-header.responses-list__header Отклики
      .responses-list__body
        .responses-list__item(
          v-for="response in responses"
          :key="response.id"
          :class="response.id === id && 'active'"
          @click="$emit('input', response.id)"
        )
          .responses-list__avatar(:style="`backgroundImage: url(${'http://www.drreddyforlife.com/wp-content/uploads/2018/05/user-placeholder-1.jpg'})`")
          .responses-list__text {{ getUsername(response.contractorDetails) }}
          .responses-list__icon
            i.material-icons chevron_right
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Card from '@/components/ui/card/Card.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import { getUsername } from '@/helpers/userData';

@Component({
  components: {
    Card,
    CardHeader,
  },
})
export default class ChatResponsesList extends Vue {
  @Prop({ type: Array, default: () => [] })
  private responses!: any[];

  @Prop()
  private value!: number;

  get id() {
    return this.value;
  }

  private getUsername(response) {
    return getUsername(response);
  }
}
</script>

<style lang="scss" scoped>
.responses-list {
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
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #3d5170;
    padding: 0.625rem;
    font-size: 0.8125rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
    &.active {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
  &__avatar {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    margin-right: 0.75rem;
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
