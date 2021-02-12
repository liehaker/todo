<template>
  <div>
    <Todo
      v-for="content in contents"
      :key="content.id"
      :content="content"
      @del-button="todoDel"
      @todo-Checke="todoChecked"
    />
  </div>
</template>

<script>
import Todo from "@/components/todo";

export default {
  props: {
    contents: {
      type: Array,
      required: true
    },
  },
  data() {
    return {};
  },
  components: {
    Todo,
  },
  methods: {
    todoDel(id) {
      this.$emit("todo-Del", id);
    },
    todoChecked({ id, checked }) {
      this.$emit("todo-checked", id, checked);
    },
  },
};
</script>