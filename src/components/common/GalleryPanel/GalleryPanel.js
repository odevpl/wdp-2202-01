import {
  faExchangeAlt,
  faEye,
  faHeart,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views/lib/SwipeableViews';
import StarRating from '../../features/StarRating/StarRating';
import Button from '../Button/Button';
import styles from './GalleryPanel.module.scss';

const GalleryPanel = data => {
  const [activePromo, setActivePromo] = useState(0);

  const previousGallery = () => {
    let promo = activePromo - 1 < 0 ? 0 : activePromo - 1;
    setActivePromo(promo);
  };
  const nextGallery = () => {
    let promo =
      activePromo + 1 > data.data.length - 1 ? data.data.length - 1 : activePromo + 1;
    setActivePromo(promo);
  };

  const handleGalleryChange = nextPromo => setActivePromo(nextPromo);
  return (
    <div>
      <SwipeableViews
        enableMouseEvents
        index={activePromo}
        onChangeIndex={index => {
          handleGalleryChange(index);
        }}
        slideStyle={{ overflow: 'hidden' }}
      >
        {data.data.map((data, index) => {
          return (
            <div className={styles.content} key={data.id}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src={`${process.env.PUBLIC_URL}/images/products/${data.name}.jpg`}
                  alt='hot-deal'
                />
                <div className={styles.outlines}>
                  <Button className={styles.icon} variant='outline'>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                    <div className={styles.toolTip}>Add to favorite</div>
                  </Button>
                  <Button className={styles.icon} variant='outline'>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                    <div className={styles.toolTip}>Compare</div>
                  </Button>
                  <Button className={styles.icon} variant='outline'>
                    <FontAwesomeIcon icon={faEye}>Add to compare</FontAwesomeIcon>
                    <div className={styles.toolTip}>Quick view</div>
                  </Button>
                  <Button className={styles.icon} variant='outline'>
                    <FontAwesomeIcon icon={faShoppingBasket}>
                      Add to compare
                    </FontAwesomeIcon>
                    <div className={styles.toolTip}>Add to cart</div>
                  </Button>
                </div>

                <div className={styles.sale}>
                  <div className={styles.circle}>
                    <span>${data.previousPrice}</span>
                    <span>${data.newPrice}</span>
                  </div>
                  <h3>{data.name}</h3>
                  <StarRating product={data}></StarRating>
                </div>
              </div>
            </div>
          );
        })}
      </SwipeableViews>
      <div className={styles.carousel}>
        <div className={styles.button} onClick={previousGallery}>
          <p> &#x2329; </p>
        </div>
        <div className={styles.thumbnails}>
          {data.data.map((data, index) => {
            return (
              <a className={index === activePromo ? styles.active : ''} key={data.id}>
                <img
                  alt={`${data.name}`}
                  src={`${process.env.PUBLIC_URL}/images/products/${data.name}.jpg`}
                ></img>
              </a>
            );
          })}
        </div>
        <div className={styles.button} onClick={nextGallery}>
          <p> &#x232A; </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPanel;
