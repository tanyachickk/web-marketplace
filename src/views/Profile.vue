<template lang="pug">
  .profile
   .profile__content Раздел находится в разработке
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>
.profile {
  padding: 1rem;
}
</style>
