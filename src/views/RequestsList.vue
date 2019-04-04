<template lang="pug">
  .requests-list
    breadcrumb.requests-list__header(:title="$route.meta.title")
    router-link.requests-list__button(to="/new-request")
      basic-button
        i.material-icons add
        span Создать новую заявку
    .requests-list__body
      .requests-list__list
        request-card.requests-list__item(
          v-for="(request, index) in requests"
          :key="index"
          :request="request"
        )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import Breadcrumb from '@/components/ui/Breadcrumb.vue';
import RequestCard from '@/components/pages/requestsList/RequestCard.vue';
import BasicButton from '@/components/ui/BasicButton.vue';

@Component({
  components: {
    Breadcrumb,
    RequestCard,
    BasicButton,
  },
})
export default class RequestsList extends Vue {
  @Action('getRequests')
  private getRequests!: any;
  @Action('getResponses')
  private getResponses!: any;
  @State('requests')
  private requestsList: any;

  get requests() {
    return Object.values(this.requestsList);
  }

  private mounted() {
    this.getRequests();
    this.getResponses();
  }
}
</script>

<style lang="scss" scoped>
.requests-list {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;

  &__button {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    text-decoration: none;
    i {
      font-size: 1.2rem;
      margin-left: -0.2rem;
      margin-right: 0.2rem;
    }
  }

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
