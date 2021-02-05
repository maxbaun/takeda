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
                  <strong>Personalized care</strong>
                </p>

                <p>
                  As recommended by clinical guidelines, the management of hereditary angioedema (HAE) should be
                  <strong className="accent"> individualized</strong> with{' '}
                  <strong className="accent"> treatment tailored</strong> to each patient’s medical needs, life
                  circumstances, and preferences as well as tolerance of and response to specific medications.
                  <sup>1,2</sup> Management plans must be <strong className="accent"> adjusted over time</strong> to
                  address changes in HAE symptoms or other concomitant factors.
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
            centered: true,
            color: 'yellow',
            description: (
              <>
                <p>
                  <strong>
                    Short-term prophylaxis<sup>1–3</sup>
                  </strong>
                </p>
                <p>
                  Guidelines recommend short-term prophylaxis prior to{' '}
                  <strong className="accent"> medical procedures</strong> or other{' '}
                  <strong className="accent">events at high risk of triggering HAE attacks.</strong>
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
                <p>
                  <strong>Long-term prophylaxis management</strong>
                </p>
                <p>
                  Long-term prophylaxis (LTP) may be considered for patients with{' '}
                  <span className="accent">recurrent episodes</span> of angioedema to{' '}
                  <span className="accent">reduce the frequency</span>,{' '}
                  <span className="accent">duration and severity of attacks</span>.<sup>2,3</sup> Patients should be{' '}
                  <span className="accent">evaluated for LTP at every visit</span>, taking disease burden and patient
                  preference into consideration.<sup>2</sup> The increased availability of LTP is anticipated to shift
                  the management paradigm towards an <span className="accent">expanded adoption</span> of LTP.
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
                <p>
                  <strong>
                    On-demand therapy<sup>1–3</sup>
                  </strong>
                </p>
                <p>
                  Guidelines recommend that patients should have access to effective on-demand therapy.{' '}
                  <span className="accent">Every patient</span> diagnosed with HAE must have{' '}
                  <span className="accent">constant reliable access to effective acute treatment</span> without
                  exception due to the <span className="accent">unpredictable and life-threatening nature</span> of HAE
                  attacks.
                </p>
                <p>
                  On-demand treatment of attacks is most effective when{' '}
                  <span className="accent">administered early</span> after attack onset. Early treatment may result in{' '}
                  <span className="accent">rapid symptom resolution, reducing the morbidity and mortality</span>{' '}
                  associated with HAE attacks. The key to reducing HAE morbidity is to arrest the progression of
                  swelling to <span className="accent">prevent disruption to a patient’s life</span>.
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
              caption="Assessment of QoL in patients with HAE: unmet needs"
              circleColor="red"
              circlePosition="bottom-right"
              circleSize="lg"
              id="video-2"
              src="https://www.youtube.com/embed/vR4HIUdE7ak"
              thumbnail="https://via.placeholder.com/588x364"
              thumbnailRatio="853:528"
            />
          }
        >
          <VideoSection.Content>
            <h2>Impact on quality of life</h2>
            <p>
              If poorly managed, patients may report a significant impact on quality of life (QoL); a{' '}
              <strong className="accent">better understanding</strong> of these impairments may{' '}
              <strong className="accent">aid the clinical management</strong> of patients with HAE.<sup>1</sup>
            </p>

            <p>
              Healthcare providers should <strong className="accent">routinely assess QoL</strong> in patients with HAE
              using validated tools to optimize HAE management.<sup>3</sup>
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
