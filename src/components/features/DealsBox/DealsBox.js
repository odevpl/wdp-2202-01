import React from 'react';
import styles from './DealsBox.module.scss';

const DealsBox = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className={styles.bannerLarge}>
              <img
                alt='sofa'
                src={`${process.env.PUBLIC_URL}/images/banners/banner-large.jpg`}
              />
              <div className={styles.description}>
                <p>Guest room</p>
                <p>sofa</p>
                <p>-20%</p>
              </div>
            </div>
          </div>
          <div div className='col-6 d-flex flex-column justify-content-between'>
            <div className={styles.bannerSmallTop}>
              <img
                alt='office chairs'
                src={`${process.env.PUBLIC_URL}/images/banners/banner-small-1.jpg`}
              />
              <div className={styles.description}>
                <p>Office chair</p>
                <p>collection</p>
                <p>$200</p>
              </div>
            </div>
            <div className={styles.bannerSmallBottom}>
              <img
                alt='bed'
                src={`${process.env.PUBLIC_URL}/images/banners/banner-small-2.jpg`}
              />
              <div className={styles.description}>
                <p>Special collection</p>
                <p>Save up 5% of furniture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsBox;
