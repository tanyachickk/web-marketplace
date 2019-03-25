<template lang="pug">
  .not-found
    .not-found__title 404
    .not-found__description Страница не найдена
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class NotFound extends Vue {}
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    color: #cacedb;
    font-weight: 700;
    font-size: 4rem;
    margin-bottom: 1.5625rem;
    letter-spacing: -0.0625rem;
    line-height: 2.25rem;
  }

  &__description {
    margin-bottom: 0.625rem;
    color: #3d5170;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
}
</style>
