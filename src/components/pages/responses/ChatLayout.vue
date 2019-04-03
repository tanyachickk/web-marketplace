<template lang="pug">
  .responses-chat
    chat-requests-list
    card.responses-chat__users
      card-header Отклики
    card.responses-chat__chat
      card-header Инфа о подрядчике
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/ui/card/Card.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import SecondaryButton from '@/components/ui/SecondaryButton.vue';
import ChatRequestsList from '@/components/pages/responses/ChatRequestsList.vue';

@Component({
  components: {
    Card,
    CardHeader,
    SecondaryButton,
    ChatRequestsList,
  },
})
export default class ResponsesChat extends Vue {
}
</script>

<style lang="scss" scoped>
.responses-chat {
  display: grid;
  grid-template-columns: 250px 250px 1fr;
  grid-template-rows: 100%;
  grid-column-gap: 1rem;
  height: 100%;
}
</style>
