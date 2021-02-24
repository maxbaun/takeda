import React from 'react';

import routes from '../../../../routes';

const data = [
  {
    answer: (
      <p>
        Attacks can occur in all these locations.<sup>1</sup> Less common but clinically important manifestations of HAE
        may include neurological (such as severe headache), pulmonary (such as shortness of breath), renal, urinary
        (such as pain on urination), and musculoskeletal symptoms (such as pain in the shoulder joints).
        <sup>1</sup>
      </p>
    ),
    allRequired: true,
    correctOptions: ['Hands', 'Larynx', 'Feet', 'Abdomen', 'Face', 'Genitalia'],
    options: ['Hands', 'Larynx', 'Feet', 'Abdomen', 'Face', 'Genitalia'],
    readMoreUrl: routes.About,
    references: (
      <>
        1. Lumry WR. <em>Am J Manag Care</em> 2013:19;S103-S110; 2. Bygum A, et al. <em>Acta Derm Venereol</em>{' '}
        2015;95:706–710; 3. Banerji A. <em>Ann Allergy Asthma Immunol</em> 2013;111:329–336.
      </>
    ),
    question: 'Where in the body can HAE attacks happen?'
  },
  {
    answer: (
      <p>
        During a HAE attack, patients may experience disfiguration, severe pain, and asphyxiation from laryngeal
        swelling.<sup>2</sup> If untreated, patients average approximately one HAE attack every 1–2 weeks, with episodes
        lasting 2–5 days, but the frequency, duration, and severity are variable.<sup>3</sup>
      </p>
    ),
    allRequired: true,
    correctOptions: ['Pain', 'Swelling', 'Asphyxiation'],
    options: ['Pain', 'Numbness', 'Swelling', 'Confusion', 'Asphyxiation'],
    readMoreUrl: routes.About,
    references: (
      <>
        1. Lumry WR. <em>Am J Manag Care</em> 2013:19;S103-S110; 2. Bygum A, et al. <em>Acta Derm Venereol</em>{' '}
        2015;95:706–710; 3. Banerji A. <em>Ann Allergy Asthma Immunol</em> 2013;111:329–336.
      </>
    ),
    question: 'What are some of the symptoms of a HAE attack?'
  },
  {
    answer: (
      <p>
        The following can trigger a HAE attack: accident/injury/trauma, disease/illness, physical activity/exercise,
        stress, pregnancy, certain medications (including hormone therapy), anxiety, and fear.
        <sup>2</sup>
        Additionally, there may be no known trigger (idiopathic).<sup>2</sup>
      </p>
    ),
    allRequired: true,
    correctOptions: ['Stress', 'Underlying conditions', 'Trauma', 'Medication', 'Estrogen'],
    options: [
      'Food Allergies',
      'Low Vitamin D Levels',
      'Stress',
      'Underlying conditions',
      'Trauma',
      'Medication',
      'Estrogen'
    ],
    readMoreUrl: routes.About,
    references: (
      <>
        1. Lumry WR. <em>Am J Manag Care</em> 2013:19;S103-S110; 2. Bygum A, et al. <em>Acta Derm Venereol</em>{' '}
        2015;95:706–710; 3. Banerji A. <em>Ann Allergy Asthma Immunol</em> 2013;111:329–336.
      </>
    ),
    question: 'Based on evidence reported in the literature, what can trigger a HAE attack?'
  },
  {
    answer: (
      <p>
        The impact of HAE is multifaceted. HAE can affect multiple aspects throughout a patient’s life, including
        psychological factors, such as anxiety about passing on the condition to their children, and physical
        limitations on exercise.<sup>2,3</sup> HAE can impact career and education through factors such as absenteeism
        affecting professional development and difficulty explaining their situation to employers and colleagues.
        <sup>2,3</sup> There can also be a financial impact, including travel expenses for appointments, and time spent
        hospitalized and out of employment.<sup>2,3</sup>
      </p>
    ),
    allRequired: true,
    correctOptions: ['Psychological', 'Social', 'Socioeconomic'],
    options: ['Psychological', 'Social', 'Fertility', 'Socioeconomic'],
    readMoreUrl: routes.About,
    references: (
      <>
        1. Lumry WR. <em>Am J Manag Care</em> 2013:19;S103-S110; 2. Bygum A, et al. <em>Acta Derm Venereol</em>{' '}
        2015;95:706–710; 3. Banerji A. <em>Ann Allergy Asthma Immunol</em> 2013;111:329–336.
      </>
    ),
    question: 'How can HAE impact a patient’s life in the long term?'
  }
];

export default data;
