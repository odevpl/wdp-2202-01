import styles from './Gallery.module.scss';
import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/galleryRedux';
import TopSeller from '../TopSellers/TopSellers';
import Featured from '../Featured/Featured';
import TopRated from '../TopRated/TopRated';
import SaleOff from '../SaleOff/SaleOff';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('topSeller');
  const [featuredActive, setfeaturedActive] = useState(false);
  const [topSellerActive, setTopSellerActive] = useState(true);
  const [saleOffActive, setSaleOffActive] = useState(false);
  const [topRatedActive, setTopRatedActive] = useState(false);

  const galleryCategories = useSelector(state => getAll(state)).galleryCategories;

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
        <div className='col-12 col-md-6 pl-0'>
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
            {topSellerActive ? <TopSeller /> : ''}
            {featuredActive ? <Featured /> : ''}
            {saleOffActive ? <SaleOff /> : ''}
            {topRatedActive ? <TopRated /> : ''}
          </div>
        </div>
        <div className='col-6 pr-0 d-none d-md-block'>
          <div className={styles.secondPanel}>
            <div className={styles.content}>
              <h2>
                from <span>$55.80</span>
              </h2>
              <h3>Bedroom Bed</h3>
              <Button className={styles.button}>Shop now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
