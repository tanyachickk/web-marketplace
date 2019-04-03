<template lang="pug">
  .requests
    breadcrumb.requests__header(:section="$route" :title="title")
    .requests__body
      .requests__list
        request-card.requests__item(
          v-for="(request, index) in 10"
          :key="index"
          :request="request"
        ) {{ index }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import RequestsService from '@/services/RequestsService';
import Breadcrumb from '@/components/ui/Breadcrumb.vue';
import RequestCard from '@/components/pages/requests/RequestCard.vue';

@Component({
  components: {
    Breadcrumb,
    RequestCard,
  },
})
export default class Requests extends Vue {
  @Prop({ type: Number, default: 0 })
  private id: number;

  private RequestsService = new RequestsService();
  private requests: any[] = [];

  private get requestId() {
    return !isNaN(this.id) ? this.id : 0;
  }

  private get title() {
    return this.requestId ? `Заявка #${this.requestId}` : 'Список заявок';
  }

  private async mounted() {
    this.requests = await this.RequestsService.getRequests();
  }
}
</script>

<style lang="scss" scoped>
.requests {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;

  &__body {
    flex-grow: 1;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, calc((100% - 4rem) / 3));
    grid-gap: 2rem;
    justify-content: space-between;
  }
}
</style>
