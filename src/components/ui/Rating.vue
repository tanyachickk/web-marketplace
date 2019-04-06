<template lang="pug">
  .rating
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Rating extends Vue {
  @Prop()
  private value!: number;
}
</script>

<style lang="scss" scoped>
</style>
