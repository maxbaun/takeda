import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import scrollToElement from '../../../utils/scrollToElement';
import HaeConnectCta from '../../shared/HaeConnectCta';
import InViewSection from '../../shared/InViewSection';
import References from '../../shared/References';
import SymptomQuiz from '../../shared/SymptomQuiz';
import Video from '../../shared/Video/Video';
import VideoSection from '../../shared/VideoSection';
import CommonTriggers from './CommonTriggers';
import Hero from './Hero';
import imgVideo1 from './images/HAE-BG-Video-1.jpg';
import imgVideo2 from './images/HAE-BG-Video-2.jpg';
import imgVideo3 from './images/HAE-BG-Video-3.jpg';
import iconAnxiety from './images/icon-anxiety.png';
import iconInjury from './images/icon-injury.png';
import iconMedication from './images/icon-medication.png';
import iconPhysical from './images/icon-physical.png';
import iconPregnancy from './images/icon-pregnancy.png';
import iconUnknown from './images/icon-unknown.png';
import PhysiologySection from './PhysiologySection';
import SymptomMap from './SymptomMap';
import Title from './Title';

const HeroVideoSectionContent = styled(VideoSection.Content)`
  h2 {
    max-width: 459px;
  }

  ${mediaBreakpointUp('lg')} {
    max-width: 385px;
  }
`;

const Wrapper = styled.div``;

const About = props => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const [, elId] = location.hash.split('#');
      if (elId) {
        const el = document.getElementById(elId);

        if (el) {
          scrollToElement(elId);
        }
      }
    }
  }, [location.hash]);

  return (
    <Wrapper {...props}>
      <InViewSection>
        <Hero
          media={
            <Video
              caption="Video 1: introduction to hereditary angioedema"
              circlePosition="bottom-right"
              circleSize="lg"
              className="fade-in-media"
              disclaimer={
                <>
                  Copyright &copy; 2021 Takeda Pharmaceutical Company Limited. All rights reserved. Takeda and the
                  Takeda logo are registered trademarks of Takeda Pharmaceutical Company Limited.
                </>
              }
              id="video-1"
              src="https://players.brightcove.net/2299575749001/RxN6OjUic_default/index.html?videoId=6232483060001"
              thumbnail={imgVideo1}
              thumbnailRatio="853:528"
            />
          }
          title={
            <Title>
              <h1>
                About
                <br />
                HAE
              </h1>
            </Title>
          }
        >
          <HeroVideoSectionContent className="fade-in-content bottom">
            <h2>HAE etiology and burden of disease</h2>
            <p>
              Hereditary angioedema (HAE) can be divided into three types:{' '}
              <span className="accent">HAE Type I, HAE Type II</span>, and{' '}
              <span className="accent">HAE with normal C1 inhibitor</span> (HAE-nC1-INH).<sup>1</sup>{' '}
              <span className="accent">HAE-nC1-INH is much less prevalent</span> than HAE Type I and HAE Type II and has
              many <span className="accent">confirmed and potential variants</span>.<sup>1</sup>
            </p>
            <p>
              The estimated prevalence of HAE is 1:50,000 globally but is likely to be higher due to delayed
              diagnosis/misdiagnosis.<sup>2–4</sup>
            </p>
            <p>
              HAE is a debilitating illness that can have <span className="accent">long-term effects</span> and
              substantially impact a patient’s <span className="accent">quality of life</span>.<sup>5,6</sup>
            </p>
            <p>Please watch video 1 to learn more about HAE!</p>
          </HeroVideoSectionContent>
        </Hero>
      </InViewSection>
      <PhysiologySection>
        <InViewSection>
          <h2 className="fade-in-content bottom">Pathophysiology of HAE</h2>
        </InViewSection>
        <InViewSection>
          <VideoSection
            media={
              <Video
                caption="Video 2: the role of C1 inhibitor in HAE"
                circleColor="yellow"
                circlePosition="bottom-left"
                className="fade-in-media"
                disclaimer={
                  <>
                    Copyright &copy; 2021 Takeda Pharmaceutical Company Limited. All rights reserved. Takeda and the
                    Takeda logo are registered trademarks of Takeda Pharmaceutical Company Limited.
                  </>
                }
                id="video-2"
                src="https://players.brightcove.net/2299575749001/RxN6OjUic_default/index.html?videoId=6232482387001"
                thumbnail={imgVideo2}
              />
            }
          >
            <VideoSection.Content className="fade-in-content bottom">
              <p>
                <strong className="accent">C1-INH</strong> is a naturally occurring protein that inhibits plasma
                kallikrein, a key mediator of inflammation.
                <sup>7–10</sup>
              </p>

              <p>
                C1-INH deficiency results in uncontrolled kallikrein activity, leading to increased generation of the
                vasoactive peptide bradykinin.<sup>7–10</sup>
              </p>

              <p>
                Decreased or dysfunctional C1-INH impacts the{' '}
                <strong className="accent">kallikrein–kinin system</strong>.<sup>7–10</sup>
              </p>

              <p>Please watch video 2 to learn about the role of C1-INH in more detail!</p>
            </VideoSection.Content>
          </VideoSection>
        </InViewSection>
        <InViewSection>
          <VideoSection
            media={
              <Video
                caption="Video 3: the role of plasma kallikrein in HAE"
                circleColor="blue"
                circlePosition="bottom-right"
                className="fade-in-media"
                disclaimer={
                  <>
                    Copyright &copy; 2021 Takeda Pharmaceutical Company Limited. All rights reserved. Takeda and the
                    Takeda logo are registered trademarks of Takeda Pharmaceutical Company Limited.
                  </>
                }
                id="video-3"
                src="https://players.brightcove.net/2299575749001/RxN6OjUic_default/index.html?videoId=6232479654001"
                thumbnail={imgVideo3}
              />
            }
            mediaLeft={false}
          >
            <VideoSection.Content className="fade-in-content bottom">
              <p>
                Cleavage of high molecular weight kininogen by plasma kallikrein results in generation of bradykinin.
                <sup>11</sup>
              </p>

              <p>
                <strong className="accent">Bradykinin</strong> has been shown to be{' '}
                <strong className="accent">elevated</strong> during <strong className="accent">HAE attacks</strong> and
                is responsible for edema formation and the related clinical signs and symptoms of swelling and pain.
                <sup>12</sup>
              </p>

              <p>Please watch video 3 for further information about the role of plasma kallikrein in HAE!</p>
            </VideoSection.Content>
          </VideoSection>
        </InViewSection>
      </PhysiologySection>
      <SymptomMap id="symptomMap">
        <h2>Symptom map</h2>
        <p>
          Angioedema attacks <strong className="accent">vary in location</strong>, frequency, duration, and severity,
          <sup>5,13</sup> and are often <strong className="accent">painful, unpredictable, debilitating</strong>, and
          sometimes <strong className="accent">life-threatening</strong>.<sup>5</sup>
        </p>
      </SymptomMap>
      <CommonTriggers
        icons={[
          {caption: 'Physical activity / exercise', color: 'green', image: iconPhysical},
          {caption: 'Anxiety / stress / fear', color: 'blue', image: iconAnxiety},
          {caption: 'Injury / disease / illness', color: 'blue', image: iconInjury},
          {caption: 'Pregnancy', color: 'green', image: iconPregnancy},
          {caption: 'No known trigger', color: 'green', image: iconUnknown},
          {caption: 'Medication', color: 'blue', image: iconMedication}
        ]}
      >
        <h2>Common triggers</h2>
        <p>
          All patients with HAE should be educated about possible triggers that may cause a HAE attack.<sup>16</sup>{' '}
          Although a number of triggers have been identified, many HAE attacks occur without an obvious trigger, and the
          same trigger may not always provoke a HAE attack.<sup>5</sup> Therefore, HAE attacks may be unpredictable, and
          a personalized management plan should be created in case of emergency.
        </p>
      </CommonTriggers>
      <SymptomQuiz />
      <HaeConnectCta />
      <References>
        <>
          1. Betschel S, et al. <em>Allergy Asthma Clin Immunol</em> 2019;15:72; 2. Lumry WR, et al. <em>Pediatr</em>{' '}
          2013;162:1017–1022; 3. Zuraw BL, et al. <em>J Allergy Clin Immunol Pract</em> 2013;1:458–467; 4.{' '}
          Aygören-Pürsün E, et al. <em>Orphanet J Rare Dis</em> 2018;13:73; 5. Banerji A.{' '}
          <em>Ann Allergy Asthma Immunol</em> 2013;111:329–336; 6. Bygum A, et al. <em>Acta Derm Venereol</em>{' '}
          2015;95:706–710; 7. Reshef A, et al. <em>Clinic Rev Allerg Immunol</em> 2016;51:121–139; 8. Kaplan AP & Joseph
          K. <em>Ann Allergy Asthma Immunol</em> 2010;104:193–204; 9. Zuraw BL & Christiansen SC.{' '}
          <em>Clinic Rev Allerg Immunol</em> 2016;51:216–229; 10. Hofman ZLM, et al. <em>J Allergy Clin Immunol</em>{' '}
          2016;138:359–366; 11. Busse PJ, et al. <em>J Allergy Clin Immunol Pract</em> 2021;9:132–150; 12. Busse PJ &{' '}
          Christiansen SC. <em>N Engl J Med</em> 2020;382:1136–1148; 13. Lumry WR. <em>Am J Manag Care</em>{' '}
          2013:19;S103-S110; 14. Ghazi A & Grant JA. <em>Biologics</em> 2013;7:103–113; 15. Gower RG, et al.{' '}
          <em>World Allergy Organ</em> J 2011;4:S9–S21; 16. Maurer M, et al. <em>Allergy</em> 2018;73:1575–1596.
        </>
      </References>
    </Wrapper>
  );
};

About.propTypes = {};

export default About;
