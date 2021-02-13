export default {
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, payload) {
            console.log("setuers", payload);
            state.users = payload;
        }
    },
    actions: {
        A_SET_USERS(context) {
            context.commit("SET_USERS");
        }
    }
};
