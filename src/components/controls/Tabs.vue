<template lang="pug">
  .custom-tabs
    .custom-tabs__item(
      v-for="(tab, index) in tabs"
      :class="{'custom-tabs__item_active': index === activeTab }"
      @click="$emit('change-tab', index)"
    ) {{ tab }}
    .custom-tabs__line(:style="lineStyle")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Tabs extends Vue {
  @Prop({ type: Number, default: 0 })
  activeTab: number;
  @Prop({ type: Array, default: () => [] })
  tabs: string[];

  get tabWidth() {
    return 100 / this.tabs.length;
  }

  get lineStyle() {
    return {
      width: `${this.tabWidth}%`,
      transform: `translateX(${this.activeTab * 100}%)`
    };
  }
}
</script>

<style lang="scss" scoped>
.custom-tabs {
  position: relative;
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #e1e5eb;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  &__item {
    flex: 1 0 0;
    text-align: center;
    color: #3d5170;
    transition: color 0.2s ease;
    cursor: pointer;

    &_active {
      color: #0091d7;
    }
  }

  &__line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.1875rem;
    background-color: #0091d7;
    transition: transform 0.2s ease;
  }
}
</style>
