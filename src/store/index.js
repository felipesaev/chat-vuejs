import Vue from 'vue';
import Vuex from 'vuex';
import VuexPesistence from 'vuex-persist';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);


const debug  = process.env.NODE_ENV != 'production';

const VuexLocal = new VuexPesistence({  
  storage: window.localStorage,
  
});
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
