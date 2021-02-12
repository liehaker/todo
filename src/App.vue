<template>
  <div id="app">
    <p class="ex1">Work's list</p>
    <Header @typing-todo="IputTyping" />
    <hr />
    <Preview />
    <Todolist />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Todolist from "@/components/todolist";
import Preview from "@/components/preview";

export default {
  name: "App",
  components: {
    Header,
    Preview,
    Todolist,
  },
  data() {
    return {
      preText: "",
    };
  },
  computed: {
    contents() {
      return this.$Store.state.contents;
    },
  },
  methods: {
    IputTyping(v) {
      this.preText = v;
    },
  },
};
</script>

<style>
p.ex1 {
  text-align: center;
  text-shadow: 2px 2px 5px red;
  font-size: 20px;
}
</style>