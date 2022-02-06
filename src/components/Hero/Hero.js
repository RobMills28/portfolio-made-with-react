import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of this portfolio is to display projects that I have built and show skills that I have learned along the way
        </SectionText>
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/rob-mills-aa1442180/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;