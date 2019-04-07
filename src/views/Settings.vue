<template lang="pug">
  .settings
   .settings__content Раздел находится в разработке
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Settings extends Vue {}
</script>

<style lang="scss" scoped>
.settings {
  padding: 1rem;
}
</style>
