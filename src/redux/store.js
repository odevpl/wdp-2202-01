import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import viewportReducer from './viewportRedux';
import dealsReducer from './dealsRedux';
import favoritesReducer from './favoritesRedux';
import comparedProductsReducer from './comparedProductsRedux';
import starRatingReducer from './starRatingRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  viewport: viewportReducer,
  deals: dealsReducer,
  favorites: favoritesReducer,
  comparedProducts: comparedProductsReducer,
  productsRatedByUser: starRatingReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
