<template lang="pug">
  .radio-group
    radio-button.radio-group__item(
      v-for="(item, i) in variants"
      :key="i"
      :is-active="i === value"
      @click="$emit('input', i)"
    ) {{ item }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RadioButton from '@/components/ui/RadioButton.vue';

@Component({
  components: {
    RadioButton,
  },
})
export default class RadioGroup extends Vue {
  @Prop({ type: Array, default: () => ([]) })
  private variants: string[];
  @Prop({ type: Number, default: 0 })
  private value: number;
}
</script>

<style lang="scss" scoped>
.radio-group {
  display: flex;
  color: #5a6169;
  word-wrap: break-word;
  font-size: .75rem;
  &__item {
    flex: 1;
  }
}
</style>
