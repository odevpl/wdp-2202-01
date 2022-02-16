import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SwipeableViews from 'react-swipeable-views';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getAll } from '../../../redux/dealsRedux';

import Button from '../../common/Button/Button';

import styles from './PromoSlider.module.scss';

const PromoSlider = () => {
  const slideData = useSelector(state => getAll(state)).promoSlider;
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
            <div
              key={promo.index}
              className={index === activePromo ? styles.fadeInContainer : ''}
            >
              <div className={styles.promoContainer}>
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
