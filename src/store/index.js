import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contents: todos,
    users: users
  }
});
