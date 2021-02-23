import React from 'react';

import imgAbdominal from './images/abdominal.png';
import imgAbdominalExample from './images/abdominalExample.png';
import imgAbdominalExample2 from './images/abdominalExample2.png';
import imgFaceSwelling from './images/faceSwelling.png';
import imgFaceSwellingExample from './images/faceSwellingExample.png';
import imgFaceSwellingExample2 from './images/faceSwellingExample2.png';
import imgFeetSwelling from './images/feetSwelling.png';
import imgFeetSwellingExample from './images/feetSwellingExample.png';
import imgGenitals from './images/genitals.png';
import imgHandSwelling from './images/handSwelling.png';
import imgHandSwellingExample from './images/handSwellingExample.png';
import imgLayngeal from './images/layngeal.png';
// import imgNeck from './images/neck.png';
import imgRash from './images/rash.png';
import imgTrunk from './images/trunk.png';
// IMG SIZE 280 X 677

const skinSwelling = {
  description: (
    <>
      <p>
        <span className="accent">Skin swelling</span>, most{' '}
        <span className="accent">commonly affects the extremities</span> (usually{' '}
        <span className="accent">asymmetrically</span>)<sup>14</sup> and is the defining feature of HAE in the vast
        majority of patients. Upper extremities are affected more than lower extremities, followed by the face
        (characterized by generalized swelling of facial features), genitals, and, more rarely, the trunk. Skin edema in
        HAE is nonpitting and nonpruritic; blisters and compartment syndromes may accompany particularly severe cases.
      </p>

      <p>
        Skin edema in HAE is <span className="accent">nonpitting and nonpruritic</span>; blisters and compartment
        syndromes may accompany particularly severe cases.
      </p>

      <p>
        Typically, only one site is affected at onset, with edema gradually spreading before receding over a period of
        days.
      </p>

      <p>
        Approximately one-third of cutaneous HAE attacks are preceded by{' '}
        <span className="accent">erythema marginatum</span>, a nonpruritic, serpiginous rash that produces a map-like
        pattern on the skin. This symptom occurs more frequently in pediatric patients and is a{' '}
        <span className="accent">potential diagnostic hindrance</span>, as it can be{' '}
        <span className="accent">mistaken for similar rashes</span> accompanying childhood viral or bacterial illnesses
        or may be misdiagnosed as urticaria.
      </p>
    </>
  ),
  descriptionImage: {
    caption: (
      <>
        Image of erythema marginatum from Gower et al. 2011.<sup>15</sup>
      </>
    ),
    src: imgRash
  },
  title: (
    <>
      Skin swelling<sup>13</sup>
    </>
  )
};

export default [
  {
    body: imgAbdominal,
    color: 'blue',
    description: (
      <>
        <p>
          <strong className="accent">Recurrent abdominal pain</strong> resulting from edema of the gastrointestinal wall
          is <strong className="accent">frequently reported</strong> in patients with HAE.
        </p>

        <p>
          Symptoms can range from mild, intermittent abdominal discomfort to severe pain accompanied by vomiting and/or
          diarrhea. Cases of hypovolemic shock resulting from fluid loss, plasma extravasation, and vasodilation have
          been described in severe abdominal attacks.
        </p>

        <p>
          <strong className="accent">Abdominal episodes of HAE can mimic a number of other conditions</strong>,
          including gastroenteritis, acute appendicitis, mesenteric lymphadenitis, and intussusception,{' '}
          <strong className="accent">which can lead to unnecessary emergency abdominal surgery.</strong>
        </p>

        <p>
          <strong className="accent">Abdominal ultrasound and computer-assisted tomography</strong> scans help with the{' '}
          <strong className="accent">differential diagnosis</strong> by detecting free peritoneal fluid, edematous
          intestinal mucosa, and liver structure abnormalities, but these signs are not clearly specific to angioedema.
        </p>
      </>
    ),
    exampleImages: [imgAbdominalExample, imgAbdominalExample2],
    // exampleNote:
    //   'These are not real patients but actors with prosthetic make-up. Takeda owns the rights to these images.',
    title: (
      <>
        Abdominal attacks<sup>13</sup>
      </>
    ),
    x: '41.2%',
    y: '35%'
  },
  {
    body: imgLayngeal,
    color: 'yellow',
    description: (
      <>
        <p>
          Laryngeal edema is a <strong className="accent">rare</strong> but potentially{' '}
          <strong className="accent">fatal</strong> clinical manifestation of HAE.{' '}
        </p>

        <p>
          While less than 1% of all swelling episodes involve the larynx,{' '}
          <strong className="accent">
            approximately half of all patients with HAE have a laryngeal attack at some point in their lives
          </strong>
          .
        </p>

        <p>
          <strong className="accent">Pediatric patients present a particular diagnostic challenge</strong> because
          laryngeal edema may be <strong className="accent">misdiagnosed</strong> as allergic asthma or epiglottitis.
          Further, compared with adults, asphyxiation in children may{' '}
          <strong className="accent">develop more quickly due to their smaller airway diameter.</strong>
        </p>

        <p>
          An important diagnostic feature is that{' '}
          <strong className="accent">
            standard medications for alleviating acute airway edema in children are generally ineffective
          </strong>{' '}
          for laryngeal attacks.
        </p>

        <p>
          Clinical symptoms of laryngeal edema include <strong className="accent">voice changes</strong> (such as
          hoarseness or deepening of the voice), a feeling of <strong className="accent">tightness</strong> or a lump in
          the throat, and <strong className="accent">dysphagia</strong>. Patients with advanced swelling often have{' '}
          <strong className="accent">aphonia</strong> (loss of voice) and{' '}
          <strong className="accent">fear of asphyxiation</strong> with substantial anxiety. Upper airway obstruction is
          usually caused by laryngeal and glottal edema.
        </p>

        <p>
          The time from <strong className="accent">onset of laryngeal edema to maximal swelling</strong> has been
          reported to range from <strong className="accent">8 to 12 hours</strong> but may be shorter or considerably
          longer.
        </p>
      </>
    ),
    title: (
      <>
        Laryngeal attacks<sup>13</sup>
      </>
    ),
    x: '41%',
    y: '10.2%'
  },
  {
    ...skinSwelling,
    body: imgFeetSwelling,
    color: 'green',
    exampleImages: [imgFeetSwellingExample],
    exampleNote: 'Swelling of the feet is a type of skin swelling.',
    x: '78%',
    y: '86.8%'
  },
  {
    ...skinSwelling,
    body: imgFaceSwelling,
    color: 'green',
    exampleImages: [imgFaceSwellingExample, imgFaceSwellingExample2],
    exampleNote: 'Facial swelling is a type of skin swelling patients.',
    x: '64.6%',
    y: -16
  },
  {
    ...skinSwelling,
    body: imgHandSwelling,
    color: 'green',
    exampleImages: [imgHandSwellingExample],
    exampleNote: 'Swelling of the hands is a type of skin swelling.',
    x: -30,
    y: '44%'
  },
  {
    ...skinSwelling,
    body: imgGenitals,
    color: 'green',
    exampleNote: 'Swelling of the genitals is a type of skin swelling.',
    x: '42%',
    y: '48.2%'
  },
  {
    ...skinSwelling,
    body: imgTrunk,
    color: 'green',
    exampleNote: 'Swelling of the trunk and back is a type of skin swelling.',
    x: '26%',
    y: '19.6%'
  }
  // {
  //   ...skinSwelling,
  //   body: imgNeck,
  //   color: 'green',
  //   exampleNote: 'Swelling of the neck is a type of skin swelling.',
  //   x: '64.2%',
  //   y: '9%'
  // }
];
