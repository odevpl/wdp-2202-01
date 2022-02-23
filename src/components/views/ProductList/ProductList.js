import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => {
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
            <h3>ProductList</h3>
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
