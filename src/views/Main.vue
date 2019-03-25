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
import Sidebar from '@/components/layout/Sidebar.vue';
import Navbar from '@/components/layout/Navbar.vue';

@Component({
  components: {
    Sidebar,
    Navbar,
  },
})
export default class Main extends Vue {
  get routes() {
    return (this.$router as any).options.routes[1].children
      .filter((route) => route.meta && route.meta.title)
      .map((route) => ({
        link: route.meta.sectionPath || route.path,
        title: route.meta.title,
        icon: route.meta.icon,
        isActive: this.$route.name === route.name,
      }));
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
}

.content {
  flex-grow: 1;
  padding: 0 1.5rem;
}
</style>
