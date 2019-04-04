<template lang="pug">
  .custom-breadcrumb
    .custom-breadcrumb__title {{ title }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Breadcrumb extends Vue {
  @Prop({ type: String, default: '' })
  public title: string;
}
</script>

<style lang="scss" scoped>
.custom-breadcrumb {
  padding: 1.5rem 0;

  &__section {
    letter-spacing: 0.125rem;
    color: #818ea3;
    font-size: 0.625rem;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  &__title {
    font-size: 1.625rem;
    font-weight: 500;
    line-height: 1;
    color: #3d5170;
  }
}
</style>
