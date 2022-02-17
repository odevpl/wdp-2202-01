import styles from './Gallery.module.scss';
import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faEye,
  faHeart,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/galleryRedux';
import StarRating from '../../features/StarRating/StarRating';
import SwipeableViews from 'react-swipeable-views/lib/SwipeableViews';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('topSeller');
  const [featuredActive, setfeaturedActive] = useState(true);
  const [topSellerActive, setTopSellerActive] = useState(false);
  const [saleOffActive, setSaleOffActive] = useState(false);
  const [topRatedActive, setTopRatedActive] = useState(false);
  const [activePromo, setActivePromo] = useState(0);

  const previousGallery = () => {
    let promo = activePromo - 1 < 0 ? 0 : activePromo - 1;
    setActivePromo(promo);
  };
  const nextGallery = () => {
    let promo =
      activePromo + 1 > topSellerData.length - 1
        ? topSellerData.length - 1
        : activePromo + 1;
    setActivePromo(promo);
  };

  const handleGalleryChange = nextPromo => setActivePromo(nextPromo);

  const galleryCategories = useSelector(state => getAll(state)).galleryCategories;
  const featuredData = useSelector(state => getAll(state)).featured;
  const topSellerData = useSelector(state => getAll(state)).topSeller;
  const saleOffData = useSelector(state => getAll(state)).saleOff;
  const topRatedData = useSelector(state => getAll(state)).topRated;

  const handleCategoryChange = newCategory => {
    if (newCategory === 'featured') {
      setActiveCategory(newCategory);
      setfeaturedActive(true);
    } else {
      setfeaturedActive(false);
    }
    if (newCategory === 'topSeller') {
      setActiveCategory(newCategory);
      setTopSellerActive(true);
    } else {
      setTopSellerActive(false);
    }
    if (newCategory === 'saleOff') {
      setActiveCategory(newCategory);
      setSaleOffActive(true);
    } else {
      setSaleOffActive(false);
    }
    if (newCategory === 'topRated') {
      setActiveCategory(newCategory);
      setTopRatedActive(true);
    } else {
      setTopRatedActive(false);
    }
  };

  return (
    <div className={styles.root}>
      <div className='container d-flex'>
        <div className='col-12 col-sm-6 pl-0'>
          <div className={styles.firstPanel}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Furniture gallery</h3>
              </div>
            </div>
            <div className={styles.galleryMenu}>
              <ul>
                {galleryCategories.map(category => (
                  <li key={category.id}>
                    <a
                      className={category.id === activeCategory && styles.active}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {topSellerActive === true ? (
              <>
                <SwipeableViews
                  enableMouseEvents
                  index={activePromo}
                  onChangeIndex={index => {
                    handleGalleryChange(index);
                  }}
                  slideStyle={{ overflow: 'hidden' }}
                >
                  {topSellerData.map((topSellerData, index) => {
                    return (
                      <div className={styles.content} key={topSellerData.id}>
                        <div className={styles.imageContainer}>
                          <img
                            className={styles.image}
                            src={`${process.env.PUBLIC_URL}/images/products/${topSellerData.name}.jpg`}
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
                              <FontAwesomeIcon icon={faEye}>
                                Add to compare
                              </FontAwesomeIcon>
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
                              <span>${topSellerData.previousPrice}</span>
                              <span>${topSellerData.newPrice}</span>
                            </div>
                            <h3>{topSellerData.name}</h3>
                            <StarRating product={topSellerData}></StarRating>
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
                    {topSellerData.map((topSellerData, index) => {
                      return (
                        <div
                          className={index === activePromo ? styles.active : ''}
                          key={topSellerData.id}
                        >
                          <img
                            alt={`${topSellerData.name}`}
                            src={`${process.env.PUBLIC_URL}/images/products/${topSellerData.name}.jpg`}
                          ></img>
                        </div>
                      );
                    })}
                  </div>
                  <div className={styles.button} onClick={nextGallery}>
                    <p> &#x232A; </p>
                  </div>
                </div>
              </>
            ) : (
              ''
            )}

            {featuredActive === true ? (
              <SwipeableViews
                enableMouseEvents
                // index={activeProduct}
                // onChangeIndex={index => {
                //   handleProductChange(index);
                // }}
                slideStyle={{ overflow: 'hidden' }}
              >
                {featuredData.map((featuredData, index) => {
                  return (
                    <div className={styles.content} key={featuredData.id}>
                      <div className={styles.imageContainer}>
                        <img
                          className={styles.image}
                          src={`${process.env.PUBLIC_URL}/images/products/${featuredData.name}.jpg`}
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
                            <FontAwesomeIcon icon={faEye}>
                              Add to compare
                            </FontAwesomeIcon>
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
                            <span>${featuredData.previousPrice}</span>
                            <span>${featuredData.newPrice}</span>
                          </div>
                          <h3>{featuredData.name}</h3>
                          <StarRating product={featuredData}></StarRating>
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
                  );
                })}
              </SwipeableViews>
            ) : (
              ''
            )}

            {saleOffActive === true ? (
              <SwipeableViews
                enableMouseEvents
                // index={activeProduct}
                // onChangeIndex={index => {
                //   handleProductChange(index);
                // }}
                slideStyle={{ overflow: 'hidden' }}
              >
                {saleOffData.map((saleOffData, index) => {
                  return (
                    <div className={styles.content} key={saleOffData.id}>
                      <div className={styles.imageContainer}>
                        <img
                          className={styles.image}
                          src={`${process.env.PUBLIC_URL}/images/products/${saleOffData.name}.jpg`}
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
                            <FontAwesomeIcon icon={faEye}>
                              Add to compare
                            </FontAwesomeIcon>
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
                            <span>${saleOffData.previousPrice}</span>
                            <span>${saleOffData.newPrice}</span>
                          </div>
                          <h3>{saleOffData.name}</h3>
                          <StarRating product={saleOffData}></StarRating>
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
                  );
                })}
              </SwipeableViews>
            ) : (
              ''
            )}

            {topRatedActive === true ? (
              <SwipeableViews
                enableMouseEvents
                // index={activeProduct}
                // onChangeIndex={index => {
                //   handleProductChange(index);
                // }}
                slideStyle={{ overflow: 'hidden' }}
              >
                {topRatedData.map((topRatedData, index) => {
                  return (
                    <div className={styles.content} key={topRatedData.id}>
                      <div className={styles.imageContainer}>
                        <img
                          className={styles.image}
                          src={`${process.env.PUBLIC_URL}/images/products/${topRatedData.name}.jpg`}
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
                            <FontAwesomeIcon icon={faEye}>
                              Add to compare
                            </FontAwesomeIcon>
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
                            <span>${topRatedData.previousPrice}</span>
                            <span>${topRatedData.newPrice}</span>
                          </div>
                          <h3>{topRatedData.name}</h3>
                          <StarRating product={topRatedData}></StarRating>
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
                  );
                })}
              </SwipeableViews>
            ) : (
              ''
            )}

            {/* <div className={styles.content}>
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
                  <StarRating product={topSellerData}></StarRating>
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
            </div> */}
          </div>
        </div>
        <div className='col-6 pr-0 d-none d-sm-block'>
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
