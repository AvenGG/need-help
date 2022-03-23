<template>
  <ul class="paths">
    <li v-for="(path, id) of paths" :key="id" class="path">
      <div v-for="p of path" :key="p.id" class="path__item">
        <span class="path__item-name">{{ p.name }}</span>
        <img
          v-if="p.id != id"
          src="@/assets/arrowLong.svg"
          alt="Стрелка"
          class="path__arrow"
        />
        <button v-else class="remove-button" @click="$emit('remove', id)">
          <img
            src="@/assets/remove.svg"
            alt="Удалить"
            class="remove-button__image"
          />
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Paths",
  props: {
    paths: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.path {
  background-color: #fafafa;
  height: 40px;
  border-radius: 20px;
  padding: 5px 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: fit-content;
}
.path__item {
  display: flex;
  align-items: center;
}
.path__item-name {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #302f2d;
  margin: 0 10px;
}
.path__arrow {
  width: 10px;
  height: 10px;
  margin: 10px;
}
.remove-button {
  cursor: pointer;
  border: none;
  background-color: #fff;
  width: 20px;
  height: 20px;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.remove-button__image {
  width: 8px;
  height: 8px;
}
</style>
