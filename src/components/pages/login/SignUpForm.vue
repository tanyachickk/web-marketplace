<template lang="pug">
  .sign-up
    .sign-up__control
      button-group(
        v-model="role"
        :variants="roles"
      )
    .sign-up__control
      radio-group(
        v-model="type"
        :variants="types"
      )
    .sign-up__control(v-if="type === 0")
      control-label Название компании
      input-group(
        v-model="companyName"
        type="text"
      )
        i.material-icons person
    .sign-up__control(v-if="type === 1")
      control-label Фамилия
      input-group(
        v-model="lastName"
        type="text"
      )
        i.material-icons person
    .sign-up__control(v-if="type === 1")
      control-label Имя
      input-group(
        v-model="firstName"
        type="text"
      )
        i.material-icons person
    .sign-up__control
      control-label Город
      input-group(
        v-model="city"
        type="text"
      )
        i.material-icons location_on
    .sign-up__control
      control-label E-mail
      input-group(
        v-model="email"
        type="email"
      )
        i.material-icons alternate_email
    .sign-up__control
      control-label Пароль
      input-group(
        v-model="password"
        type="password"
      )
        i.material-icons lock
    .sign-up__footer
      basic-button(@click="register") Зарегистрироваться
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import InputGroup from '@/components/ui/InputGroup.vue';
import ControlLabel from '@/components/ui/FormControlLabel.vue';
import BasicButton from '@/components/ui/BasicButton.vue';
import ButtonGroup from '@/components/ui/ButtonGroup.vue';
import RadioGroup from '@/components/ui/RadioGroup.vue';

@Component({
  components: {
    InputGroup,
    ControlLabel,
    BasicButton,
    ButtonGroup,
    RadioGroup,
  },
})
export default class SignUpForm extends Vue {
  @Action('signUp')
  private signUp!: any;

  private role: number = 0;
  private type: number = 0;
  private companyName: string = '';
  private firstName: string = '';
  private lastName: string = '';
  private city: string = '';
  private email: string = '';
  private password: string = '';

  private roles = ['Я заказчик', 'Я подрядчик'];
  private types = ['Юридическое лицо', 'Физическое лицо'];

  get signUpData() {
    const result: any = {
      role: this.role ? 'contractor' : 'customer',
      email: this.email,
      password: this.password,
      isLegalEntity: this.type === 0 ? true : false,
      address: this.city,
    };
    if (this.type) {
      result.lastName = this.lastName;
      result.firstName = this.firstName;
    } else {
      result.companyName = this.companyName;
    }
    return result;
  }

  private async register() {
    await this.signUp(this.signUpData);
    this.$router.replace('/');
  }
}
</script>

<style lang="scss" scoped>
.sign-up {
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
    margin: 2rem 0 1rem;
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
