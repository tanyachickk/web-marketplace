<template lang="pug">
  button.secondary-button(@click="$emit('click')")
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class SecondaryButton extends Vue {}
</script>

<style lang="scss" scoped>
.secondary-button {
    border: 1px solid #e1e5eb;
    color: #3d5170;
    box-shadow: none;
    font-weight: 400;
    border-radius: .25rem;
    padding: .4286rem .875rem;
    font-size: .6875rem;
    line-height: 1.5;
    transition: all 250ms cubic-bezier(.27,.01,.38,1.06);
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0.125rem 0.625rem rgba(129,142,163,.2), 0 0.0625rem 0.125rem rgba(129,142,163,.3);
    }
}
</style>
