import React from 'react';
import styles from './Feedback.module.scss';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Swipeable from '../../common/Swipeable/Swipeable';

class Feedback extends React.Component {
  state = {
    activePage: 0,
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

  render() {
    const { opinions } = this.props;
    const { activePage } = this.state;
    const pagesAmount = Math.ceil(opinions.length);

    const points = [];
    for (let v = 0; v < pagesAmount; v++) {
      points.push(
        <li key={v}>
          <a className={v === activePage ? styles.active : ''}>page {v}</a>
        </li>
      );
    }

    const feedbacks = [];
    for (let v = 0; v < pagesAmount; v++) {
      feedbacks.push(
        opinions.slice(activePage, activePage + 1).map(feed => (
          <div key={feed.id} className='col text-center'>
            <div className='row justify-content-md-center'>
              <p className={styles.opinionCont}>{feed.customerOpinion}</p>
            </div>
            <div className='row justify-content-md-center'>
              <div className='col col-lg-1'>
                <img
                  className={styles.customerPhoto}
                  src={feed.customerPhoto}
                  alt='Avatar'
                />
              </div>
              <div className={'col col-lg-2 ' + styles.spec}>
                <h6>{feed.customerName}</h6>
                <p className={styles.customerState}>Furniture Customer</p>
              </div>
            </div>
          </div>
        ))
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.feedbackMainBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Customer Feedback</h3>
              </div>
              <div className='col'></div>
              <div className={'col-auto ' + styles.points}>
                <ul>{points}</ul>
              </div>
            </div>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
          </div>
          <div className={styles.opinionArea}>
            <Swipeable
              activePage={activePage}
              handlePageChange={this.handlePageChange.bind(this)}
              pages={feedbacks}
            />
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  children: PropTypes.node,
  opinions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      customerName: PropTypes.string,
      customerPhoto: PropTypes.string,
      customerOpinion: PropTypes.string,
    })
  ),
};

Feedback.defaultProps = {
  opinions: [],
};

export default Feedback;
