<template lang="pug">
  .card-header
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class CardHeader extends Vue {}
</script>

<style lang="scss" scoped>
.card-header {
  padding: .75rem;
  border-bottom: 1px solid #e1e5eb;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #3d5170;
}
</style>
