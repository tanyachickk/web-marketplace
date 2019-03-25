<template lang="pug">
  .requests
    breadcrumb.requests__header(:section="$route" :title="title")
    .requests__body Requests {{ requestId }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Breadcrumb from '@/components/presentational/Breadcrumb.vue';

@Component({
  components: {
    Breadcrumb,
  },
})
export default class Requests extends Vue {
  @Prop({ type: Number, default: 0 })
  public id: number;

  get requestId() {
    return !isNaN(this.id) ? this.id : 0;
  }

  get title() {
    return this.requestId ? `Заявка #${this.requestId}` : 'Список заявок';
  }
}
</script>

<style lang="scss" scoped>
.requests {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__body {
    flex-grow: 1;
  }
}
</style>
