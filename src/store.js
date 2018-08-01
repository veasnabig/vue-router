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
      const existRoute  = state.routeLink.filter(o => o.name === route.name)
      if(existRoute.length === 0){
        state.routeLink.push(route);
      }
    }
  }
})
