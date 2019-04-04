export default {
  updateUser(state, data) {
    state.user = { ...state.user, ...data };
  },
  addRequests(state, data) {
    data.forEach((item) => {
      state.requests = {
        ...state.requests,
        [item.id]: item,
      };
    });
  },
  addResponses(state, data) {
    data.forEach((item) => {
      state.responses = {
        ...state.responses,
        [item.id]: item,
      };
    });
  },
};
