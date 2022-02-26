import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTable } from '@fortawesome/free-solid-svg-icons';

// import PropTypes from 'prop-types';

import ProductsSelectedByCategory from '../../features/ProductsSelectedByCategory/ProductSelectedByCategory';
import styles from './ProductList.module.scss';

const ProductList = () => {
  const [layout, setLayout] = useState('grid');
  const { categoryId } = useParams();
  if (!categoryId) {
    return <div>Category not found</div>;
  }
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.banner}>
          <p>
            Bedroom <span>furniture</span>
          </p>
          <p>
            Always <span>25%</span> off or more
          </p>
        </div>
        <div className={styles.navBar}>
          <a href='/'>Home</a>
          <p>
            &gt;<span>Furniture</span>
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='row d-flex flex-row justify-content-between align-items-center py-3'>
              <div className='col-4'>
                <h3 className='m-0'>{categoryId.toUpperCase()}</h3>
              </div>
              <div className={styles.switch}>
                <button
                  onClick={() => {
                    if (layout !== 'grid') {
                      setLayout('grid');
                    }
                  }}
                  className={`${styles.switchButton} ${
                    layout === 'grid' ? styles.active : ''
                  }`}
                >
                  <FontAwesomeIcon icon={faTable}>Grid</FontAwesomeIcon>
                </button>

                <button
                  onClick={() => {
                    if (layout !== 'list') setLayout('list');
                  }}
                  className={`${styles.switchButton} ${
                    layout === 'list' ? styles.active : ''
                  }`}
                >
                  <FontAwesomeIcon icon={faList}>List</FontAwesomeIcon>
                </button>
              </div>
            </div>
            <div className={styles.productsContainer}>
              <ProductsSelectedByCategory category={categoryId} layout={layout} />
            </div>
          </div>
          <div className='col-lg-3'>
            <h3>Filters</h3>
          </div>
        </div>
      </div>
      <div className='container'>
        <h1>Brands</h1>
      </div>
    </div>
  );
};
// ProductList.propTypes = {};

export default ProductList;
