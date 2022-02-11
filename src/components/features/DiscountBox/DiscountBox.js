import React from 'react';
import styles from './DiscountBox.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

const DiscountBox = () => {
  const products = useSelector(state => getAll(state));

  return (
    <div className={styles.root}>
      <div className='container'>
        <div>
          <img
            className={styles.image}
            alt={products[0].name}
            src={`${process.env.PUBLIC_URL}/images/products/${products[0].name}.jpg`}
          />
        </div>
        <div>
          <div>
            <img
              className={styles.image}
              alt={products[1].name}
              src={`${process.env.PUBLIC_URL}/images/products/${products[1].name}.jpg`}
            />
          </div>
          <div>
            <img
              className={styles.image}
              alt={products[2].name}
              src={`${process.env.PUBLIC_URL}/images/products/${products[2].name}.jpg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBox;
