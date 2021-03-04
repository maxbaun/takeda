import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import Context from '../../context';
import Footer from './Footer';
import Header from './Header';
import Popups from './Popups';

const Root = ({children}) => {
  // const [isAuthorized, _setIsAuthorized] = useState(Boolean(localStorage.getItem('takeda_authorized')));
  const [isAuthorized, _setIsAuthorized] = useState(false);
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

  const setIsAuthorized = isAuthorized => {
    // localStorage.setItem('takeda_authorized', Boolean(isAuthorized));
    _setIsAuthorized(isAuthorized);
  };

  useEffect(() => {
    if (isAuthorized) {
      document.body.style.overflow = null;
      closePopup('intro');
    } else {
      document.body.style.overflow = 'hidden';
      openPopup('intro');
    }
  }, [isAuthorized]);

  useEffect(() => {
    // If cookie bar has not been viewed, open it
    const cookieBarViewed = localStorage.getItem('takeda_cookieBar_viewed');

    if (!cookieBarViewed) {
      openPopup('cookieBar');
    }
  }, []);

  return (
    <Context.Provider value={{isAuthorized, popups, openPopup, closePopup, setIsAuthorized}}>
      <div>
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
