<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i");
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

* {
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}
</style>
