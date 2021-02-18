import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {listUnstyled} from '../../../../../utils/lists';
import {mediaBreakpointUp} from '../../../../../utils/responsive';

const Actions = styled.div`
  margin: 6rem 0 0;

  ${mediaBreakpointUp('sm')} {
    margin: 10.4rem 0 0;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 6rem 0 0;
  }

  ul {
    ${listUnstyled()};
    display: inline-flex;
    flex-flow: column nowrap;

    ${mediaBreakpointUp('lg')} {
      flex-flow: row wrap;
    }
  }

  button,
  a {
    margin: 0 0 3rem 0;
    order: 1;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 4.8rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 2.5rem 1rem 0;
      order: 0;
    }

    > span {
      width: 100%;
    }

    &.try-again,
    &.next {
      min-width: 100%;

      ${mediaBreakpointUp('sm')} {
        min-width: 308px;
      }

      ${mediaBreakpointUp('lg')} {
        min-width: 0;
      }
    }

    &.try-again {
      order: 0;
    }

    &.read-more {
      order: 1;

      ${mediaBreakpointUp('lg')} {
        order: 1;
      }
    }

    &.next {
      order: 0;

      ${mediaBreakpointUp('lg')} {
        order: 2;
      }
    }
  }
`;

const Content = styled.div`
  ${mediaBreakpointUp('lg')} {
    max-width: 570px;
  }

  p {
    margin: 0 0 3rem;

    &.title {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 1;
      margin: 0 0 2rem;

      ${mediaBreakpointUp('sm')} {
        font-size: 4.3rem;
        margin: 0 0 2.9rem;
      }

      ${mediaBreakpointUp('lg')} {
        font-size: 4.9rem;
        margin: 0 0 2rem;
      }

      &.correct {
        color: ${props => props.theme.green};
      }

      &.incorrect {
        color: ${props => props.theme.red};
      }
    }
  }
`;

const References = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  margin: 10rem 0 0;

  ${mediaBreakpointUp('lg')} {
    max-width: 590px;
  }
`;

const Wrapper = styled.div`
  margin: 5rem 0 0;

  ${mediaBreakpointUp('sm')} {
    margin: 5.1rem 0 0;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 0;
  }
`;

const Answer = ({actions, children, references, title, titleClass, ...props}) => {
  return (
    <Wrapper {...props}>
      <Content>
        <p className={['title', titleClass].join(' ')}>{title}</p>
        {children}
      </Content>
      <Actions>{actions}</Actions>
      {references ? (
        <References>
          <strong>References: </strong>
          {references}
        </References>
      ) : null}
    </Wrapper>
  );
};

Answer.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  references: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  title: PropTypes.string,
  titleClass: PropTypes.string
};

export default Answer;
