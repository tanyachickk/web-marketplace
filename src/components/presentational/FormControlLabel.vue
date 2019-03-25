<template lang="pug">
  .control-label
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FormControlLabel extends Vue {}
</script>

<style lang="scss" scoped>
.control-label {
  color: #868e96;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.8125rem;
}
</style>
