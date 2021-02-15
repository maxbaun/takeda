import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  font-size: 1.4rem;
  min-width: 100%;
  position: absolute;
  top: calc(100% + 1px);
  z-index: 2;

  > div {
    background-color: #fff;
    padding: 0.5em 0;

    > ul {
      display: block;
      padding: 0;

      > li {
        display: block;

        a,
        button {
          display: block;
          padding: 0.75em 0.6em;
        }
      }
    }
  }
`;

const DropdownMenu = ({buttonId, children, isOpen, onToggleClick, style, ...props}) => {
  const ref = useRef();
  const [_style, _setStyle] = useState({});

  const init = () => {
    if (ref.current) {
      const {left, width} = ref.current.getBoundingClientRect();

      if (left + width > window.innerWidth) {
        _setStyle({
          left: 'auto',
          right: 0
        });
      } else {
        _setStyle({
          left: 0,
          right: 'auto'
        });
      }
    }
  };

  useEffect(() => {
    init();
    document.addEventListener('resize', init);

    return () => {
      document.removeEventListener('resize', init);
    };
  }, []);

  return (
    <Wrapper
      {...props}
      aria-labelledby={buttonId}
      ref={ref}
      style={{visibility: isOpen ? 'visible' : 'hidden', ...style, ..._style}}
    >
      <div>{children}</div>
    </Wrapper>
  );
};

DropdownMenu.propTypes = {
  buttonId: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  isOpen: PropTypes.bool,
  onToggleClick: PropTypes.func,
  style: PropTypes.object
};

DropdownMenu.defaultProps = {
  buttonId: 'dropdownToggle',
  style: {}
};

export default DropdownMenu;
