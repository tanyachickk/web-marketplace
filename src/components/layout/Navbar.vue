<template lang="pug">
  .navbar
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  background-color: white;
  box-shadow: 0 0.125rem 0.625rem rgba(90, 97, 105, 0.12);
}
</style>
