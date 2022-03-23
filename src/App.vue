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
   font-weight: 400;
}
html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
ul {
  list-style: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  color: #302f2d;
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
