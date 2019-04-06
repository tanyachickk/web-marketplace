<template lang="pug">
  .new-message
    input.new-message__input(
      :value="value"
      placeholder="Введите текст сообщения..."
      v-on="listeners"
    )
    button.new-message__send-button
      i.material-icons send
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class InputGroup extends Vue {
  @Prop() public value: string;

  get listeners() {
    return {
      ...this.$listeners,
      input: (event) => {
        this.$emit('input', event.target.value);
      },
    };
  }
}
</script>

<style lang="scss" scoped>
.new-message {
  display: flex;
  align-items: stretch;
  border-radius: 0.25rem;

  &__send-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.375rem 0.75rem;
    font-size: 0.8125rem;
    font-weight: 300;
    line-height: 1.5;
    color: #abb6bf;
    background-color: #fff;
    border: 1px solid #e1e5eb;
    border-radius: 0 0.25rem 0.25rem 0;
    border-left: none;
    outline: none;
    cursor: pointer;
    &:hover {
      color: #3d5170;
      box-shadow: 0 0.125rem 0.625rem rgba(129, 142, 163, 0.2), 0 0.0625rem 0.125rem rgba(129, 142, 163, 0.3);
    }
    &:active {
      color: white;
      background-color: var(--primary);
      border-color: var(--primary);
      box-shadow: none;
    }
  }

  &__input {
    flex-grow: 1;
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
    border-radius: 0.25rem 0 0 0.25rem;
    box-shadow: none;
    transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);

    &:focus {
      outline: none;
      color: #495057;
      background-color: #fff;
      border-color: #0091d7;
      box-shadow: 0 0.313rem 0.719rem rgba(0, 123, 255, 0.1), 0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
    }
  }
}
</style>
