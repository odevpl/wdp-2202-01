/* selectors */
export const getAllFavorites = ({ favorites }) => favorites;

/* action name creator */
const reducerName = 'favorites';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_FAVORITE = createActionName('ADD_FAVORITE');

/* action creators */
export const addFavorite = payload => ({ payload, type: ADD_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FAVORITE: {
      return [...statePart, action.payload];
    }
    default:
      return statePart;
  }
}
