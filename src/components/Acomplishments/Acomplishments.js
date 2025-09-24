import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Years Experience with AI/ML'},
  { number: 30, text: 'Projects on GitHub', },
  { number: 12, text: 'AWS Services Deployed', },
  { number: 65, text: 'Current MSc Grade Average - (Awaiting Final Result)', },
  {text: 'Passed the AWS Certified Cloud Practitioner Exam',}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Key Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}${index === 3 ? '%' : '+'}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;