<template lang="pug">
  aside.sidebar
    .sidebar__logo
      img(src="~@/assets/logo.png" width="100")
    vertical-menu.sidebar__menu(:items="items")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VerticalMenu from '@/components/layout/VerticalMenu.vue';

@Component({
  components: {
    VerticalMenu,
  },
})
export default class Sidebar extends Vue {
  @Prop({ type: Array, default: () => [] })
  public items!: any[];
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: white;
  box-shadow: 0 0.125rem 9.375rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.5rem rgba(90, 97, 105, 0.12),
    0 0.9375rem 1.375rem rgba(90, 97, 105, 0.1),
    0 0.4375rem 2.1875rem rgba(165, 182, 201, 0.1);
  z-index: 10;

  &__logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1.5625rem;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #e1e5eb;
    box-sizing: content-box;
  }
  &__menu {
    flex-grow: 1;
  }
}
</style>
