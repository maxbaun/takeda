import React from 'react';
import styled from 'styled-components';

import HaeConnectCta from '../../shared/HaeConnectCta';
import References from '../../shared/References';
import SymptomQuiz from '../../shared/SymptomQuiz';
import Video from '../../shared/Video';
import VideoSection from '../../shared/VideoSection';
import ClinicalManagement from './ClinicalManagement';
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
                <p>
                  <strong>
                    Personalized care<sup>1-3</sup>
                  </strong>
                </p>

                <p>
                  As recommended by clinical guidelines, the management of hereditary angioedema (HAE) should be
                  individualized with treatment tailored to each patient’s medical needs, life circumstances, and
                  preferences as well as tolerance of and response to specific medications.<sup>1,2</sup> Management
                  plans must be adjusted over time to address changes in HAE symptoms or other concomitant factors.
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
              src: 'https://www.youtube.com/embed/vR4HIUdE7ak',
              thumbnail: 'https://via.placeholder.com/588x364'
            }
          },
          {
            color: 'yellow',
            description: (
              <>
                <p>
                  <strong>
                    Short-term or event-based prevention<sup>1–3</sup>
                  </strong>
                </p>
                <p>
                  Guidelines recommend short-term prophylaxis prior to medical procedures or other events at high risk
                  of triggering HAE attacks.
                </p>
              </>
            ),
            title: 'Short-term prophylaxis'
          },
          {
            color: 'green',
            description: (
              <>
                <p>
                  <strong>
                    Long-term prophylaxis management<sup>1–3</sup>
                  </strong>
                </p>
                <p>
                  Long-term prophylaxis is recommended for patients who may benefit from this treatment strategy in
                  addition to on-demand treatment. Prophylactic options should be discussed with each patient, and
                  individualized factors should be taken into account.
                </p>
              </>
            ),
            title: 'Long-term prophylaxis'
          },
          {
            color: 'blue',
            description: (
              <>
                <p>
                  <strong>
                    On-demand therapy<sup>1–3</sup>
                  </strong>
                </p>
                <p>
                  Guidelines recommend that patients should have access to effective on-demand therapy. Every patient
                  diagnosed with HAE must have constant reliable access to effective acute treatment without exception
                  due to the unpredictable and life-threatening nature of HAE attacks.
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
      <ImpactOnLife>
        <VideoSection
          media={
            <Video
              circleColor="yellow"
              circlePosition="bottom-left"
              id="video-2"
              src="https://www.youtube.com/embed/vR4HIUdE7ak"
              thumbnail="https://via.placeholder.com/588x364"
            />
          }
        >
          <VideoSection.Content>
            <h2>Impact on quality of life</h2>
            <p>
              If poorly managed, patients may report a significant impact on quality of life (QoL); a better
              understanding of these impairments may aid the clinical management of patients with HAE.1{' '}
            </p>

            <p>
              Healthcare providers should routinely assess QoL in patients with HAE using validated tools to optimize
              HAE management.<sup>3</sup>
            </p>
          </VideoSection.Content>
        </VideoSection>
      </ImpactOnLife>
      <SymptomQuiz />
      <HaeConnectCta />
      <References>
        <>
          1. Busse PJ, et al. <em>J Allergy Clin Immunol Pract</em> 2020;S2213–2198:30878–3; 2. Maurer M, et al.{' '}
          <em>Allergy</em> 2018;73:1575–1596; 3. Betschel S, et al. <em>Allergy Asthma Clin Immunol</em> 2019;15:72.
        </>
      </References>
    </Wrapper>
  );
};

export default ManagementPage;
