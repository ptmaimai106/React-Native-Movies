const types = {
  ADD_TO_FAVORITE: 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE: 'REMOVE_FROM_FAVORITE',
};

export const addToFavorite = item => {
  return {
    type: types.ADD_TO_FAVORITE,
    item,
  };
};
