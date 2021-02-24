import React from 'react';

const data = [
  {
    description: (
      <>
        <p>
          <strong>Presentation:</strong>Characterized by generalized swelling of facial features including the eyes and
          lips<sup>1</sup>
        </p>
        <p>
          <strong>Impact:</strong>Facial swelling is <span className="accent">commonly misdiagnosed</span> and treated
          as an allergic reaction.<sup>2</sup> However, patients with HAE do not respond to medications used to treat
          allergic reactions such as corticosteroids, antihistamines, and adrenaline.<sup>3</sup>
        </p>
      </>
    ),
    title: 'Facial swelling'
  },
  {
    description: (
      <>
        <p>
          <strong>Presentation:</strong>Swelling in the throat, or a laryngeal attack, happens{' '}
          <span className="accent">less frequently</span> than other attacks, but it is the{' '}
          <span className="accent">most fatal clinical manifestation</span> of HAE.<sup>1</sup> Laryngeal attacks are{' '}
          <span className="accent">life-threatening</span> as they can lead to asphyxiation if untreated.<sup>1</sup>
        </p>
        <p>
          <strong>Impact:</strong>The lifespan of individuals with <span className="accent">undiagnosed HAE</span> who
          die from laryngeal attacks is on average{' '}
          <span className="accent">
            <span style={{fontWeight: 800}}>~</span>31 years shorter
          </span>{' '}
          than undiagnosed patients who die from other causes.<sup>4</sup>
        </p>
      </>
    ),
    title: 'Laryngeal attack'
  },
  {
    description: (
      <>
        <p>
          <strong>Presentation:</strong>HAE attacks in the abdomen can cause{' '}
          <span className="accent">mild to severe pain</span>, as well as vomiting and/or diarrhea.<sup>5</sup>{' '}
          Abdominal attacks can also occur <span className="accent">without visible swelling</span>.<sup>6</sup>
        </p>
        <p>
          <strong>Impact:</strong>When HAE is undiagnosed, abdominal attacks can be misdiagnosed as other medical
          emergencies and lead to <span className="accent">unnecessary surgical procedures</span>.<sup>5</sup>
        </p>
      </>
    ),
    title: 'Abdominal swelling'
  },
  {
    description: (
      <>
        <p>
          <strong>Presentation:</strong>Skin swelling, most commonly affecting the extremities, is the defining feature
          of HAE in the vast majority of patients—upper extremities more than lower—followed by the face and genitals
          and, more rarely, the trunk and neck.<sup>1</sup>
        </p>
        <p>
          <strong>Impact:</strong>Attacks affecting the hands and feet can impair a patient’s ability to work and
          perform daily activities.<sup>2</sup>
        </p>
      </>
    ),
    title: 'Extremity Swelling'
  }
];

export default data;
