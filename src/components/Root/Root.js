import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

const Root = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />:
    </div>
  );
};

Root.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Root;
