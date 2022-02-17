import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col'>
            <ProductSearch />
          </div>
          <div className={'col-auto ' + styles.menu}>
            <button className={styles.hamburger}>
              <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </button>
            <ul>
              <li>
                <NavLink exact activeClassName={styles.active} to={'/'}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to={'/shop/furniture'}>
                  Furniture
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to={'/shop/chair'}>
                  Chair
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to={'/shop/table'}>
                  Table
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to={'/shop/sofa'}>
                  Sofa
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to={'/shop/bedroom'}>
                  Bedroom
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to={'/shop/blog'}>
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
