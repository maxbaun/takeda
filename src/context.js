import React from 'react';

const Context = React.createContext({
  popups: {
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
