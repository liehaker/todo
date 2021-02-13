<template>
  <div id="app">
    <p class="ex1">Work's list</p>
    <Count />
    <Header @typing-todo="IputTyping" />
    <Preview
      style="margin-bottom: 10px"
      @pre-view="preView"
      :preText="preText"
    />
    <hr />
    <Todolist style="margin-bottom: 10px" />
    <hr />
    <UserList />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Todolist from "@/components/todolist";
import Preview from "@/components/preview";
import UserList from "@/components/UserList";
import Count from "@/components/Count";

export default {
  name: "App",
  components: {
    Count,
    Header,
    Preview,
    Todolist,
    UserList,
  },
  data() {
    return {
      preText: "",
    };
  },
  computed: {
    // contents() {
    //   return this.$Store.state.contents;
    // },
  },
  methods: {
    IputTyping(value) {
      this.preText = value;
    },
    preView(count) {
      console.log("app", count);
      this.preText = count;
    },
  },
};
</script>

<style scoped>
p.ex1 {
  text-align: center;
  text-shadow: 2px 2px 5px red;
  font-size: 20px;
}
</style>
