import React from 'react';
import styles from './DealsBox.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/dealsRedux';

const DealsBox = () => {
  const deals = useSelector(state => getAll(state));

  const bannerLarge = deals.find(deal => deal.id === 'banner-large');
  const bannerSmallTop = deals.find(deal => deal.id === 'banner-small-top');
  const bannerSmallBottom = deals.find(deal => deal.id === 'banner-small-bottom');

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <div className={styles.bannerLarge}>
              <img
                alt='sofa'
                src={`${process.env.PUBLIC_URL}/images/banners/${bannerLarge.id}.jpg`}
              />
              <div className={styles.description}>
                <p>{bannerLarge.content[0]}</p>
                <p>{bannerLarge.content[1]}</p>
                <p>{bannerLarge.content[2]}</p>
              </div>
            </div>
          </div>
          <div
            div
            className='col-xs-12 col-sm-6 d-flex flex-column justify-content-between'
          >
            <div className={styles.bannerSmallTop}>
              <img
                alt='sofa'
                src={`${process.env.PUBLIC_URL}/images/banners/${bannerSmallTop.id}.jpg`}
              />
              <div className={styles.description}>
                <p>
                  <span>{bannerSmallTop.content[0]} </span>
                  {bannerSmallTop.content[1]}
                </p>
                <p>{bannerSmallTop.content[2]}</p>
                <p>{bannerSmallTop.content[3]}</p>
              </div>
            </div>
            <div className={styles.bannerSmallBottom}>
              <img
                alt='sofa'
                src={`${process.env.PUBLIC_URL}/images/banners/${bannerSmallBottom.id}.jpg`}
              />
              <div className={styles.description}>
                <p>
                  <span>{bannerSmallBottom.content[0]}</span>{' '}
                  {bannerSmallBottom.content[1]}
                </p>
                <p>{bannerSmallBottom.content[2]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsBox;
