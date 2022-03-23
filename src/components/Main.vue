<template>
  <main class="main">
    <h1 class="main__header">Создание сбора</h1>
    <section class="fundraising">
      <h3 class="fundraising__info">Информация о сборе</h3>
      <label
        for="fundraising-input"
        class="fundraising__label"
        title="Название сбора"
        >Название сбора</label
      >
      <input
        type="text"
        id="fundraising-input"
        class="fundraising__input"
        v-model="fundraisingName"
      />

      <h4 class="fundraising__groups" title="Целевые группы">Целевые группы</h4>
      <p class="fundraising__tip">Укажите кому помогает ваша организация</p>
      <Paths
        class="fundraising__paths"
        :paths="selectedGroupsPaths"
        @remove="remove"
      />
      <div class="fundraising__select-wrapper">
        <button
          id="fundraising-select"
          class="fundraising__select"
          @click="changeState"
          title="Выбрать ещё"
        >
          <img
            src="@/assets/icon.svg"
            class="fundraising__select-image"
            alt="Выбрать ещё"
          />

          <NestedList
            v-if="groups.length"
            v-show="isListOpen"
            :list="groups"
            :childrenName="'groups'"
            class="fundrising__list"
            @select="groupSelected"
          />
        </button>
        <label for="fundraising-select" class="fundraising__select-label"
          >Выбрать ещё</label
        >
      </div>
      <div class="divider"></div>
      <button
        class="fundraising__save"
        title="Сохранить и продолжить"
        @click="save"
      >
        <span class="fundraising__save-span">Сохранить и продолжить</span>
      </button>
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
      isListOpen: false,
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
    changeState() {
      this.isListOpen = !this.isListOpen;
    },
    save() {
      const selectedIds = Object.keys(this.selectedGroupsPaths).map(Number);

      const pathIds = [];
      selectedIds.forEach((id) => {
        pathIds.push(...this.selectedGroupsPaths[id].map((g) => g.id));
      });
      console.log("groups: ", pathIds);
      console.log(
        "Не совсем понял почему нужно выводить в таком формате сделал ещё в других:"
      );
      console.log("Уникальные затронутые группы: ", Array.from(new Set(pathIds)));
      console.log("Выбранные группы без дочерних эллементов: ", selectedIds);
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
  min-height: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 42px 65px 65px;
}
.fundraising__info {
  font-size: 30px;
  line-height: 35px;
}
.fundraising__groups {
  font-size: 30px;
  line-height: 35px;
  margin-top: 52px;
}
.fundraising__tip {
  margin-top: 34px;
  font-size: 20px;
  line-height: 25px;
  color: #545351;
}
.fundraising__label {
  font-size: 20px;
  line-height: 25px;
  margin-top: 54px;
}
.fundraising__input {
  width: 960px;
  height: 50px;
  margin-top: 24px;

  background: #fafafa;
  border: 1px solid #e6e6e6;
}
.fundraising__select-wrapper {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fundraising__select {
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
}

.fundraising__select-image {
  width: 20px;
  height: 20px;
}
.fundraising__select-label {
  font-size: 20px;
  line-height: 25px;
}
.fundrising__list {
  position: absolute;
  bottom: 50px;
  left: 0;
  margin-top: 100px;
}
.divider {
  height: 1px;
  width: 100%;
  background: #e6e6e6;
  margin-top: 48px;
}
.fundraising__save {
  width: 320px;
  height: 60px;
  margin-top: 60px;
  background: #e65639;
  outline: none;
  border: none;
}
.fundraising__save-span {
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
}

.fundraising__paths {
  margin-top: 54px;
}
</style>
