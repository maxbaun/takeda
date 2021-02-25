import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import {ButtonPrimary} from '../../../shared/Button';
import Carousel from '../../../shared/Carousel/Carousel';
import InViewSection from '../../../shared/InViewSection';
import SeparatorImg from './example-separator.png';

const Example = styled.div`
  display: grid;
  grid-gap: 2.2rem;
  grid-template-columns: repeat(2, minmax(0, 50%));
  -ms-grid-columns: minmax(0px, 50%) 22px minmax(0px, 50%);
`;

const ExampleBlock = styled.div`
  height: 402px;
  margin-bottom: 10px;
  position: relative;

  &:first-child {
    -ms-grid-column: 1;
  }

  &:last-child {
    -ms-grid-column: 3;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  > span {
    background-color: ${props => props.theme.solitude};
    bottom: 0;
    color: ${props => (props.after ? props.theme.red : '#000')};
    font-size: 1.4rem;
    font-weight: 700;
    left: 0;
    letter-spacing: 0.3em;
    max-width: 100%;
    position: absolute;
    padding: 1.6rem 0 0 1.6rem;
    text-transform: uppercase;
    width: 245px;

    > span {
      position: relative;

      &::after {
        background-color: currentColor;
        bottom: -10px;
        content: ' ';
        height: 5px;
        left: 0;
        position: absolute;
        width: 100%;
      }
    }
  }
`;

const ExampleSeparator = styled.div`
  background-image: ${`url(${SeparatorImg})`};
  bottom: 0;
  display: none;
  height: calc(100% - 15px);
  position: absolute;
  right: -20px;
  width: 1px;
`;

const Examples = styled(Carousel)`
  margin: 0 0 2.5rem;

  ${mediaBreakpointUp('sm')} {
    margin: 0 0 3rem;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 0 0 5rem;
  }

  .slick-slide {
    padding: 0 10px;

    ${mediaBreakpointUp('md')} {
      padding: 0 20px;
    }

    &.slick-current {
      ${ExampleSeparator} {
        ${mediaBreakpointUp('lg')} {
          display: block;
        }
      }
    }
  }
`;

const Footer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;

  ${mediaBreakpointUp('lg')} {
    align-items: flex-end;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  > :first-child {
    order: 1;

    ${mediaBreakpointUp('lg')} {
      order: 0;
    }
  }
`;

const Header = styled.div`
  ${mediaBreakpointUp('lg')} {
    max-width: 600px;
  }

  h2 {
    ${mediaBreakpointUp('lg')} {
      margin: 0 0 2.4rem;
    }
  }

  p {
    ${mediaBreakpointUp('lg')} {
      margin: 0 0 4.2rem;
    }
  }
`;

const Note = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  order: 0;
  margin: 0 auto 4rem;
  max-width: 500px;
  text-align: center;

  ${mediaBreakpointUp('sm')} {
    font-size: 1.8rem;
    margin: 0 auto 5.8rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.4rem;
    order: 1;
    margin: 0;
    max-width: 405px;
    text-align: right;
  }
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.solitude};
  padding: 1rem 0 5rem;

  ${mediaBreakpointUp('sm')} {
    padding: 1.5rem 0 12rem;
  }

  ${mediaBreakpointUp('lg')} {
    padding: 2.5rem 0 10rem;
  }
`;

const PatientExamplesSection = ({children, ctaText, ctaUrl, examples, note, ...props}) => {
  return (
    <InViewSection>
      <Wrapper {...props}>
        <div className="container">
          <Header className="fade-in-content bottom">{children}</Header>
          <Examples
            className="fade-in-media"
            slickOptions={{
              infinite: false,
              slidesToShow: 2,
              responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            }}
          >
            {examples?.map((example, index) => (
              <div key={index}>
                <Example>
                  <ExampleBlock before>
                    <img src={example.before} />
                    <span>Before HAE Attack</span>
                  </ExampleBlock>
                  <ExampleBlock after>
                    <img src={example.after} />
                    <span>
                      <span>After HAE Attack</span>
                    </span>
                    <ExampleSeparator />
                  </ExampleBlock>
                </Example>
              </div>
            ))}
          </Examples>
          <Footer>
            <ButtonPrimary href={ctaUrl} icon="chevron-right">
              {ctaText}
            </ButtonPrimary>
            <Note>{note}</Note>
          </Footer>
        </div>
      </Wrapper>
    </InViewSection>
  );
};

PatientExamplesSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  ctaText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ctaUrl: PropTypes.string,
  examples: PropTypes.arrayOf(
    PropTypes.shape({
      after: PropTypes.string,
      before: PropTypes.string
    })
  ),
  note: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

export default PatientExamplesSection;
