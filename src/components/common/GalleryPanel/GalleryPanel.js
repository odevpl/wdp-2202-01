import {
  faExchangeAlt,
  faEye,
  faHeart,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import StarRating from '../../features/StarRating/StarRating';
import Button from '../Button/Button';
import styles from './GalleryPanel.module.scss';
import './GalleryThumbs.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const GalleryPanel = data => {
  const [activeCarousel, setActiveCarousel] = useState(0);

  const handleThumbActive = index => {
    setActiveCarousel(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.root}>
      {data.data.map(data => {
        return activeCarousel === data.id - 1 ? (
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
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
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
        ) : (
          ''
        );
      })}
      <div className='gallerySlider'>
        <div className={styles.slider}>
          <Slider {...settings}>
            {data.data.map((data, index) => {
              return (
                <a key={data.id} className={index === activeCarousel ? 'active' : ''}>
                  <img
                    alt={`${data.name}`}
                    src={`${process.env.PUBLIC_URL}/images/products/${data.name}.jpg`}
                    onClick={() => handleThumbActive(index)}
                  ></img>
                </a>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default GalleryPanel;
