const types = {
  ADD_TO_FAVORITE: 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE: 'REMOVE_FROM_FAVORITE',
};

let initialState = {
  favoriteList: [],
};

let movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITE:
      return [...state, action.item];
    default:
      return state;
  }
};

export default movieReducer;
