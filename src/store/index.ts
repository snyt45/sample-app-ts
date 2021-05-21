import Vue from 'vue';
import Vuex from 'vuex';
import { config } from 'vuex-module-decorators';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

config.rawError = true;
