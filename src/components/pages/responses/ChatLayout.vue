<template lang="pug">
  .responses-chat
    chat-requests-list(:value="id" :requests="requests" @input="onChangeId")
    chat-responses-list(v-model="responseId" :responses="responsesList")
    chat-messages-list(:messages="messages")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
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
  @Action('getDialogMessages')
  private getDialogMessages!: any;
  @State('requests')
  private requestsList: any;
  @State('responses')
  private responses: any;

  private id: number = 0;
  private timer = null;
  private responseId: number = 0;
  private messages = [];

  get requests() {
    return Object.values(this.requestsList);
  }

  get request() {
    if (!this.requests.length) {
      return null;
    }
    if (!this.id) {
      this.id = (this.requests[0] as any).id;
      this.messages = [];
    }
    return this.requestsList[this.id];
  }

  get responsesList() {
    return Object.values(this.responses).filter((response: any) => response.requestId === this.id);
  }

  private onChangeId(value) {
    this.id = value;
    this.responseId = 0;
    this.messages = [];
  }

  @Watch('requests')
  private onChangeRequests(value) {
    if (!this.id && value.length) {
      this.responseId = 0;
      this.id = value[0].id;
      this.messages = [];
    }
  }

  @Watch('responsesList')
  private onChangeResponses(value) {
    if (!this.responseId && value.length) {
      this.responseId = value[0].id;
      this.messages = [];
    }
  }

  @Watch('id')
  private async onChangeDialog() {
    if (this.responseId) {
      this.messages = await this.getDialogMessages(this.responseId);
    } else {
      this.messages = [];
    }
  }

  private created() {
    this.timer = setInterval(async () => {
      if (this.id && this.responseId) {
        this.messages = await this.getDialogMessages(this.responseId);
      } else {
        this.messages = [];
      }
    }, 2000);
  }

  private beforeDestroy() {
    clearInterval(this.timer);
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
