import Vue from 'vue';
import Vuex from 'vuex';
import {
  stat
} from 'fs';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    routeLink: []
  },
  getters: {
    getRoute(state) {
      return state.routeLink;
    }
  },
  mutations: {
    routeHistory(state, route) {
      state.routeLink.push(route);
    }
  }
})
