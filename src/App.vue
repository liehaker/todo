<template>
  <div id="app">
    <p class="ex1">Work's list</p>
    <Header
      @typing-todo="IputTyping"
      @input-add="addTodo"
      @reset-todo="Reset"
    />
    <hr />
    <Preview :preText="preText" />
    <p></p>
    <Todolist
      :contents="contents"
      @todo-Del="todoDel"
      @todo-checked="todoChecked"
    />
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
      contents: [
        {
          id: 1,
          title: "할일",
          checked: false,
        },
      ],
      preText: "",
    };
  },
  methods: {
    IputTyping(v) {
      this.preText = v;
    },

    addTodo(v) {
      console.log("APP", v);

      this.contents.push({
        id: Math.random(),
        title: v,
        checked: false,
      });

      console.log("APP", v);
    },
    todoDel(id) {
      console.log("app", id);
      const index = this.contents.findIndex((content) => {
        return content.id === id;
      });
      if (index != -1) {
        this.contents.splice(index, 1);
      }
    },
    todoChecked({ id, checked }) {
      const index = this.contents.findIndex((i) => {
        return i.id === id;
      });
      if (index != -1) this.contents[index].checked = !checked;
    },
    Reset() {
      this.contents.splice(0);
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