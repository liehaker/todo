<template>
  <div style="display: flex; margin-bottom: 2px">
    <input type="checkbox" name="check" id="" v-model="content.checked" />
    <span
      class="ml-3"
      style="flex-grow: 1"
      :class="content.checked ? 'checked' : ''"
      :style="content.checked ? 'text-decoration: line-through; ' : ''"
      >{{ content.title }}
    </span>
    <button type="reset" v-on:click="todoDel">del</button>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      id: "",
      title: "",
      checked: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    todoDel() {
      this.$emit("del-button", this.content.id);
    },
    todoChecked() {
      this.$emit("todo-Checked", this.content.id, this.content.checked);
    },
  },
};
</script>
<style>
.normal {
  font-style: normal;
}
.checked {
  font-style: italic;
  color: gray;
}
</style>