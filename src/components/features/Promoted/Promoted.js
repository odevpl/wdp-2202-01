import React from 'react';

import ProductSlider from '../ProductSlider/ProductSlider';
import PromoSlider from '../PromoSlider/PromoSlider';
import styles from './Promoted.module.scss';

const Promoted = () => {
  return (
    <div className={styles.root + ' d-flex flex-row'}>
      <div className='container d-flex flex-row'>
        <div className={styles.productSlider + ' col-sm-6 col-md-5 col-lg-4 pl-0'}>
          <ProductSlider />
        </div>
        <div className={styles.promoSlider + 'col-sm-12 col-md-7 col-lg-8 pr-0 pl-0'}>
          <PromoSlider />
        </div>
      </div>
    </div>
  );
};

export default Promoted;
