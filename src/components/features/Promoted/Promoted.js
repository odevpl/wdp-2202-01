import React from 'react';

import ProductSlider from '../ProductSlider/ProductSlider';
import PromoSlider from '../PromoSlider/PromoSlider';
import styles from './Promoted.module.scss';

const Promoted = () => {
  return (
    <div className={styles.root}>
      <div className='container d-flex'>
        <div className='col-4 pl-0'>
          <ProductSlider />
        </div>
        <div className='col-8 pr-0'>
          <PromoSlider />
        </div>
      </div>
    </div>
  );
};

export default Promoted;
