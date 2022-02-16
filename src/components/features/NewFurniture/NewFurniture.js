import ProductBox from '../../common/ProductBox/ProductBox';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import React from 'react';
import styles from './NewFurniture.module.scss';

import Swipeable from '../../common/Swipeable/Swipeable';
class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    isFading: false,
  };

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
      isFading: true,
    });
    if (this.state.isFading === false) {
      setTimeout(
        function() {
          this.setState({
            isFading: false,
          });
        }.bind(this),
        900
      );
    }
  }

  handleCategoryChange(newCategory) {
    this.setState({
      activeCategory: newCategory,
      isFading: true,
    });
    if (this.state.isFading === false) {
      setTimeout(
        function() {
          this.setState({
            isFading: false,
          });
        }.bind(this),
        900
      );
    }
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage, isFading } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}{' '}
          </a>{' '}
        </li>
      );
    }

    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(
        categoryProducts
          .slice(activePage * 8, (activePage + 1) * 8)
          .map((item, index) => {
            const favorite = this.props.favorites.find(
              product => product.id === item.id
            )
              ? true
              : '';
            const addedForComparison = this.props.comparedProducts.find(
              product => product.id === item.id
            )
              ? true
              : '';

            return (
              <div key={item.id} className='col-3'>
                <ProductBox
                  {...item}
                  product={item}
                  favorite={favorite}
                  addedForComparison={addedForComparison}
                />{' '}
              </div>
            );
          })
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3> New furniture </h3>{' '}
              </div>{' '}
              <div className={'col ' + styles.menu}>
                <ul>
                  {' '}
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}{' '}
                      </a>{' '}
                    </li>
                  ))}{' '}
                </ul>{' '}
              </div>{' '}
              <div className={'col-auto ' + styles.dots}>
                <ul> {dots} </ul>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className={`row ${isFading ? styles.fadeIn : styles.fadeOut}`}>
            <Swipeable
              activePage={activePage}
              handlePageChange={this.handlePageChange.bind(this)}
              pages={pages}
            />{' '}
          </div>{' '}
        </div>{' '}
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  favorites: PropTypes.array,
  comparedProducts: PropTypes.array,

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

const mapStateToProps = state => ({
  favorites: state.favorites,
  comparedProducts: state.comparedProducts,
});

export default connect(mapStateToProps)(NewFurniture);
