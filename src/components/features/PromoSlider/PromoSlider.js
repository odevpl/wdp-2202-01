import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SwipeableViews from 'react-swipeable-views';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';

import styles from './PromoSlider.module.scss';

const PromoSlider = () => {
  const slideData = [
    {
      domain: 'outdoor',
      category: 'furniture',
      message: 'Save up to 50% off all furniture',
      imageSrc: `${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 6.jpg`,
    },
    {
      domain: '',
      category: 'Sofas',
      message: 'Save up to 50% off all sofas',
      imageSrc: `${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 8.jpg`,
    },
    {
      domain: 'Indoor',
      category: 'chairs',
      message: 'Buy fast! Buy now! Just buy!',
      imageSrc: `${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 10.jpg`,
    },
  ];
  const [activePromo, setActivePromo] = useState(0);

  const previousPromo = () => {
    let promo = activePromo - 1 < 0 ? 0 : activePromo - 1;
    setActivePromo(promo);
  };
  const nextPromo = () => {
    let promo =
      activePromo + 1 > slideData.length - 1 ? slideData.length - 1 : activePromo + 1;
    setActivePromo(promo);
  };

  const handlePromoChange = nextPromo => setActivePromo(nextPromo);

  return (
    <div className={styles.promoContainer}>
      <SwipeableViews
        enableMouseEvents
        index={activePromo}
        onChangeIndex={index => {
          handlePromoChange(index);
        }}
        slideStyle={{ overflow: 'hidden' }}
      >
        {slideData.map((promo, index) => {
          return (
            <div key={promo.index} className={styles.promoContainer}>
              <div className={styles.imageContainer}>
                <img className={styles.image} src={promo.imageSrc} alt='hot-deal' />
              </div>
              <div className={styles.promoContent}>
                <h1>
                  {promo.domain} <span>{promo.category}</span>
                </h1>
                <h2>{promo.message}</h2>
                <Button className={styles.button}>Shop now</Button>
              </div>
            </div>
          );
        })}
      </SwipeableViews>
      <div className={styles.sliderButtons}>
        <div className={styles.arrowLeft} onClick={previousPromo}>
          <a>
            <FontAwesomeIcon icon={faArrowLeft}>Add to compare</FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.arrowRight} onClick={nextPromo}>
          <a>
            <FontAwesomeIcon icon={faArrowRight}>Add to compare</FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoSlider;
