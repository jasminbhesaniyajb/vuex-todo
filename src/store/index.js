import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allList: [
      {
        title: "Going  to School.",
      },
      {
        title: "Going  to Market.",
      },
      {
        title: "Going  to Play.",
      },
    ],
  },
  getters: {
    allList: (state) => state.allList,
  },
  actions: {
    addList({ commit }, add) {
      commit("getAddList", add);
    },
    delete({ commit }, id) {
      commit("getDelete", id);
    },
  },
  mutations: {
    getAddList(state, add) {
      state.allList.push(add);
    },
    getDelete(state, id) {
      state.allList.splice(id, 1);
    },
  },
});
