import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welkom bij <br />
          Ayizo Webdesign !
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
Hoe kan het kopen van een professionele   website van Ayizo jouw leven veranderen / verbeteren ? <br/> Ayizo Webdesign staat voor het beste webdesign-team van Nederland. Wij bouwen professionele sites voor u.      </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;