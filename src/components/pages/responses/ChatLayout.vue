<template lang="pug">
  .responses-chat
    chat-requests-list(:requests="requests")
    chat-responses-list(:responses="responses")
    chat-messages-list
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import Card from '@/components/ui/card/Card.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import SecondaryButton from '@/components/ui/SecondaryButton.vue';
import ChatRequestsList from '@/components/pages/responses/ChatRequestsList.vue';
import ChatResponsesList from '@/components/pages/responses/ChatResponsesList.vue';
import ChatMessagesList from '@/components/pages/responses/ChatMessagesList.vue';

@Component({
  components: {
    Card,
    CardHeader,
    SecondaryButton,
    ChatRequestsList,
    ChatResponsesList,
    ChatMessagesList,
  },
})
export default class ResponsesChat extends Vue {
  @Action('getRequests')
  private getRequests!: any;
  @Action('getResponses')
  private getResponses!: any;
  @State('requests')
  private requestsList: any;

  @Prop()
  private id!: number;

  get requests() {
    return Object.values(this.requestsList);
  }

  get responses() {
    return this.requestsList[this.id] || [];
  }

  private mounted() {
    this.getRequests();
    this.getResponses();
  }
}
</script>

<style lang="scss" scoped>
.responses-chat {
  position: absolute;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 2fr;
  grid-template-rows: 100%;
  grid-column-gap: 1rem;
  width: 100%;
  height: 100%;
}
</style>
