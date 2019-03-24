<template lang="pug">
  .wrapper
    input.input(
      v-bind="$props"
      v-on="$listeners"
    )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BasicInput extends Vue {}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: auto;
  padding: 0.4375rem 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #e1e5eb;
  font-weight: 300;
  will-change: border-color, box-shadow;
  border-radius: 0.25rem;
  box-shadow: none;
  transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
    border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);

  &:focus {
    outline: none;
    color: #495057;
    background-color: #fff;
    border-color: #0091d7;
    box-shadow: 0 0.313rem 0.719rem rgba(0, 123, 255, 0.1),
      0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
  }
}
</style>
