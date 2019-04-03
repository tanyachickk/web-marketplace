<template lang="pug">
  card.login-form
    tabs.login-form__header(:activeTab="activeTab" :tabs="tabs" @change-tab="activeTab = $event")
    tabs-content.login-form__body(:activeTab="activeTab")
      sign-in-form
      sign-up-form
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/ui/card/Card.vue';
import Tabs from '@/components/ui/tabs/Tabs.vue';
import TabsContent from '@/components/ui/tabs/TabsContent.vue';
import SignInForm from '@/components/pages/login/SignInForm.vue';
import SignUpForm from '@/components/pages/login/SignUpForm.vue';

@Component({
  components: {
    Card,
    Tabs,
    TabsContent,
    SignInForm,
    SignUpForm,
  },
})
export default class LoginForm extends Vue {
  public activeTab = 0;
  public tabs: string[] = ['Вход в систему', 'Регистрация'];
}
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 300px;
  margin-bottom: 5rem;
  flex-shrink: 0;

  &__body {
    flex-grow: 1;
  }
}
</style>
