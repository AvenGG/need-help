<template>
  <ul class="list">
    <li
      v-if="!isMainRoot"
      class="list__item list__item_back"
      title="Назад"
      @click.stop="back"
    >
      <img
        src="@/assets/arrowRight.svg"
        class="list__item-arrow list__item-arrow_reverse"
        alt="Назад"
      />
      <span class="list__item-text">{{ currentRootElement.name }}</span>
    </li>
    <li
      v-if="currentRootElement.id"
      title="Все дети"
      class="list__item"
      @click.stop="selectAllChildren"
    >
      <span class="list__item-text">{{
        `Все ${currentRootElement.name}`
      }}</span>
    </li>
    <li
      v-for="child of currentRootElement[childrenName]"
      :title="child.name"
      class="list__item"
      @click.stop="selectChild(child)"
    >
      <span class="list__item-text">{{ child.name }}</span>
      <img
        v-if="child[childrenName].length"
        src="@/assets/arrowRight.svg"
        class="list__item-arrow"
        alt="Дочерние группы"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "NestedList",
  props: {
    list: { type: Array, required: true },
    childrenName: { type: String, default: "children" },
  },
  data() {
    return {
      listCopy: null,
      currentRootElement: null,
    };
  },
  created() {
    this.listCopy = JSON.parse(JSON.stringify(this.list));
    this.currentRootElement = {
      id: null,
      name: "root",
      parentElement: null,
      [this.childrenName]: this.listCopy,
    };
    this.build(this.currentRootElement);
  },
  methods: {
    build(root) {
      root[this.childrenName].forEach((child) => {
        child.parentElement = root;
        if (child[this.childrenName].length) this.build(child);
      });
    },
    pathToRoot(child, path = []) {
      if (child.parentElement === null) return path;
      path.unshift({ name: child.name, id: child.id });
      return this.pathToRoot(child.parentElement, path);
    },
    selectChild(child) {
      if (child[this.childrenName].length === 0) {
        this.$emit("select", { [child.id]: this.pathToRoot(child) });
        return;
      }
      this.currentRootElement = child;
    },
    pathToAllChildren(parent, paths = {}) {
      parent[this.childrenName].forEach((child) => {
        if (child[this.childrenName].length)
          this.pathToAllChildren(child, paths);
        else {
          paths[child.id] = this.pathToRoot(child);
        }
      });
      return paths;
    },
    selectAllChildren() {
      this.$emit("select", this.pathToAllChildren(this.currentRootElement));
    },
    back() {
      if (!this.isMainRoot) {
        this.currentRootElement = this.currentRootElement.parentElement;
      }
    },
  },
  computed: {
    isMainRoot() {
      return this.currentRootElement.parentElement === null;
    },
  },
};
</script>

<style scoped>
.list {
  width: 280px;
  max-height: 300px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  overflow-y: scroll;
}
.list__item {
  cursor: pointer;
  height: 50px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
}
.list__item:hover {
  background-color: #f3f3f3;
}
.list__item-text {
  white-space: nowrap;
  font-family: "Futura";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
}
.list__item-arrow {
}

.list__item-arrow_reverse {
  transform: rotateY(180deg);
}

.list__item_back {
  justify-content: flex-start;
  color: #999999;
}
</style>
