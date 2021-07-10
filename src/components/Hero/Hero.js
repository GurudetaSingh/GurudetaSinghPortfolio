// Hero section
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi. I'm <br />
          Gurudeta Singh 
        </SectionTitle>
        <SectionText>
        Welcome to my portfolio. Feel free to explore and learn more about me, the projects I have worked on, and the technologies I use.
        </SectionText>

        {/* Contact button */}
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href="#contact";}}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;