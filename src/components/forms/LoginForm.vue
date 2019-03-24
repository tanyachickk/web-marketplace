<template lang="pug">
  card.login-form
    tabs.login-form__header(:activeTab="activeTab" :tabs="tabs" @change-tab="activeTab = $event")
    tabs-content.login-form__body(:activeTab="activeTab")
      sign-in-form
      sign-up-form
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/layout/Card.vue";
import Tabs from "@/components/controls/Tabs.vue";
import TabsContent from "@/components/controls/TabsContent.vue";
import SignInForm from "@/components/forms/SignInForm.vue";
import SignUpForm from "@/components/forms/SignUpForm.vue";

@Component({
  components: {
    Card,
    Tabs,
    TabsContent,
    SignInForm,
    SignUpForm
  }
})
export default class LoginForm extends Vue {
  activeTab = 0;
  tabs: string[] = ["Вход в систему", "Регистрация"];
}
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  min-width: 400px;
  min-height: 300px;

  &__body {
    flex-grow: 1;
  }
}
</style>
