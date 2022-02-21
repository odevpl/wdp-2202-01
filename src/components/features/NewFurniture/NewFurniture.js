import ProductBox from '../../common/ProductBox/ProductBox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import { getViewport } from './../../../redux/viewportRedux';
import React from 'react';
import styles from './NewFurniture.module.scss';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    boxNum: this.boxNum(this.props.viewPort),
    isFading: false,
  };

  handlePageChange(newPage) {
    this.setState(prevState => ({
      ...prevState,
      activePage: newPage,
      isFading: true,
    }));
    if (this.state.isFading === false) {
      setTimeout(
        function() {
          this.setState(prevState => ({
            ...prevState,
            isFading: false,
          }));
        }.bind(this),
        500
      );
    }
  }

  handleCategoryChange(newCategory) {
    this.setState(prevState => ({
      ...prevState,
      activeCategory: newCategory,
      isFading: true,
    }));
    if (this.state.isFading === false) {
      setTimeout(
        function() {
          this.setState(prevState => ({
            ...prevState,
            isFading: false,
          }));
        }.bind(this),
        600
      );
    }
  }
  boxNum(viewPort) {
    if (viewPort === 'tablet') {
      return 4;
    } else if (viewPort === 'mobile') {
      return 2;
    } else {
      return 8;
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.viewPort !== this.props.viewPort) {
      this.setState(prevState => ({
        ...prevState,
        boxNum: this.boxNum(this.props.viewPort),
      }));
    }
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage, isFading } = this.state;

    const productsOnPage = () => {
      if (this.props.viewport === 'mobile') {
        return 2;
      } else if (this.props.viewport === 'tablet') {
        return 4;
      } else {
        return 8;
      }
    };

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / this.state.boxNum);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(
        categoryProducts
          .slice(activePage * this.state.boxNum, (activePage + 1) * this.state.boxNum)
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
                />
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
                <h3> New furniture </h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul key='123'>{dots}</ul>
              </div>
            </div>
          </div>

          {/* <Swipeable
              activePage={activePage}
              handlePageChange={this.handlePageChange.bind(this)}
              pages={pages}
            /> */}

          <SwipeableViews
            enableMouseEvents
            index={activePage}
            onChangeIndex={page => this.handlePageChange(page)}
            slideStyle={{ overflow: 'hidden' }}
          >
            {pages.map((page, index) => (
              <div
                key={index}
                className={`row ${isFading ? styles.fadeIn : styles.fadeOut}`}
              >
                {page}
              </div>
            ))}
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  viewPort: PropTypes.string,
  favorites: PropTypes.array,
  viewport: PropTypes.string,
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

const mapStateToProps = state => {
  return {
    categories: state.categories,
    products: state.products,
    favorites: state.favorites,
    comparedProducts: state.comparedProducts,
    viewport: state.viewport,
  };
};

export default connect(mapStateToProps)(NewFurniture);
