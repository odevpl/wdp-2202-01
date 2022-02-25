import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  getAllComparedProducts,
  removeComparedProduct,
} from '../../../redux/comparedProductsRedux';
import { getAllFavorites } from '../../../redux/favoritesRedux';
import Button from '../../common/Button/Button';

import styles from './ComparisonBar.module.scss';

const ComparisonBar = () => {
  const comparedProducts = useSelector(getAllComparedProducts);
  const favoriteProducts = useSelector(getAllFavorites);
  const dispatch = useDispatch();

  const isFavorite = comparedProduct => {
    return favoriteProducts.find(
      favoriteProduct => favoriteProduct.name === comparedProduct
    );
  };

  const renderedProducts = comparedProducts.map(product => (
    <div key={product.id} className={styles.product}>
      <span
        className={styles.close}
        onClick={() => dispatch(removeComparedProduct(product.id))}
      >
        <FontAwesomeIcon icon={faWindowClose} />
      </span>
      <div className={styles.header}>
        <p>
          {product.name}&nbsp;&nbsp;
          <span>{isFavorite(product.name) && <FontAwesomeIcon icon={faHeart} />}</span>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={product.name}
          src={`${process.env.PUBLIC_URL}/images/products/${product.name}.jpg`}
        />
      </div>
      <div className={styles.price}>
        <p>
          {product.oldPrice && <span>${product.oldPrice}</span>}&nbsp;&nbsp;$
          {product.price}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      {comparedProducts.length > 0 && (
        <>
          {ReactDOM.createPortal(
            <div className={styles.root}>
              {renderedProducts}
              <Button className={styles.button} static variant='outline' actionbtn>
                Compare
              </Button>
            </div>,
            document.getElementById('comparison-bar-root')
          )}
        </>
      )}
    </>
  );
};

export default ComparisonBar;
