const types = {
  ADD_TO_FAVORITE: 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE: 'REMOVE_FROM_FAVORITE',
};

let movieReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITE:
      if (state.length === 0 || state.indexOf(action.item) === -1) {
        return [...state, action.item];
      } else return [...state];
    default:
      return state;
  }
};

export default movieReducer;
