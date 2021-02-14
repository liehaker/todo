<template>
  <div
    id="app"
    class="border rounded m-1 p-2 mx-auto"
    style="background-color: gold; width: 90%"
  >
    <p class="ex1">work's liehacker</p>
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
  computed: {},
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
p {
  font-family: "Arial Black", sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
}
.ex1 {
  text-align: center;
  text-shadow: 6px 2px 2px gray;
  font-size: 1.5em;
}
</style>
