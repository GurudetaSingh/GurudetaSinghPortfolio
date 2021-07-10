// Technologies section
import React from 'react';
import { DiPython, DiJavascript1, DiJava, DiReact, DiJqueryLogo, DiNodejsSmall, DiDatabase, DiMysql} 
from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a variety of technologies such as programming languages, front-end/back-end frameworks, and databases.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
          <DiJavascript1 size="3rem" />
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, JavaScript, Java, C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiJqueryLogo size="3rem" />
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-end/Back-End Frameworks</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Next, jQuery, Node, Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
          <DiMysql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database <br/> Technologies</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL, SQLite
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
