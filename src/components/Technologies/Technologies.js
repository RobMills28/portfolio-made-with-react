import React from 'react';
import { DiPython, DiReact, DiAws } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I specialise in cloud architecture, artificial intelligence, and full-stack development
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud Architecture</ListTitle>
          <ListParagraph>
            AWS Solutions Architecture <br />
            EC2, S3, Lambda, CloudFormation
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI & Machine Learning</ListTitle>
          <ListParagraph>
            Python, PyTorch, TensorFlow <br />
            Deep Learning & Computer Vision
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Full-Stack Development</ListTitle>
          <ListParagraph>
            React, Node.js, Docker <br />
            Modern web applications
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;