import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import Context from '../../context';
import isUnsupportedBrowser from '../../utils/isUnsupportedBrowser';
import Footer from './Footer';
import Header from './Header';
import Popups from './Popups';
import UnsupportedBrowser from './UnsupportedBrowser/UnsupportedBrowser';

const Root = ({children}) => {
  const [popups, setPopups] = useState({
    cookieBar: {
      open: false,
      data: null
    },
    intro: {
      data: null,
      open: false
    },
    leaving: {
      data: null,
      open: false
    },
    noCamera: {
      data: null,
      open: false
    }
  });

  const openPopup = (key, data = null) => {
    return setPopups(prev => ({
      ...prev,
      [key]: {
        data,
        open: true
      }
    }));
  };

  const closePopup = key => {
    if (popups[key]) {
      return setPopups(prev => ({
        ...prev,
        [key]: {
          ...popups[key],
          open: false
        }
      }));
    }

    return setPopups(prev => ({
      ...prev,
      [key]: {
        data: null,
        open: false
      }
    }));
  };

  useEffect(() => {
    // If cookie bar has not been viewed, open it
    const cookieBarViewed = localStorage.getItem('takeda_cookieBar_viewed');

    if (!cookieBarViewed) {
      openPopup('cookieBar');
    }
  }, []);

  return (
    <Context.Provider value={{popups, openPopup, closePopup}}>
      <div>
        {isUnsupportedBrowser() ? (
          <UnsupportedBrowser>
            <p>
              <b>Unsupported Browser!</b> This website will offer limited functionality in this browser. We only support
              the recent versions of major browsers like Chrome, Firefox, Safari, and Edge.
            </p>
          </UnsupportedBrowser>
        ) : null}
        <Header />
        {children}
        <Footer />

        <Popups />
      </div>
    </Context.Provider>
  );
};

Root.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Root;
