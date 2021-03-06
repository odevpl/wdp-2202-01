import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateViewport } from '../../../redux/viewportRedux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComparisonBar from '../../features/ComparisonBar/ComparisonBar';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const mobile = 'mobile';
    const tablet = 'tablet';
    const desktop = 'desktop';

    let viewport = mobile;

    const updateSize = () => {
      if (window.screen.width < 576) {
        viewport = mobile;
      } else if (window.screen.width >= 576 && window.screen.width < 992) {
        viewport = tablet;
      } else if (window.screen.width >= 992) {
        viewport = desktop;
      }
      dispatch(updateViewport(viewport));
    };

    updateSize();

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

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
