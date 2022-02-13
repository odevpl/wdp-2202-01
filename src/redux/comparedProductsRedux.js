/* selectors */
export const getAllComparedProducts = ({ comparedProducts }) => comparedProducts;

/* action name creator */
const reducerName = 'comparedProducts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_COMPARED_PRODUCT = createActionName('ADD_COMPARED_PRODUCT');
const REMOVE_COMPARED_PRODUCT = createActionName('REMOVE_COMPARED_PRODUCT');

/* action creators */
export const addComparedProduct = payload => ({ payload, type: ADD_COMPARED_PRODUCT });
export const removeComparedProduct = payload => ({
  payload,
  type: REMOVE_COMPARED_PRODUCT,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COMPARED_PRODUCT: {
      if (
        !statePart.find(comparedProduct => comparedProduct.id === action.payload.id) &&
        statePart.length < 4
      ) {
        return [...statePart, action.payload];
      }
      return statePart;
    }
    case REMOVE_COMPARED_PRODUCT:
      return statePart.filter(comparedProduct => comparedProduct.id !== action.payload);
    default:
      return statePart;
  }
}
