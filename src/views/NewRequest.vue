<template lang="pug">
  .new-request
    breadcrumb.new-request__header(title="Создание новой заявки")
    card.request-form
      .request-form__field
        form-control-label.dark Заголовок
        basic-input(v-model="title")
      .request-form__field
        form-control-label.dark Описание
        basic-textarea(v-model="description")
      .request-form__field
        form-control-label.dark Бюджет
        basic-input(v-model="budget")
      .request-form__field
        form-control-label.dark Срок исполнения
        basic-input(type="date" v-model="expirationDate")
      .request-form__footer
        basic-button(@click="create") Создать заявку
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import Breadcrumb from '@/components/ui/Breadcrumb.vue';
import Card from '@/components/ui/card/Card.vue';
import FormControlLabel from '@/components/ui/FormControlLabel.vue';
import BasicInput from '@/components/ui/BasicInput.vue';
import BasicTextarea from '@/components/ui/BasicTextarea.vue';
import BasicButton from '@/components/ui/BasicButton.vue';

@Component({
  components: {
    Breadcrumb,
    Card,
    FormControlLabel,
    BasicInput,
    BasicTextarea,
    BasicButton,
  },
})
export default class NewRequest extends Vue {
  @Action('createRequest')
  private createRequest!: any;

  private title: string = '';
  private description: string = '';
  private budget: string = '';
  private expirationDate: Date = null;

  private async create() {
    await this.createRequest({
      title: this.title,
      description: this.description,
      expirationDate: this.expirationDate,
      budget: this.budget,
    });
    this.$router.replace('/requests');
  }
}
</script>

<style lang="scss" scoped>
.new-request {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;

  .request-form {
    display: flex;
    flex-direction: column;
    padding: 0.875rem 1.125rem 1.125rem;
    max-width: 650px;
    flex-grow: 1;

    &__field {
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: auto;
      }
    }

    &__footer {
      align-self: flex-end;
      margin-top: auto;
    }
  }
}
.budget-field {
  display: flex;
  align-items: center;
  width: 100%;
  &__divider {
    padding: 0 0.5rem;
  }
  &__input {
    flex-grow: 1;
  }
}
.dark {
  color: #5a6169;
}
</style>
