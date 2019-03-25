<template lang="pug">
  .vertical-menu
    router-link.menu-item(
      v-for="(item, index) in items"
      :key="index"
      :class="{ 'menu-item_active': item.isActive }"
      :to="item.link"
    )
      i.menu-item__icon.material-icons {{ item.icon }}
      span.menu-item__text {{ item.title }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VerticalMenu extends Vue {
  @Prop({ type: Array, default: () => [] })
  public items!: any[];
}
</script>

<style lang="scss" scoped>
.vertical-menu {
  .menu-item {
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    will-change: background-color, box-shadow, color;
    transition: box-shadow 0.2s ease, color 0.2s ease,
      background-color 0.2s ease;
    font-size: 0.85rem;
    border-bottom: 1px solid #e1e5eb;
    font-weight: 400;
    color: #3d5170;
    padding: 0.9375rem 1.5625rem;
    text-decoration: none;
    cursor: pointer;

    &_active,
    &:hover {
      box-shadow: inset 0.1875rem 0 0 #0091d7;
      background-color: #fbfbfb;
      color: #0091d7;

      .menu-item__icon {
        color: #0091d7;
      }
    }

    &__icon {
      color: #cacedb;
      margin-right: 0.5rem;
      transition: color 0.2s ease;
      font-size: 1.125rem;
      will-change: color;
    }
  }
}
</style>
