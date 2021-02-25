import React from 'react';
import styled from 'styled-components';

import Accent from '../../shared/Accent/Accent';
import HaeConnectCta from '../../shared/HaeConnectCta';
import InViewSection from '../../shared/InViewSection';
import References from '../../shared/References';
import SymptomQuiz from '../../shared/SymptomQuiz';
import Video from '../../shared/Video';
import VideoSection from '../../shared/VideoSection';
import ClinicalManagement from './ClinicalManagement';
import imgVideoThumb from './HAE-Management-Video-1-2.jpg';
import ImpactOnLife from './ImpactOnLife';

const Wrapper = styled.div``;

const ManagementPage = () => {
  return (
    <Wrapper>
      <ClinicalManagement
        data={[
          {
            color: 'red',
            description: (
              <>
                <h5>
                  <strong>Personalized care</strong>
                </h5>

                <p>
                  As recommended by clinical guidelines, the management of hereditary angioedema (HAE) should be
                  <Accent> individualized</Accent> with <Accent> treatment tailored</Accent> to each patient’s medical
                  needs, life circumstances, and preferences as well as tolerance of and response to specific
                  medications.
                  <sup>1,2</sup> Management plans must be <Accent> adjusted over time</Accent> to address changes in HAE
                  symptoms or other concomitant factors.
                  <sup>1</sup>
                </p>
              </>
            ),
            title: 'Personalized care',
            video: {
              circleColor: 'yellow',
              circlePosition: 'bottom-left',
              id: 'video-personalized-care',
              caption: (
                <>
                  Personalized treatment approach:
                  <br />
                  insights from healthcare professionals
                </>
              ),
              disclaimer: (
                <>
                  Copyright &copy; 2021 Takeda Pharmaceutical Company Limited. All rights reserved. Takeda and the
                  Takeda logo are registered trademarks of Takeda Pharmaceutical Company Limited.
                </>
              ),
              src: 'https://players.brightcove.net/2299575749001/RxN6OjUic_default/index.html?videoId=6232479553001',
              thumbnail: imgVideoThumb
            }
          },
          {
            centered: true,
            color: 'yellow',
            description: (
              <>
                <h5>
                  <strong>Short-term prophylaxis</strong>
                </h5>
                <p>
                  Guidelines recommend short-term prophylaxis prior to <Accent> medical procedures</Accent> or other{' '}
                  <Accent>events at high risk of triggering HAE attacks</Accent>.<sup>1–3</sup>
                </p>
              </>
            ),
            title: 'Short-term prophylaxis'
          },
          {
            centered: true,
            color: 'green',
            description: (
              <>
                <h5>
                  <strong>Long-term prophylaxis management</strong>
                </h5>
                <p>
                  Long-term prophylaxis (LTP) may be considered for patients with <Accent>recurrent episodes</Accent> of
                  angioedema to <Accent>reduce the frequency</Accent>, <Accent>duration and severity of attacks</Accent>
                  .<sup>2,3</sup> Patients should be <Accent>evaluated for LTP at every visit</Accent>, taking disease
                  burden and patient preference into consideration.<sup>2</sup> The{' '}
                  <Accent>increased availability</Accent> of LTP is anticipated to shift the management paradigm towards
                  an <Accent>expanded adoption</Accent> of LTP.
                  <sup>1</sup>
                </p>
              </>
            ),
            title: 'Long-term prophylaxis'
          },
          {
            centered: true,
            color: 'blue',
            description: (
              <>
                <h5>
                  <strong>On-demand therapy</strong>
                </h5>
                <p>
                  <Accent>Every patient</Accent> diagnosed with HAE must have{' '}
                  <Accent> constant reliable access to effective on-demand therapy</Accent> without exception due to the{' '}
                  <Accent>unpredictable and life-threatening nature</Accent> of HAE attacks.<sup>1–3</sup>
                </p>
                <p>
                  On-demand treatment of attacks is most effective when <Accent>administered early</Accent> after attack{' '}
                  onset.<sup>1</sup> Early treatment may result in{' '}
                  <Accent>rapid symptom resolution, reducing the morbidity and mortality</Accent> associated with HAE{' '}
                  attacks.<sup>1,3</sup> The key to reducing HAE morbidity is to arrest the progression of swelling to{' '}
                  <Accent>prevent disruption to a patient’s life</Accent>.<sup>1</sup>
                </p>
              </>
            ),
            title: 'On-demand therapy'
          }
        ]}
        pageTitle={
          <h1>
            Management
            <br />
            of HAE
          </h1>
        }
        title={
          <h2>
            Clinical
            <br />
            Management
          </h2>
        }
      />
      <HaeConnectCta />

      <InViewSection>
        <ImpactOnLife>
          <VideoSection
            media={
              <Video
                caption="Assessment of QoL in patients with HAE: unmet needs"
                circleColor="blue"
                circlePosition="bottom-right"
                circleSize="lg"
                className="fade-in-media"
                disclaimer={
                  <>
                    Copyright &copy; 2021 Takeda Pharmaceutical Company Limited. All rights reserved. Takeda and the
                    Takeda logo are registered trademarks of Takeda Pharmaceutical Company Limited.
                  </>
                }
                id="video-2"
                src="https://players.brightcove.net/2299575749001/RxN6OjUic_default/index.html?videoId=6232484369001"
                thumbnail={imgVideoThumb}
                thumbnailRatio="853:528"
              />
            }
          >
            <VideoSection.Content className="fade-in-content bottom">
              <h2>Impact on quality of life</h2>
              <p>
                If poorly managed, patients may report a significant impact on quality of life (QoL); a{' '}
                <strong className="accent">better understanding</strong> of these impairments may{' '}
                <strong className="accent">aid the clinical management</strong> of patients with HAE.<sup>1</sup>
              </p>

              <p>
                Healthcare providers should <strong className="accent">routinely assess QoL</strong> in patients with
                HAE using validated tools to optimize HAE management.<sup>3</sup>
              </p>
            </VideoSection.Content>
          </VideoSection>
        </ImpactOnLife>
      </InViewSection>

      <SymptomQuiz />
      <References>
        <>
          1. Busse PJ, et al. <em>J Allergy Clin Immunol Pract</em> 2021;9:132–150; 2. Maurer M, et al. <em>Allergy</em>{' '}
          2018;73:1575–1596; 3. Betschel S, et al. <em>Allergy Asthma Clin Immunol</em> 2019;15:72.
        </>
      </References>
    </Wrapper>
  );
};

export default ManagementPage;
