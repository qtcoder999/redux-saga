const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
};

export function repoReducer(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    default:
      return state;
  }
}
