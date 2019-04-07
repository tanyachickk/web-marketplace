<template lang="pug">
  .contractor
    breadcrumb.contractor__header(title='ООО "Комплексные решения"')
    .contractor__body
      .contractor__content
        card.contractor-info
          card-header Информация о подрядчике
          .contractor-info__body
            .field
              .field__label Наименование организации:
              .field__value ООО "Комплексные решения"
            .field.inline
              .field__label Наличие разрешение (СРО):
              .field__value Есть
            .field.inline
              .field__label Опыт:
              .field__value 5 лет
            .field.inline
              .field__label Текущий рейтинг:
              .field__value
                .rating-value
                  vue-star-rating.rating-value__stars(:rating="4.36" :star-size="16" :show-rating="false" :read-only="true" :increment="0.01")
                  .rating-value__result 4.36
            .field
              .field__label Описание компании
              .field__value По величине передаваемой мощности Компания входит в десятку самых крупных электросетевых компаний России. Компания занимает лидирующие позиции по сравнению с прочими территориальными сетевыми компаниями, входящими в составы МРСК, по показателю общей протяженности эксплуатируемых воздушных и кабельных линий, а также по количеству подстанций, трансформаторных подстанций и распределительных пунктов. Кроме того, Компания является единственной в России территориальной сетевой организацией, которой принадлежат объекты электросетевого хозяйства уровней напряжения от 0,4 кВ до 500 кВ.
                | На сегодняшний день в  филиалах ОАО «Сетевая компания» находится в эксплуатации 374 подстанции 35-500 кВ установленной мощностью 18628,3 МВА, в работе на ПС 35-500 кВ находится 744 силовых трансформаторов (автотрансформаторов) 3-500 кВ. 
        card.contractor-reviews
          card-header Отзывы о подрядчике
          .contractor-reviews__list
            .review(v-for="i in 20")
              .review__info
                .review__avatar(:style="`backgroundImage: url(https://secure.gravatar.com/avatar/9e6496b4accdc6517f27406f4f248264?s=96&d=mm&r=g)`")
                .review__content
                  .review__name Сергеев Петр Степанович
                  .review__date 24.03.2019
                vue-star-rating.review__rating(:rating="3" :star-size="16" :show-rating="false" :read-only="true" :increment="0.01")
              .review__text Все сделано качественно и в срок! Рекомендую!
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import RequestsService from '@/services/RequestsService';
import Breadcrumb from '@/components/ui/Breadcrumb.vue';
import Card from '@/components/ui/card/Card.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import CardItem from '@/components/ui/card/CardItem.vue';
import VueStarRating from 'vue-star-rating';

@Component({
  components: {
    Breadcrumb,
    Card,
    CardHeader,
    CardItem,
    VueStarRating,
  },
})
export default class Contractor extends Vue {
  @State('requests')
  private requestsList: any;
  @State('responses')
  private responsesList: any;
  @Action('getRequest')
  private getRequest: any;
  @Action('getResponses')
  private getResponses: any;

  @Prop({ type: Number, default: 0 })
  private id: number;
}
</script>

<style lang="scss" scoped>
.contractor {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &__body {
    position: relative;
    flex-grow: 1;
  }
  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 1rem;
    display: flex;
  }
}
.contractor-info {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-right: 0.75rem;
  overflow: hidden;
  &__body {
    flex-grow: 1;
    padding: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
.contractor-reviews {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  margin-left: 0.75rem;
  &__list {
    flex-grow: 1;
    overflow-y: auto;
  }
}
.review {
  padding: 0.75rem;
  border-bottom: 1px solid #dee2e6;
  &__info {
    display: flex;
    align-items: flex-start;
  }
  &__avatar {
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: center center;
    border-radius: 4px;
  }
  &__name {
    font-size: 1rem;
    color: #5a6169;
    margin-bottom: 0.2rem;
  }
  &__content {
    margin-left: 0.75rem;
  }
  &__date {
    font-weight: 300;
    font-size: 13px;
    color: #868e96;
  }
  &__text {
    margin-top: 0.5rem;
    color: #868e96;
    font-weight: 400;
    font-size: 14px;
  }
  &__rating {
    margin-right: 0;
    margin-left: auto;
    font-size: 14px;
  }
}
.field {
  &.inline {
    display: flex;
    align-items: center;
    margin-bottom: 0.7rem;
    .field__label {
      margin-bottom: 0;
      margin-right: 0.7rem;
    }
    .field__value {
      margin-bottom: 0;
      margin-right: 0.3rem;
    }
  }
  &__label {
    font-weight: 400;
    margin-bottom: 0.3rem;
    color: #868e96;
    font-size: 13px;
  }
  &__value {
    font-weight: 400;
    margin-bottom: 0.7rem;
    color: #5a6169;
    font-size: 14px;
  }
}
.rating-value {
  display: flex;
  align-items: center;
  &__result {
    margin-left: 0.3rem;
    font-size: 12px;
    color: #5a6169;
  }
}
</style>
