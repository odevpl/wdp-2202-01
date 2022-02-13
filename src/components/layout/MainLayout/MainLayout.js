import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateViewport } from '../../../redux/viewportRedux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [viewport, setViewport] = useState('');

  useLayoutEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 480) {
        setViewport('mobile');
      } else if (window.innerWidth >= 481 && window.innerWidth <= 768) {
        setViewport('tablet');
      } else {
        setViewport('desktop');
      }
      dispatch(updateViewport(viewport));
    };

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, [dispatch, viewport]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;

/*
 function updateSize() {
  setSize([window.innerWidth, window.innerHeight]);
}

useLayoutEffect(() => {
    const updateSize = () => {
      if(window.innerWidth >= 100){
        return 'mobile';
      } else if (window.innerWidth >= 120){
        return 'tablet';
      } else {
        return 'dekstop';
      }
    };

    window.addEventListener('resize', updateSize);
    dispatch(updateViewport(size));
    return () => window.removeEventListener('resize', updateSize);
  }, []);

*/
