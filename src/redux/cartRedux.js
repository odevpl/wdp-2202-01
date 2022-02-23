/* selectors */
export const getAllProductsInCart = ({ cart }) => cart;
export const getCount = ({ cart }) => cart.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CLEAR_CARD = createActionName('CLEAR_CARD');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const clearCart = payload => ({ payload, type: CLEAR_CARD });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return [...statePart, { ...action.payload }];
    }
    case REMOVE_PRODUCT: {
      return statePart.filter(product => product.id !== action.payload);
    }
    case CLEAR_CARD: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
