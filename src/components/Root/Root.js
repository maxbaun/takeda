import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import Context from '../../context';
import Footer from './Footer';
import Header from './Header';
import Popups from './Popups';

const Root = ({children}) => {
  const [popups, setPopups] = useState({
    leaving: {
      data: null,
      open: false
    },
    noCamera: {
      data: null,
      open: false
    }
  });

  const openPopup = (key, data = null) =>
    setPopups({
      ...popups,
      [key]: {
        data,
        open: true
      }
    });

  const closePopup = key => {
    if (popups[key]) {
      return setPopups({
        ...popups,
        [key]: {
          ...popups[key],
          open: false
        }
      });
    }

    return setPopups({
      ...popups,
      [key]: {
        data: null,
        open: false
      }
    });
  };

  useEffect(() => {
    // Check for camera
    window.navigator.getUserMedia(
      {video: true},
      videoStream => {
        if (!videoStream.getVideoTracks().length) {
          return openPopup('noCamera');
        }

        // Video stream exists
      },
      () => {
        // No cams found or user blocked
        openPopup('noCamera');
      }
    );
  }, []);

  return (
    <Context.Provider value={{popups, openPopup, closePopup}}>
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
