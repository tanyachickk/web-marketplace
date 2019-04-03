<template lang="pug">
  .radio-button(@click="$emit('click')")
    .radio-button__control(:class="isActive && 'active'")
    .radio-button__label
      slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class RadioButton extends Vue {
  @Prop({ type: Boolean, default: false })
  private isActive: boolean;
}
</script>

<style lang="scss" scoped>
.radio-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  &__control {
    position: relative;
    width: 1.125rem;
    height: 1.125rem;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #e1e5eb;
    transition: all 250ms cubic-bezier(.27,.01,.38,1.06);
    box-shadow: none;
    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      background: #fff;
      top: 50%;
      left: 50%;
      width: .5rem;
      height: .5rem;
      opacity: 0;
      transform-origin: center;
      transform: scale(0) translate(-50%, -50%);
      transition: all 250ms cubic-bezier(.27,.01,.38,1.06);
    }
    &.active {
      border-color: #0091d7;
      background-color: #0091d7;
      &::after {
        opacity: 1;
        transform: scale(1) translate(-50%, -50%);
      }
    }
  }
  &__label {
    padding-left: .5rem;
  }
}
</style>
