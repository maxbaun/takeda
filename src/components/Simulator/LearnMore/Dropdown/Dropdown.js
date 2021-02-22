import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import {ButtonGreen} from '../../../shared/Button';

const ContentInner = styled.div`
  background-color: #fff;
  border-radius: 15px;
  line-height: 1.57;
  padding: 2rem;

  strong {
    display: block;
  }

  ${mediaBreakpointUp('sm')} {
    font-size: 2.1rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.4rem;
  }
`;

const Content = styled.div`
  overflow: hidden;
  margin-top: 1.2rem;
  max-height: 0;
  transition: max-height 0.2s ease-in-out;

  ${mediaBreakpointUp('sm')} {
    margin-top: 2.2rem;
  }

  ${mediaBreakpointUp('lg')} {
    margin-top: 1.2rem;
  }
`;

const Toggle = styled(ButtonGreen)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  &[data-icon] {
    padding: 1.2rem 2rem;

    ${mediaBreakpointUp('sm')} {
      padding: 2.2rem 2.8rem 2.2rem 3.8rem;
    }

    ${mediaBreakpointUp('lg')} {
      padding: 1.2rem 2rem;
    }

    > span {
      white-space: nowrap;
    }
  }

  &:hover {
    i {
      &:last-child {
        transform: none;
      }
    }
  }
`;

const Wrapper = styled.div`
  margin: 2rem 0;

  ${mediaBreakpointUp('sm')} {
    margin: 2.8rem 0;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 2rem 0;
  }
`;

const Dropdown = ({children, isOpen, onClick: handleClick, title, ...props}) => {
  return (
    <Wrapper {...props}>
      <Toggle icon={isOpen ? 'minus' : 'plus'} onClick={handleClick}>
        {title}
      </Toggle>
      <Content style={{maxHeight: isOpen ? 1000 : 0}}>
        <ContentInner>{children}</ContentInner>
      </Content>
    </Wrapper>
  );
};

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string
};

export default Dropdown;
