import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../../utils/responsive';

const Actions = styled.div`
  margin: 6rem 0 0;

  button,
  a {
    &:not(:last-child) {
      margin: 0 2.5rem 1rem 0;
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
      font-size: 4.9rem;
      font-weight: 600;
      line-height: 0.63;

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

const Wrapper = styled.div``;

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
