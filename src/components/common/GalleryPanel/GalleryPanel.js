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
import InfiniteCarousel from 'react-leaf-carousel';
import './GalleryPanel.css';

const GalleryPanel = data => {
  const [activeCarousel, setActiveCarousel] = useState(0);

  const handleThumbActive = index => {
    setActiveCarousel(index);
  };
  const handleGalleryChange = nextGallery => setActiveCarousel(nextGallery);

  return (
    <div className={styles.root}>
      <SwipeableViews
        enableMouseEvents
        disabled={true}
        index={activeCarousel}
        onChangeIndex={index => {
          handleGalleryChange(index);
        }}
        slideStyle={{ overflow: 'hidden' }}
      >
        {data.data.map(data => {
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
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
        ]}
        dots={false}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.5}
        slidesToScroll={6}
        slidesToShow={6}
        arrows={true}
        class
      >
        {data.data.map((data, index) => {
          return (
            <a key={data.id} className={index === activeCarousel ? 'active' : ''}>
              <img
                alt={`${data.name}`}
                src={`${process.env.PUBLIC_URL}/images/products/${data.name}.jpg`}
                style={{ width: '70px', height: '70px' }}
                onClick={() => handleThumbActive(index)}
              ></img>
            </a>
          );
        })}
      </InfiniteCarousel>
    </div>
  );
};

export default GalleryPanel;
