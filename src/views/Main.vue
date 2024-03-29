<template lang="pug">
  .wrapper
    sidebar(:items="routes")
    main.body
      navbar
      router-view.content
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import axios, { setToken } from '@/config/axios';
import Sidebar from '@/components/layout/Sidebar.vue';
import Navbar from '@/components/layout/Navbar.vue';

@Component({
  components: {
    Sidebar,
    Navbar,
  },
})
export default class Main extends Vue {
  @Action('getUser')
  private getUser!: any;
  @Action('getRequests')
  private getRequests!: any;
  @Action('getResponses')
  private getResponses!: any;
  @Action('update')
  private update!: any;

  @State('user')
  private user!: any;

  private timer = null;

  get routes() {
    return (this.$router as any).options.routes[1].children
      .filter((route) => route.meta && route.meta.title)
      .map((route) => ({
        link: route.path,
        title: route.meta.title,
        name: route.name,
        icon: route.meta.icon,
        isActive: this.$route.name === route.name,
      }));
  }

  private created() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.replace('/login');
      return;
    }
    setToken(token);
    this.update();
    this.timer = setInterval(() => {
      const id = this.$route.params.requestId;
      this.update(id);
    }, 2000);
  }

  private beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  background-color: #f5f6f8;
}

.body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}

.content {
  flex-grow: 1;
  padding: 0 1.5rem;
  overflow: auto;
}
</style>
