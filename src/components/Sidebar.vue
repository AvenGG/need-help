<template>
  <aside class="sidebar">
    <nav class="navigation">
      <ul>
        <li
          class="navigation__item"
          v-for="item of navItems"
          :title="item.title"
        >
          <img :src="item.imgSrc" :alt="item.title" class="navigation__icon" />
          <span class="navigation__text" :title="item.title">
            {{ item.title }}
          </span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      navItems: [
        {
          title: "Панель управления",
          imgSrc: require("@/assets/panel.svg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #FAFAFA;
  width: 360px;
  border-right: 1px solid #E6E6E6;
}

.navigation__item {
  cursor: pointer;
  height: 80px;
  margin: 0 80px 0 40px;
  display: flex;
  align-items: center;
}
.navigation__text {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  margin-left: 20px;
  color: #302f2d;
}
.navigation__icon {
  width: 20px;
  height: 20px;
  margin: 10px;
}
</style>
