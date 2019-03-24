<template lang="pug">
  .custom-card
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
.custom-card {
  background-color: #fff;
  border: none;
  border-radius: 0.625rem;
  box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
    0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);
}
</style>
