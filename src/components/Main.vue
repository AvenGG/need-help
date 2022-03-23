<template>
  <main class="main">
    <h1 class="main__header">Создание сбора</h1>
    <section class="fundraising">
      <h3 class="fundraising__info">Информация о сборе</h3>
      <label for="fundraising-input" class="fundraising__label"
        >Название сбора</label
      >
      <input
        type="text"
        id="fundraising-input"
        class="fundraising__input"
        v-model="fundraisingName"
      />

      <p>Целевые группы</p>
      <p>Укажите кому помогает ваша организация</p>
      <Paths
        :paths="selectedGroupsPaths"
        style="margin-left: 65px"
        @remove="remove"
      />
      <button
        id="fundraising-select"
        class="fundraising__select"
        @click="selectMore"
      >
        <img
          src="@/assets/icon.svg"
          class="fundraising__select-image"
          alt="Выбрать ещё"
        />
      </button>
      <label for="fundraising-select">Выбрать ещё</label>

      <NestedList
        v-if="groups.length"
        :list="groups"
        :childrenName="'groups'"
        @select="groupSelected"
      />
    </section>
  </main>
</template>
<script>
import { getGroups } from "../api";
import NestedList from "./NestedList.vue";
import Paths from "./Paths.vue";
export default {
  name: "Main",
  components: { NestedList, Paths },
  data() {
    return {
      groups: [],
      loading: false,
      fundraisingName: "",
      selectedGroupsPaths: {},
    };
  },
  mounted() {
    this.getGroups();
  },
  methods: {
    async getGroups() {
      this.loading = true;
      this.groups = await getGroups;
      this.loading = false;
    },
    selectMore() {
      this.isListOpen = true;
    },
    groupSelected(group) {
      Object.keys(group).forEach((id) => {
        if (id in this.selectedGroupsPaths) {
          this.remove(id);
        } else {
          this.$set(this.selectedGroupsPaths, id, group[id]);
        }
      });
    },
    remove(id) {
      this.$delete(this.selectedGroupsPaths, id);
    },
  },
};
</script>

<style>
.main {
  padding: 50px 60px;
  width: 100%;
}
.main__header {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 50px;
  color: #302f2d;
}
.fundraising {
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  width: 100%;
}
.fundraising__info {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #302f2d;
}
.fundraising__label {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #302f2d;
}
.fundraising__input {
  width: 960px;
  height: 50px;
  left: 0px;
  top: 50px;
  background: #fafafa;
  border: 1px solid #e6e6e6;
}
.fundraising__select {
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  cursor: pointer;
}

.fundraising__select-image {
  width: 20px;
  height: 20px;
}
</style>
