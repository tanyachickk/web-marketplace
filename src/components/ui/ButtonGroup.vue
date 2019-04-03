<template lang="pug">
  .button-group
    .button-group__item(
      v-for="(item, i) in variants"
      :class="i === value && 'active'"
      :key="i"
      @click="$emit('input', i)"
    ) {{ item }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ButtonGroup extends Vue {
  @Prop({ type: Array, default: () => ([]) })
  private variants: string[];
  @Prop({ type: Number, default: 0 })
  private value: number;
}
</script>

<style lang="scss" scoped>
.button-group {
  display: flex;
  color: #5a6169;
  word-wrap: break-word;
  font-size: .75rem;
  background-color: #fff;
  &__item {
    flex: 1;
    padding: 0.5625rem 1rem;
    color: #3d5170;
    border: 1px solid rgba(0,0,0,.125);
    text-align: center;
    transition: all .2s ease;
    &:first-child {
      border-radius: .25rem 0 0 .25rem;
    }
    &:last-child {
      border-radius: 0 .25rem .25rem 0;
    }
    &:not(.active):hover {
      cursor: pointer;
      box-shadow: 0 0.125rem 0.625rem rgba(129,142,163,.2), 0 0.0625rem 0.125rem rgba(129,142,163,.3);
    }
    &.active {
      color: white;
      background-color: #0091d7;
      border-color: #0091d7;
      color: #fff;
    }
  }
}
</style>
