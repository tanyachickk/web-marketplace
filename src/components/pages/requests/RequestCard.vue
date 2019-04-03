<template lang="pug">
  card
    .request-card
      .request-card__header.request-header
        .request-header__avatar
          img(src="https://designrevision.com/demo/shards-dashboard-lite/images/avatars/1.jpg")
        .request-header__info
          .request-header__date 12.02.2019
          .request-header__name ОАО "Сетевая компания"
        .request-header__budget 50 000 руб
      .request-card__body.request-body
        .request-body__title Выполнение работ по обновлению чего-нибудь
        .request-body__description West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...
      .request-footer
        .request-footer__response
          i.material-icons email
          div 12 откликов
        secondary-button.request-footer__button
          div Подробнее
          i.material-icons arrow_forward
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/ui/card/Card.vue';
import SecondaryButton from '@/components/ui/SecondaryButton.vue';

@Component({
  components: {
    Card,
    SecondaryButton,
  },
})
export default class RequestCard extends Vue {
  @Prop()
  private request: any;
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
    box-shadow: 0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgba(90,97,105,.5);
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

  &__budget {
    position: absolute;
    top: .75rem;
    right: 1rem;
    padding: .1rem .4rem;
    border-radius: .3rem;
    color: #868e96;
    font-weight: 300;
    font-size: 0.6rem;
    border: 1px solid #e1e5eb;
  }
}

.request-body {
  padding: 1rem;

  &__title {
    font-weight: 500;
    margin-bottom: .75rem;
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
      margin-right: .25rem;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      margin-top: .1rem;
      margin-left: .25rem;
      font-size: .8rem;
    }
  }
}
</style>
