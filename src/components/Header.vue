<template>
  <div style="display: flex">
    <input
      id="inputbox"
      style="flex-grow: 1"
      type="text"
      v-model="content"
      placeholder="입력하세요"
      @keyup="typeTodo"
      @keyup.enter="addTodo"
    />
    <button id="button" @click="Reset">reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    addTodo(e) {
      if (e.target.value != "") {
        this.$emit("input-add", e.target.value);
        this.content = "";
      }
    },
    typeTodo(e) {
      this.$emit("typing-todo", e.target.value);
    },
    Reset() {
      this.$emit("reset-todo",'');
    },
  },
};
</script>

<style scoped>
#inputbox {
  border: 2px solid blueviolet;
  outline-color: grey;
  width: 80%;
}
#button {
  color: black;
  text-align: center;
  margin-left: 5px;
}
</style>