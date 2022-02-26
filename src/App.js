import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import login from './components/views/LoginPage/Login';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import Cart from './components/layout/Cart/Cart';
import BlogPage from './components/views/BlogPage/BlogPage';
import Register from './components/views/Register/Register';
import Search from './components/views/Search/Search';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop/blog'} component={BlogPage} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route exact path={'/login'} component={login} />
          <Route exact path={'/product/:productId'} component={ProductPage} />
          <Route exact path={'/cart'} component={Cart} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/search'} component={Search} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
