/* selectors */
export const getAllProductsRatedByUser = ({ productsRatedByUser }) =>
  productsRatedByUser;

/* action name creator */
const reducerName = 'starRatingReducer';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_STAR_RATING = createActionName('ADD_STAR_RATING');
const EDIT_STAR_RATING = createActionName('EDIT_STAR_RATING');

/* action creators */
export const addStarRating = payload => ({ payload, type: ADD_STAR_RATING });
export const editStarRating = payload => ({ payload, type: EDIT_STAR_RATING });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_STAR_RATING: {
      if (
        !statePart.find(
          productRatedByUser => productRatedByUser.id === action.payload.id
        )
      ) {
        return [...statePart, action.payload];
      }
      return statePart;
    }
    case EDIT_STAR_RATING:
      return statePart.map(productRatedByUser =>
        productRatedByUser.id === action.payload.id
          ? action.payload
          : productRatedByUser
      );

    default:
      return statePart;
  }
}
