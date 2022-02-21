import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';

class Brands extends React.Component {
  render() {
    const { brands } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row align-items-center ' + styles.brandsBar}>
            <Button className={styles.button}>
              <span className={styles.sign}>&#x2329;</span>
            </Button>
            <ul className={styles.brandsList}>
              {brands.map(brand => {
                return (
                  <li
                    className={styles.brand}
                    key={brand.id.replace('brand-', '')}
                    style={{ backgroundImage: `url('${brand.image}')` }}
                    alt='brand'
                  ></li>
                );
              })}
            </ul>
            <Button className={styles.button}>
              <span className={styles.sign}>&#x232A;</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
