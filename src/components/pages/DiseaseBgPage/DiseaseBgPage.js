import React from 'react';
import styled from 'styled-components';

import Video from '../../shared/Video/Video';
import VideoSection from '../../shared/VideoSection';
import Hero from './Hero';
import PhysiologySection from './PhysiologySection/PhysiologySection';
import SymptomMap from './SymptomMap/SymptomMap';
import Title from './Title';

const Wrapper = styled.div``;

const DiseaseBgPage = props => {
  return (
    <Wrapper {...props}>
      <Hero
        media={
          <Video
            circlePosition="bottom-right"
            circleSize="lg"
            id="video-1"
            thumbnail="https://via.placeholder.com/853x528"
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
        <VideoSection.Content style={{maxWidth: 385}}>
          <h2>
            HAE etiology and
            <br />
            burden of disease
          </h2>
          <p>
            Hereditary angioedema (HAE) can be divided into three types: HAE Type I, HAE Type II, and HAE with normal C1
            inhibitor (C1-INH).<sup>1</sup>
          </p>
          <p>
            The estimated prevalence of HAE is 1:50,000 globally but is likely to be higher due to delayed diagnosis/
            misdiagnosis.<sup>2–4</sup>
          </p>
          <p>
            HAE is a debilitating illness that can have long-term effects and substantially impact a patient’s quality
            of life.<sup>5,6</sup>
          </p>
          <p>Please watch video 1 to learn more about HAE!</p>
        </VideoSection.Content>
      </Hero>
      <PhysiologySection>
        <h2>Pathophysiology of HAE</h2>
        <VideoSection
          media={
            <Video
              circleColor="yellow"
              circlePosition="bottom-left"
              id="video-2"
              thumbnail="https://via.placeholder.com/588x364"
            />
          }
        >
          <VideoSection.Content>
            <p>
              C1-INH is a naturally occurring protein that inhibits plasma kallikrein, a key mediator of inflammation.
              <sup>7–10</sup>
            </p>

            <p>
              C1-INH deficiency results in uncontrolled kallikrein activity, leading to increased generation of the
              vasoactive peptide bradykinin.<sup>7–10</sup>
            </p>

            <p>Decreased or dysfunctional C1-INH impacts the kallikrein–kinin system.</p>

            <p>Please watch video 2 to learn about the role of C1-INH in more detail!</p>
          </VideoSection.Content>
        </VideoSection>
        <VideoSection
          media={
            <Video
              circleColor="blue"
              circlePosition="bottom-right"
              id="video-3"
              thumbnail="https://via.placeholder.com/588x364"
            />
          }
          mediaLeft={false}
        >
          <VideoSection.Content>
            <p>
              Cleavage of high molecular weight kininogen by plasma kallikrein results in generation of bradykinin.
              <sup>11</sup>
            </p>

            <p>
              Bradykinin has been shown to be elevated during HAE attacks and is responsible for edema formation and the
              related clinical signs and symptoms of swelling and pain.<sup>12</sup>
            </p>

            <p>Please watch video 3 for further information about the role of plasma kallikrein in HAE!</p>
          </VideoSection.Content>
        </VideoSection>
      </PhysiologySection>
      <SymptomMap>
        <h2>Symptom map</h2>
        <p>
          Angioedema attacks vary in location, frequency, duration, and severity,13 and are often painful,
          unpredictable, debilitating, and sometimes life-threatening.5
        </p>
      </SymptomMap>
      <VideoSection media={<div style={{backgroundColor: 'red', height: 500}} />} mediaLeft={false}>
        <div style={{backgroundColor: 'green', height: 500}} />
      </VideoSection>
      <VideoSection media={<div style={{backgroundColor: 'red', height: 500}} />}>
        <div style={{backgroundColor: 'green', height: 500}} />
      </VideoSection>
    </Wrapper>
  );
};

DiseaseBgPage.propTypes = {};

export default DiseaseBgPage;
