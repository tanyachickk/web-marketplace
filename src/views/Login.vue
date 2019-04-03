<template lang="pug">
  .login-page
    logo.login-page__logo
    login-form
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/pages/login/LoginForm.vue';
import Logo from '@/components/shared/Logo.vue';

@Component({
  components: {
    LoginForm,
    Logo,
  },
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: auto;
  background-color: #f5f6f8;

  &__logo {
    flex-shrink: 0;
    margin: 8vh 0 6vh;
  }
}
</style>
