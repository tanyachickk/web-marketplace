<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class TabsContent extends Vue {
  @Prop({ type: Number, default: 0 })
  public activeTab: number;

  get tabs() {
    return this.$slots.default;
  }

  get tabWidth() {
    return 100 / this.tabs.length;
  }

  get containerStyle() {
    return {
      width: `${100 * this.tabs.length}%`,
    };
  }

  get tabStyle() {
    return {
      width: `${100 / this.tabs.length}%`,
      transform: `translateX(-${this.activeTab * 100}%)`,
    };
  }

  public render(h) {
    const children = this.$slots.default;
    return h(
      'div',
      {
        class: 'wrapper',
      },
      [
        h(
          'div',
          {
            class: 'tabs-content',
            style: this.containerStyle,
          },
          this.$slots.default.map((slot) =>
            h('div', { class: 'tabs-content__item', style: this.tabStyle }, [
              slot,
            ]),
          ),
        ),
      ],
    );
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  overflow: hidden;
}
.tabs-content {
  display: flex;
  height: 100%;
  &__item {
    height: 100%;
    transition: transform 0.2s ease;
  }
}
</style>
