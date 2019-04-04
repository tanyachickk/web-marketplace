<template lang="pug">
  card
    .request-card
      .request-card__header.request-header
        .request-header__avatar
          img(src="http://www.drreddyforlife.com/wp-content/uploads/2018/05/user-placeholder-1.jpg")
        .request-header__info
          .request-header__date {{ request.publishDate }}
          .request-header__name {{ contractorName }}
        .request-header__status-container
          .request-header__status.finish(v-if="request.isFinished") Завершена
          .request-header__status.confirm(v-if="request.isConfirmed") Подтверждена
          .request-header__status.waiting(v-else) Не подтверждена
      .request-card__body.request-body
        .request-body__title {{ request.title }}
        .request-body__description {{ request.description }}
      .request-footer
        .request-footer__response
          i.material-icons email
          div {{ responseCount }}
        .request-footer__budget
          i.material-icons monetization_on
          div {{ request.budget }} руб
        secondary-button
          router-link.request-footer__button(:to="`/requests/${request.id}`")
            div Подробнее
            i.material-icons arrow_forward
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/ui/card/Card.vue';
import SecondaryButton from '@/components/ui/SecondaryButton.vue';
import { getUsername } from '@/helpers/userData';

@Component({
  components: {
    Card,
    SecondaryButton,
  },
})
export default class RequestCard extends Vue {
  @Prop()
  private request: any;

  get contractorName() {
    return getUsername(this.request.customerDetails);
  }

  get responseCount() {
    const count = this.request.responseCount;
    let text = 'откликов';
    if (count % 10 === 1) {
      text = ' отклик';
    }
    if (count % 10 === 2 || count % 10 === 3 || count % 10 === 4) {
      text = ' отклика';
    }
    return `${count} ${text}`;
  }
}
</script>

<style lang="scss" scoped>
.request-card {
  width: 100%;
  &__header {
    padding: 1rem;
    border-bottom: 1px solid #e1e5eb;
  }
}

.request-header {
  position: relative;
  display: flex;
  align-items: stretch;

  &__avatar {
    flex-shrink: 0;
    width: 2.1875rem;
    height: 2.1875rem;
    box-shadow: 0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgba(90, 97, 105, 0.5);
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 1rem;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1.5;
  }
  &__name {
    font-weight: 500;
    font-size: 0.8125rem;
    color: #5a6169;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__date {
    color: #868e96;
    font-weight: 300;
    font-size: 0.65rem;
  }

  &__status-container {
    position: absolute;
    top: 0.75rem;
    right: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  &__status {
    padding: 0.1rem 0.4rem;
    border-radius: 0.3rem;
    color: #868e96;
    font-weight: 300;
    font-size: 0.6rem;
    border: 1px solid #e1e5eb;
    &.confirm {
      background-color: #0091d7;
      border-color: #0091d7;
      color: white;
    }
    &.finish {
      background-color: #17c671;
      border-color: #17c671;
      margin-right: 0.3rem;
      color: white;
    }
  }
}

.request-body {
  padding: 1rem;

  &__title {
    font-weight: 500;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #3d5170;
  }
  &__description {
    color: #5a6169;
    font-weight: 400;
    font-size: 0.8125rem;
  }
}

.request-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-top: 0;
  font-weight: 400;
  font-size: 0.8125rem;
  color: #868e96;

  &__response {
    display: flex;
    align-items: center;
    i {
      font-size: 1rem;
      margin-right: 0.25rem;
    }
  }

  &__budget {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    margin-right: auto;
    i {
      font-size: 1rem;
      margin-right: 0.15rem;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #868e96;
    text-decoration: none;

    i {
      margin-top: 0.1rem;
      margin-left: 0.25rem;
      font-size: 0.8rem;
    }
  }
}
</style>
