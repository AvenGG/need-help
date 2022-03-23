<template>
  <header class="header">
    <a class="header__logo" title="Нужна помощь" href="#"></a>
    <div class="header__profile">
      <img
        src="@/assets/coordinator.png"
        class="header__profile-image"
        alt="Фото профиля"
      />
      <span class="header__profile-name">Екатерина</span>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  background-color: #fafafa;
  border-bottom: 1px solid #e6e6e6;
}
.header__logo {
  margin: 0 0 0 50px;
  width: 258px;
  height: 34.69px;
  text-decoration: none;
  background-image: url("../assets/nuzhnapomosh.svg");
}
.header__profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 150px;
}
.header__profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
}
.header__profile-name {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
}
</style>
