<template lang="pug">
  button.button(@click="$emit('click')")
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class BasicButton extends Vue {}
</script>

<style lang="scss" scoped>
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-color: #0091d7;
    background-color: #0091d7;
    box-shadow: none;
    font-weight: 400;
    border: 1px solid transparent;
    padding: .5625rem 1rem;
    font-size: .75rem;
    line-height: 1.125;
    border-radius: .25rem;
    transition: all 250ms cubic-bezier(.27,.01,.38,1.06);
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color:  #0379bd;
      border-color:  #0379bd;
      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(0,123,255,.25);
    }
}
</style>
