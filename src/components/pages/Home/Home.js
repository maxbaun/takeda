import React from 'react';

import routes from '../../../routes';
import scrollToElement from '../../../utils/scrollToElement';
import References from '../../shared/References/References';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import SymptomQuiz from '../../shared/SymptomQuiz';
// import PropTypes from 'prop-types'
import Hero from './Hero';
import PatientExamplesSection from './PatientExamplesSection';
import RiskSection from './RiskSection';

const Home = () => {
  return (
    <div>
      <Hero
        ctaText="Start"
        ctaUrl={routes.Simulator}
        onScrollToClick={() => scrollToElement('riskMisdiagnosisSection')}
      >
        <h1>HAE Simulator</h1>
        <p>
          Hereditary angioedema (HAE) is a rare but debilitating and life-threatening condition. Explore the symptoms of
          HAE. Use our filter to experience a facial attack from a patient’s perspective.
        </p>
        <small>
          <em>
            You must have a webcam in order to use this tool. Images are not saved or stored in this application, so
            please ensure you download your image.
          </em>
        </small>
      </Hero>
      <RiskSection id="riskMisdiagnosisSection">
        <SectionHeader>
          <img src={`${process.env.PUBLIC_URL}/img/icon-sandtimer.png`} />
          <h2>Misdiagnosis / delayed diagnosis</h2>
          <p className="lead">
            HAE is <strong className="accent">under-recognized</strong> and often{' '}
            <strong className="accent">misdiagnosed</strong>, resulting in significant morbidity and mortality.
            <sup>2</sup>
          </p>
          <p>
            The <strong className="accent">rarity</strong> and <strong className="accent">variability</strong> of HAE
            symptoms makes diagnosis challenging among non-HAE specialists.<sup>7</sup> Episodes of swelling involving
            the skin are frequently mistaken as allergic reactions, and abdominal attacks are mistaken for appendicitis
            or irritable bowel syndrome.<sup>2</sup> A misdiagnosis can result in{' '}
            <strong className="accent">
              delayed diagnosis, inadequate treatment, and unnecessary surgical procedures
            </strong>
            , all of which impact patients’ <strong className="accent">quality of life</strong>.<sup>7</sup>
          </p>
          <ul>
            <li className="green">
              Many patients experience long delays (over 10 years) between the onset of symptoms and diagnosis
              <sup>8,9</sup>
            </li>
            <li className="blue">
              Diagnostic <strong className="accent">delays vary considerably</strong> between countries and according to
              the decade of birth<sup>9,10</sup>
            </li>
            <li className="red">
              Most patients are diagnosed by specialists in adulthood, despite symptoms{' '}
              <strong className="accent">typically presenting in childhood or adolescence</strong>
              <sup>11</sup>
            </li>
            <li className="yellow">
              Laryngeal edema can cause <strong className="accent">fatal asphyxiation</strong>.<sup>1</sup> Therefore, a
              timely diagnosis and access to treatment is vital to prevent morbidity and mortality<sup>12</sup>
              <ul>
                <li className="empty blue">
                  The{' '}
                  <strong className="accent">
                    lifespan of individuals with undiagnosed HAE who die from laryngeal attacks
                  </strong>{' '}
                  is on average <strong className="accent">31 years shorter</strong> than undiagnosed patients with HAE
                  who die from other causes<sup>4</sup>
                </li>
              </ul>
            </li>
          </ul>
        </SectionHeader>
      </RiskSection>
      <PatientExamplesSection
        ctaText={<>Explore More HAE Information</>}
        ctaUrl="/more-info"
        examples={[
          {
            after: `${process.env.PUBLIC_URL}/img/patient-examples/1-after.png`,
            before: `${process.env.PUBLIC_URL}/img/patient-examples/1-before.png`
          },
          {
            after: `${process.env.PUBLIC_URL}/img/patient-examples/2-after.png`,
            before: `${process.env.PUBLIC_URL}/img/patient-examples/2-before.png`
          },
          {
            after: `${process.env.PUBLIC_URL}/img/patient-examples/1-after.png`,
            before: `${process.env.PUBLIC_URL}/img/patient-examples/1-before.png`
          },
          {
            after: `${process.env.PUBLIC_URL}/img/patient-examples/2-after.png`,
            before: `${process.env.PUBLIC_URL}/img/patient-examples/2-before.png`
          }
        ]}
        note="*Photos of symptoms are portrayed by actors"
      >
        <SectionHeader>
          <h2>Patient Examples</h2>
          <p>
            HAE is a rare genetic disorder characterized by{' '}
            <strong className="accent">recurrent episodes of localized subcutaneous</strong> or mucosal swelling,
            typically involving the{' '}
            <strong className="accent">
              arms, legs, hands, feet, bowels, genitalia, trunk, face, tongue, or larynx
            </strong>
            .<sup>1,13</sup>
          </p>
        </SectionHeader>
      </PatientExamplesSection>
      <SymptomQuiz />
      <References>
        1. Lumry WR. <em>Am J Manag Care</em> 2013;19:S111–S118; 2. Banerji A. <em>Ann Allergy Asthma Immunol</em>{' '}
        2013;111:329–336; 3. Longhurst HJ & Bork K. <em>Br J Hosp Med</em> (Lond) 2019;80:391–398; 4. Bork K, et al.{' '}
        <em>J Allergy Clin Immunol</em>
        2012;130:692–697; 5. Agostoni A, et al. <em>J Allergy Clin Immunol</em> 2004;114:S51–S131; 6. Bork K, et al.{' '}
        <em>Am J Gastroenterol</em> 2006;101:619–627; 7. Zanichelli A, et al. <em>Ann Allergy Asthma Immunol</em>{' '}
        2016;117:394–39; 8. Banerji A, et al. <em>Allergy Asthma Proc</em> 2018;39:212–223; 9. Schöffl C, et al.{' '}
        <em>J Dtsch Dermatol Ges</em> 2019;17:416–423; 10. Zanichelli A, et al. <em>Clin Trans Allergy</em> 2018;8:42;
        11. Grumach AS, et al. <em>J Allergy Clin Immunol Pract</em>
        2019;7:1078–1080; 12. Betschel S, et al. <em>Allergy Asthma Clin Immunol</em> 2019;15:72; 13. Zuraw BL.{' '}
        <em>N Engl J Med</em>
        2008;359:1027–1036.
      </References>
    </div>
  );
};

Home.propTypes = {};

export default Home;
