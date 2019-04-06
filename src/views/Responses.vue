<template lang="pug">
  .responses
    breadcrumb.responses__header(:section="$route" title="Отклики")
    .responses__body
      chat-layout(:id="id")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Breadcrumb from '@/components/ui/Breadcrumb.vue';
import ChatLayout from '@/components/pages/responses/ChatLayout.vue';

@Component({
  components: {
    Breadcrumb,
    ChatLayout,
  },
})
export default class Responses extends Vue {
  @Prop()
  private id!: number;
}
</script>

<style lang="scss" scoped>
.responses {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  &__body {
    position: relative;
    flex-grow: 1;
  }
}
</style>
