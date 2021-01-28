import React from 'react';

const Context = React.createContext({
  popups: {
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
  },
  closePopup: () => {},
  openPopup: () => {}
});

export default Context;
