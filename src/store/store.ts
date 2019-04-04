import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  user: {
    about: '',
    address: '',
    companyName: '',
    email: '',
    firstName: '',
    id: 0,
    isLegalEntity: true,
    lastName: '',
    role: '',
  },
  requests: {},
  responses: {},
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
