import axios from "axios";

export default {
    state: {
        //   DATA
        contents: [
            {
                id: 1,
                title: "할일",
                checked: true
            },
            {
                id: 2,
                title: "할일",
                checked: false
            }
        ]
    },
    mutations: {
        //   DATA Change
        ADD_TODO(state, value) {
            state.contents.push({
                id: Math.random(),
                title: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, { id, checked }) {
            const index = state.contents.findIndex(i => {
                return i.id === id;
            });
            if (index != -1) state.contents[index].checked = !checked;
        },
        DEL_TODO(state, id) {
            const index = state.contents.findIndex(content => {
                return content.id === id;
            });
            if (index != -1) {
                state.contents.splice(index, 1);
            }
        },
        CHECKED_TODO(state, { id, checked }) {
            const index = state.contents.findIndex(i => {
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
        A_DEL_TODO(context, id) {
            setTimeout(() => {
                context.commit("DEL_TODO", id);
            }, 2000);
        },
        A_RESET_TODO({ commit }) {
            axios({
                baseURL: "https://jsonplaceholder.typicode.com",
                url: "/users",
                method: "get",
                headers: {},
                params: {
                    username: "Antonette"
                }
            })
                .then(res => {
                    commit("RESET_TODO");
                    commit("SET_USERS", res.data)
                    console.log("A_RESET_TODO Antonette", res.data);
                })
                .catch(error => {
                    console.log("A_RESET_TODO Antonette", error);
                });
        },
        A_CHECKED_TODO({ commit }, payload) {
            commit("CHECKED_TODO", payload);
        }
    },
    getters: {
        completed_count: state => {
            const count = state.contents.filter(todo => {
                return todo.checked === true;
            }).length;

            return count;
        },
        total_count: state => {
            return state.contents.length;
        }
    }
}