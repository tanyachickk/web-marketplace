<template lang="pug">
  .sign-in
    .sign-in__control
      control-label E-mail
      input-group(
        v-model="email"
        type="email"
      )
        i.material-icons alternate_email
    .sign-in__control
      control-label Пароль
      input-group(
        v-model="password"
        type="password"
      )
        i.material-icons lock
    .sign-in__footer
      basic-button(@click="signIn") Войти
      .sign-in__password-recovery Забыли пароль?
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginService from '@/services/LoginService';
import InputGroup from '@/components/ui/InputGroup.vue';
import ControlLabel from '@/components/ui/FormControlLabel.vue';
import BasicButton from '@/components/ui/BasicButton.vue';

@Component({
  components: {
    InputGroup,
    ControlLabel,
    BasicButton,
  },
})
export default class SignInForm extends Vue {
  private LoginService = new LoginService();

  private email: string = 'admin';
  private password: string = 'admin';

  private async signIn() {
    await this.LoginService.signIn(this.email, this.password);
    this.$router.replace('/');
  }
}
</script>

<style lang="scss" scoped>
.sign-in {
  padding: 0.875rem 1.875rem 0.8125rem;
  &__control {
    margin-bottom: 1rem;
  }
  i {
    font-size: 0.9rem;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }

  &__password-recovery {
    font-size: .8125rem;
    font-weight: 400;
    color: #0091d7;
    transition: all 250ms cubic-bezier(.27,.01,.38,1.06);
    cursor: pointer;

    &:hover {
      color:  #0379bd;
      text-decoration: underline;
    }
  }
}
</style>
