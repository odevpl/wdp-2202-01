import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateViewport } from '../../../redux/viewportRedux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComparisonBar from '../../features/ComparisonBar/ComparisonBar';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [viewport, setViewport] = useState('');

  useLayoutEffect(() => {
    const updateSize = () => {
      if (window.screen.width <= 480) {
        setViewport('mobile');
      } else if (window.screen.width >= 481 && window.screen.width <= 768) {
        setViewport('tablet');
      } else if (window.screen.width >= 769) {
        setViewport('desktop');
      }
      dispatch(updateViewport(viewport));
    };

    updateSize();

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [dispatch, viewport]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ComparisonBar />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
