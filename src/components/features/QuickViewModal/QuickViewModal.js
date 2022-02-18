import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faWindowClose,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../../common/Button/Button';
import styles from './QuickViewModal.module.scss';
import StarRating from '../StarRating/StarRating';

const QuickViewModal = ({ product, show, handleClose }) => {
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={handleClose}>
      <div
        className={'d-none d-md-block ' + styles.modalContainer}
        onClick={e => e.stopPropagation()}
      >
        <Button className={styles.closeButton} onClick={() => handleClose()}>
          <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
        </Button>
        <div className={'row ' + styles.content}>
          <div className={'col-5 ' + styles.imageContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/images/products/${product.name}.jpg`}
              alt={product.name}
            />
          </div>

          <div className={'col-7 ' + styles.productData}>
            <h4>{product.name}</h4>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <p className='p-2'>
                  <strong>Price: </strong>
                  <span> $ </span>
                  {product.price}
                </p>
              </div>
              <div className='col-0 col-md-6 d-none d-md-block'>
                <Button className='p-2' static noHover>
                  {product.promo ? 'Promo price!!!' : ''}
                </Button>
              </div>
            </div>

            <p className={'p-2 d-none d-md-block ' + styles.productText}>
              {product.newFurniture
                ? 'This product is a part of New Furniture collection'
                : ''}
            </p>
            <div className='row d-flex flex-column flex-sm-row align-items-center justify-contents-center'>
              <Button variant='small' className={'ml-2 w-40 ' + styles.button}>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>

              <Button
                variant='small'
                className={'ml-2 w-40 d-none d-sm-block ' + styles.button}
              >
                <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon> COMPARE
              </Button>
            </div>
            <div className='row pl-4 pt-4 d-none d-sm-block'>
              <strong className={styles.productText + 'p-2'}>Rate the product:</strong>
              <StarRating product={product} className='d-block d-md-inline' />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('quick-view-popup-root')
  );
};

QuickViewModal.propTypes = {
  product: PropTypes.object.isRequired,
};
export default QuickViewModal;
