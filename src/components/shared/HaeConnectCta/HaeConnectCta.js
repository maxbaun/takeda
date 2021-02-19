import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import {ButtonPrimary} from '../Button';
import imgDotPattern from './dot-pattern-hae-connect-cta.png';
import imgDotPatternMobile from './dot-pattern-hae-connect-cta-mobile.png';

const CtaWrap = styled.div`
  align-items: center;
  display: flex;

  ${mediaBreakpointUp('lg')} {
    justify-content: flex-end;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-gap: 3rem;

  ${mediaBreakpointUp('sm')} {
    grid-gap: 3.6rem;
  }

  ${mediaBreakpointUp('lg')} {
    grid-gap: 3rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const Wrapper = styled.div`
  background-blend-mode: soft-light;
  background-color: ${props => props.theme.blue};
  background-image: ${() => `url('${imgDotPatternMobile}')`};
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: auto 100%;
  padding: 6rem 0 6.4rem;

  ${mediaBreakpointUp('sm')} {
    padding: 8rem 0 8.4rem;
  }

  ${mediaBreakpointUp('lg')} {
    background-image: ${() => `url('${imgDotPattern}')`};
    padding: 7rem 0;
  }

  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.42;
    margin: 0;

    ${mediaBreakpointUp('sm')} {
      font-size: 3.8rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 28px;
      line-height: 1.571;
    }
  }
`;

const HaeConnectCta = props => {
  return (
    <Wrapper {...props}>
      <div className="container">
        <Inner>
          <h4>Learn more about HAE from experts in the field via the HAE CONNECT platform!</h4>
          <CtaWrap>
            <ButtonPrimary external href="https://google.com" rel="noreferrer noopener" target="__blank">
              Return to HAE CONNECT platform
            </ButtonPrimary>
          </CtaWrap>
        </Inner>
      </div>
    </Wrapper>
  );
};

export default HaeConnectCta;
