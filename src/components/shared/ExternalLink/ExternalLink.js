import PropTypes from 'prop-types';
import React, {useContext} from 'react';

import Context from '../../../context';

const ExternalLink = ({children, href, onClick: handleClick, ...props}) => {
  const {openPopup} = useContext(Context);
  return (
    <a
      {...props}
      href={href}
      onClick={e => {
        e.preventDefault();

        if (typeof handleClick === 'function') {
          handleClick();
        }

        openPopup('leaving', {href, ...props});
      }}
    >
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.string]),
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ExternalLink;
