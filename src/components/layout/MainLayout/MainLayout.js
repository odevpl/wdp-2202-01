import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComparisonBar from '../../features/ComparisonBar/ComparisonBar';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
    <ComparisonBar />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
