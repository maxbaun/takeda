import PropTypes from 'prop-types';
import React, {Children, cloneElement, useRef, useState} from 'react';
import styled from 'styled-components';

import {useOutsideClick} from '../../hooks';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

const Wrapper = styled.div`
  position: relative;
`;

const Dropdown = ({children, id, ...props}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <Wrapper {...props} ref={ref}>
      {Children.map(children, child =>
        cloneElement(child, {...child.props, buttonId: `${id}-toggle`, isOpen, onToggleClick: () => setIsOpen(!isOpen)})
      )}
    </Wrapper>
  );
};

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  id: PropTypes.string.isRequired
};

Dropdown.Menu = DropdownMenu;
Dropdown.Toggle = DropdownToggle;

export default Dropdown;
