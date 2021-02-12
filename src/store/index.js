import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //   DATA
    contents: [
      {
        id: 1,
        title: "할일",
        checked: true,
      },
      {
        id: 2,
        title: "할일",
        checked: false,
      }
    ],
  },
  mutations: {
    //   DATA Change
    ADD_TODO(state, value) {
      state.contents.push({
        id: Math.random(),
        title: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, { id, checked }) {
      const index = state.contents.findIndex((i) => {
        return i.id === id;
      });
      if (index != -1) state.contents[index].checked = !checked;
    },
    DEL_TODO(state, id) {
      const index = state.contents.findIndex((content) => {
        return content.id === id;
      });
      if (index != -1) {
        state.contents.splice(index, 1);
      }
    },
    CHECKED_TODO(state, { id, checked }) {
      const index = state.contents.findIndex((i) => {
        return i.id === id;
      });
      if (index != -1) this.contents[index].checked = checked;
    },
    RESET_TODO(state) {
      state.contents.splice(0);
    }
  },
  actions: {
    //   Server 비동기
  },
  getters: {
    //   Computed
  },
});
