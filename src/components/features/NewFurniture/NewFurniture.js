import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    activePageEffect: styles.fadeIn,
  };

  handlePageChange(newPage) {
    this.setState({ activePageEffect: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activePage: newPage, activePageEffect: styles.fadeIn });
    }, 400);
  }

  handleCategoryChange(newCategory) {
    this.setState({ activePageEffect: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory, activePageEffect: styles.fadeIn });
    }, 400);
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage, activePageEffect } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/#'
            onClick={() => {
              this.handlePageChange(i);
            }}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-12 col-md-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-auto col-md ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        href='/#'
                        className={
                          item.id === activeCategory ? styles.active : undefined
                        }
                        onClick={() => {
                          this.handleCategoryChange(item.id);
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className={'row ' + activePageEffect}>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className={`col-6 col-md-4 col-lg-3}`}>
                <ProductBox {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  favorites: PropTypes.array,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
