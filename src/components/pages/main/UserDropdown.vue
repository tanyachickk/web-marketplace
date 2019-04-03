<template lang="pug">
  .user-dropdown
    .user-dropdown__link
      i.material-icons.user-dropdown__icon.user-icon person
      span Профиль
    .user-dropdown__link
      i.material-icons.user-dropdown__icon email
      span Сообщения
    .user-dropdown__link
      i.material-icons.user-dropdown__icon settings
      span Настройки
    .user-dropdown__divider
    .user-dropdown__link(@click="logout")
      i.material-icons.user-dropdown__icon exit_to_app
      span Выйти
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class UserDropdown extends Vue {
  private logout() {
    localStorage.removeItem('token');
    this.$router.replace('/login');
  }
}
</script>

<style lang="scss" scoped>
.user-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,.11), 0 3px 10px rgba(0,0,0,.05), 0 2px 3px rgba(0,0,0,.06);
  padding: .25rem 0;
  font-size: .813rem;
  color: #5a6169;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.05);
  border-radius: 0 0 .375rem .375rem;
  padding: .25rem 0;
  z-index: -1;

  &__divider {
    margin: .25rem 0;
    border-top: 1px solid #e9ecef;
  }

  &__icon {
    font-size: .75rem;
    width: .9rem;
    margin-right: .5rem;
    vertical-align: middle;
    color: #c3c7cc;
    &.user-icon {
      font-size: .9rem;
    }
  }

  &__link {
    padding: .375rem .875rem;
    font-size: .813rem;
    font-weight: 300;
    color: #212529;
    transition: background-color 250ms cubic-bezier(.27,.01,.38,1.06),color 250ms cubic-bezier(.27,.01,.38,1.06);

    &:hover {
      background-color: #fafafb;
      color: #16181b;
    }

    span {
      vertical-align: middle;
    }
  }
}
</style>
