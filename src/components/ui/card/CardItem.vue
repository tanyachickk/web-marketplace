<template lang="pug">
  .card-item
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class CardItem extends Vue {}
</script>

<style lang="scss" scoped>
.card-item {
  color: #3d5170;
  font-weight: 400;
  padding: 0.625rem;
  font-size: 0.8125rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
