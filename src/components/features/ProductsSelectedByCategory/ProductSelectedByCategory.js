import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductBox from '../../common/ProductBox/ProductBox';
import ProductListItem from '../../common/ProductListItem/ProductListItem';
import { getProductsByCategory } from '../../../redux/productsRedux';
import styles from './ProductsSelectedByCategory.module.scss';

const ProductsSelectedByCategory = ({ category, layout }) => {
  const products = useSelector(state => getProductsByCategory(state, category));
  return (
    <>
      {layout === 'grid' && (
        <div className={styles.productGrid}>
          {products.map(product => (
            <ProductBox key={product.id} {...product} product={product} />
          ))}
        </div>
      )}
      {layout === 'list' && (
        <div className={styles.productList}>
          {products.map(product => (
            <ProductListItem key={product.id} {...product} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

ProductsSelectedByCategory.propTypes = {
  category: PropTypes.string,
  layout: PropTypes.string,
};
export default ProductsSelectedByCategory;
