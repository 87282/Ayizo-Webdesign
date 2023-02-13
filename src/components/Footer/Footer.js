import React from 'react';
import {
  FooterWrapper,
  SocialIconsContainer
} from './FooterStyles';
import SocialMedia from "../SocialMedia/SocialMedia.component";
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionTitle>Contact ons</SectionTitle>
      <SectionText>U kont ons contacteren via<br/> +31619957856 of <br/>0619957856</SectionText>
      <SocialIconsContainer>
        <SocialMedia inFooter/>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
