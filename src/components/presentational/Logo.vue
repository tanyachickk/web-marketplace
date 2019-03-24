<template lang="pug">
  .logo
    img.logo__image(src="~@/assets/logo.png")
    .logo__additional(v-if="isAdditional") Маркетплейс
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Logo extends Vue {
  @Prop({ type: Boolean, default: true })
  isAdditional: boolean;
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;

  &__image {
    width: 8.2em;
  }

  &__additional {
    display: flex;
    align-items: center;
    align-self: stretch;
    margin-left: 0.75em;
    padding-left: 0.75em;
    box-shadow: inset 0.13rem 0 0 #0091d7;
    font-family: "Exo 2";
    font-size: 1em;
    font-weight: 500;
    color: #0091d7;
    text-transform: uppercase;
  }
}
</style>
