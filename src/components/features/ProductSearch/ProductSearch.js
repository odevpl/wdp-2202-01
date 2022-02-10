import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <ul>
        <li>
          <FontAwesomeIcon className={styles.icon} icon={faListUl} />
          <a href='/'>Select a Category</a>
          <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
          <ul>
            <li>
              <a href='/'>Category</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;

/*
<select name='' id=''>
  <option value=''>Select a category</option>
</select>
*/
