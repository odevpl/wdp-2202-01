import React from 'react';
import styles from './Brands.module.scss';

const Brands = () => (
  <div className='container'>
    <div className={styles.root}>
      <div className='row justify-content-center'>
        <div className={styles.button}>
          <p> &#x2329; </p>
        </div>
        <div className={`row justify-content-around ${styles.brandsLogoBox}`}>
          <div className={`col-1 ${styles.logoBox}`}>
            <img src='/images/furniture-logo.jpg' alt='brand' />
          </div>
          <div className={`col-1 ${styles.logoBox}`}>
            <img src='/images/furniture-logo.jpg' alt='brand' />
          </div>
          <div className={`col-1 ${styles.logoBox}`}>
            <img src='/images/furniture-logo.jpg' alt='brand' />
          </div>
          <div className={`col-1 ${styles.logoBox}`}>
            <img src='/images/furniture-logo.jpg' alt='brand' />
          </div>
          <div className={`col-1 ${styles.logoBox}`}>
            <img src='/images/furniture-logo.jpg' alt='brand' />
          </div>
          <div className={`col-1 ${styles.logoBox}`}>
            <img src='/images/furniture-logo.jpg' alt='brand' />
          </div>
        </div>
        <div className={styles.button}>
          <p> &#x232A; </p>
        </div>
      </div>
    </div>
  </div>
);

export default Brands;
