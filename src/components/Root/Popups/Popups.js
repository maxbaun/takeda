import React, {useContext} from 'react';

import Context from '../../../context';
import Popup from '../../shared/Popup';
import CookieBar from './CookieBar';
import Intro from './Intro';
import Leaving from './Leaving';
import NoCamera from './NoCamera';

const Popups = () => {
  const {popups, closePopup} = useContext(Context);

  return (
    <>
      <Popup isOpen={popups.noCamera.open} onClose={() => closePopup('noCamera')}>
        <NoCamera />
      </Popup>
      <Popup isOpen={popups.intro.open} onClose={() => closePopup('noCamera')}>
        <Intro onNo={() => closePopup('intro')} onYes={() => closePopup('intro')} />
      </Popup>
      <Popup isOpen={popups.leaving.open}>
        <Leaving
          confirmProps={{
            ...popups.leaving.data,
            href: popups.leaving.data?.href || null,
            external: true,
            renderAs: 'a'
            // rel: 'noopener noreferrer',
            // target: '__blank'
          }}
          onCancel={() => closePopup('leaving')}
        />
      </Popup>
      {popups.cookieBar?.open ? (
        <CookieBar
          onAccept={() => {
            closePopup('cookieBar');
            localStorage.setItem('takeda_cookieBar_viewed', 1);
          }}
        />
      ) : null}
    </>
  );
};

export default Popups;
