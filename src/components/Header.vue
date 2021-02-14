<template>
  <div class="input-group input-group-sm mb-3">
    <span class="input-group-text" id="inputGroup-sizing-sm">todo</span>
    <input
      type="text"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-sm"
      v-model="content"
      placeholder="입력하세요"
      @keyup="typeTodo"
      @keyup.enter="addTodo"
    />
    <button class="btn btn-danger mr-1" @click="Reset">reset</button>
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
        // this.$emit("input-add", e.target.value);
        // this.content = "";
        this.$store.commit("ADD_TODO", e.target.value);
        this.content = "";
      }
    },
    typeTodo(e) {
      this.$emit("typing-todo", e.target.value);
    },
    Reset() {
      // this.$emit("reset-todo",'');
      // this.$store.commit("RESET_TODO");
      this.$store.dispatch("A_RESET_TODO");
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
