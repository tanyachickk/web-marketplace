<template lang="pug">
    card.messages-list
      card-header.messages-list__header Сообщения
      .messages-list__body
        .chat
          .chat__background
          .chat__body#container(:style="!this.isAnimate && 'opacity: 0'")
            .chat__message(
              v-for="(message, i) in messages"
              :key="i"
              :class="defineClass(message)"
            )
              .message__text {{ message.text }}
              .message__time(v-if="message.senderId") 13:03
          .last-message
        chat-new-message.new-message
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import VueScrollTo from 'vue-scrollto';
import { State } from 'vuex-class';
import Card from '@/components/ui/card/Card.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import ChatNewMessage from '@/components/pages/responses/ChatNewMessage.vue';

@Component({
  components: {
    Card,
    CardHeader,
    ChatNewMessage,
  },
})
export default class ChatMessagesList extends Vue {
  @State('user')
  private user!: any;
  @Prop({ type: Array, default: () => [] })
  private messages!: any[];

  isAnimate = false;

  private defineClass(message: any) {
    if (!message.senderId) {
      return 'system';
    }
    return message.senderId === this.user.id ? 'outcomming' : 'incomming';
  }

  @Watch('messages')
  onChangeMessages(value, oldValue) {
    if (value.length === oldValue.length) {
      return;
    }
    VueScrollTo.scrollTo('.last-message', {
      container: '#container',
      offset: 1000,
      duration: 100,
    });
    this.$nextTick(() => {
      this.isAnimate = true;
    });
  }
}
</script>

<style lang="scss" scoped>
.messages-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  &__header {
    flex-shrink: 0;
  }
  &__body {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
  }
  .chat {
    position: relative;
    flex-grow: 1;
    background-color: #fbfbfb;
    overflow: hidden;
    &__background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-GZO1adYmJqwbSLYuMRq10hVKb_vuP0g1kO8AuD1bOgjHZ8z');
      opacity: 0.1;
    }
    &__body {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.5rem 1.25rem;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
    }
    &__message {
      position: relative;
      display: flex;
      flex-direction: column;
      font-size: 0.75rem;
      font-weight: 400;
      padding: 0.5rem 0.75rem 0.25rem 0.75rem;
      min-width: 150px;
      max-width: 300px;
      border-radius: 0.45rem;
      margin: 0.5rem 0;
      &.incomming {
        align-self: flex-end;
        background-color: #abd8ff;
        box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
          0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);
        &::after {
          content: '';
          position: absolute;
          top: 0.3rem;
          left: 100%;
          border: 5px solid #abd8ff;
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
      }
      &.outcomming {
        align-self: flex-start;
        background-color: white;
        box-shadow: 0 0.2875rem 1.1875rem rgba(90, 97, 105, 0.1), 0 0.3375rem 1.0625rem rgba(90, 97, 105, 0.1),
          0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12), 0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
        &::after {
          content: '';
          position: absolute;
          top: 0.3rem;
          right: 100%;
          border: 5px solid white;
          border-left-color: transparent;
          border-bottom-color: transparent;
        }
      }
      &.system {
        align-self: center;
        text-align: center;
        color: rgba(0, 0, 0, 0.75);
        line-height: 1;
        margin: 0.3rem 0;
      }
    }
  }
  .message {
    &__time {
      align-self: flex-end;
      color: #868e96;
      padding-top: 0.25rem;
      font-size: 0.625rem;
      font-weight: 300;
    }
  }
  .new-message {
    border-top: 1px solid #e1e5eb;
    padding: 0.5rem;
  }
}
</style>
