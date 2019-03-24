<template lang="pug">
  .sign-in
    .sign-in__control
      control-label E-mail
      input-group(type="email")
        i.material-icons alternate_email
    .sign-in__control
      control-label Пароль
      input-group(type="password")
        i.material-icons lock
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InputGroup from "@/components/controls/InputGroup.vue";
import ControlLabel from "@/components/presentational/FormControlLabel.vue";

@Component({
  components: {
    InputGroup,
    ControlLabel
  }
})
export default class SignInForm extends Vue {}
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
}
</style>
