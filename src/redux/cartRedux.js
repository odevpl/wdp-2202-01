/* selectors */
export const getAllProductsInCart = ({ cart }) => cart.products;
export const getSubtotal = ({ cart }) => cart.subtotal;
export const getCount = ({ cart }) => cart.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CLEAR_CART = createActionName('CLEAR_CART');
const INCREMENT_QUANTITY = createActionName('INCREMENT_QUANTITY');
const DECREMENT_QUANTITY = createActionName('DECREMENT_QUANTITY');
const SUBTOTAL_CHANGE = createActionName('SUBTOTAL_CHANGE');
const TOTAL_PRICE = createActionName('TOTAL_PRICE');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const clearCart = payload => ({ payload, type: CLEAR_CART });
export const increment = payload => ({ payload, type: INCREMENT_QUANTITY });
export const decrement = payload => ({ payload, type: DECREMENT_QUANTITY });
export const subtotalChange = payload => ({ payload, type: SUBTOTAL_CHANGE });
export const totalPrice = payload => ({ payload, type: TOTAL_PRICE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return { products: [...statePart.products, action.payload] };
    }
    case REMOVE_PRODUCT: {
      return {
        products: [
          ...statePart.products.filter(product => product.id !== action.payload),
        ],
      };
    }
    case CLEAR_CART: {
      return { products: [] };
    }
    case INCREMENT_QUANTITY: {
      return {
        ...statePart,
        products: [
          ...statePart.products.filter(product =>
            product.id === action.payload ? product.quantity++ : product.quantity
          ),
        ],
      };
    }
    case DECREMENT_QUANTITY: {
      return {
        products: [
          ...statePart.products.filter(product =>
            product.id === action.payload ? product.quantity-- : product.quantity
          ),
        ],
      };
    }
    case TOTAL_PRICE: {
      return {
        products: [
          ...statePart.products.filter(product =>
            product.id === action.payload
              ? (product.total = product.price * product.quantity)
              : product.price
          ),
        ],
      };
    }
    case SUBTOTAL_CHANGE: {
      return { ...statePart, subtotal: action.payload };
    }
    default:
      return statePart;
  }
}
