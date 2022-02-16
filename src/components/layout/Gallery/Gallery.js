import styles from './Gallery.module.scss';
import React from 'react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faEye,
  faHeart,
  faShoppingBasket,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Gallery = () => {
  return (
    <div className={styles.root}>
      <div className='container d-flex'>
        <div className='col-6 pl-0'>
          <div className={styles.firstPanel}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Furniture gallery</h3>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.galleryMenu}>
                <ul>
                  <li>
                    <a href='#'>Featured</a>
                  </li>
                  <li className={styles.active}>
                    <a href='#'>Top seller</a>
                  </li>
                  <li>
                    <a href='#'>Sale off</a>
                  </li>
                  <li>
                    <a href='#'>Top rated</a>
                  </li>
                </ul>
              </div>
              <div className={styles.imageContainer}>
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
                    <span>$130.00</span>
                    <span>$100.00</span>
                  </div>
                  <h3>Aenean Ru Bristique</h3>
                  <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <a key={i} href='#'>
                        {i <= 2 ? (
                          <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.carousel}>
                <div className={styles.button}>
                  <p> &#x2329; </p>
                </div>
                <div className={styles.thumbnails}>
                  <div className={styles.active}></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className={styles.button}>
                  <p> &#x232A; </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6 pr-0'>
          <div className={styles.secondPanel}>
            <div className={styles.content}>
              <h2>
                from <span>$55.80</span>
              </h2>
              <h3>Bedroom Bed</h3>
              <Button className={styles.button}>
                <a>Shop now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
