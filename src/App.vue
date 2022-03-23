<template>
  <div id="app">
    <Header />
    <div class="main-wrapper">
      <Sidebar />
      <Main />
    </div>
  </div>
</template>

<script>
import Header from "./components//Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Sidebar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: stretch;
}
</style>
