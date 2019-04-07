import axios from '@/config/axios';
import LoginService from '@/services/LoginService';
import RequestsService from '@/services/RequestsService';

const LoginApi = new LoginService();
const RequestsApi = new RequestsService();

export default {
  async signIn({ commit }, { email, password }) {
    const response = await LoginApi.signIn(email, password);
    commit('updateUser', response);
  },
  async signUp({ commit }, data) {
    const response = await LoginApi.signUp(data);
    commit('updateUser', response);
  },
  async getUser({ commit }) {
    const response = await axios.get('/auth/clients/current').then(({ data }) => data);
    commit('updateUser', response);
  },
  async getRequests({ commit }) {
    const response = await RequestsApi.getRequests();
    commit('addRequests', response);
  },
  async finishRequest({ commit }, id) {
    await axios.post(`/auth/requests/${id}/finish/`).then(({ data }) => data);
  },
  async getMessages({ commit }, requestId) {
    const response = await axios.get(`/auth/requests/${requestId}/messages/`).then(({ data }) => data);
    return response;
  },
  async getDialogMessages({ commit }, responseId) {
    const response = await axios.get(`/auth/responses/${responseId}/messages/`).then(({ data }) => data);
    return response;
  },
  async getResponses({ commit }) {
    const response = await axios.get('/auth/responses').then(({ data }) => data);
    commit('addResponses', response);
  },
  async getRequest({ commit }, id) {
    const response = await RequestsApi.getRequest(id);
    commit('addRequests', [response]);
  },
  async createRequest({ commit }, data) {
    const response = await RequestsApi.createRequest(data);
    commit('addRequests', [response]);
  },
  async update({ dispatch }, requestId) {
    dispatch('getRequests');
    dispatch('getUser');
    dispatch('getResponses');
    if (requestId) {
      dispatch('getMessages', requestId);
    }
  },
};
