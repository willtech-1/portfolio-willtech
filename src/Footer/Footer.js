import React from "react";
import {
  FooterContainer,
  FooterText,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  FooterWrapper,
  IconWrapper,
  GithubIcon,
} from "./Footer.elements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <IconWrapper>
            <a href="https://github.com/willtech-1">
              <GithubIcon />
            </a>
          </IconWrapper>

          <IconWrapper>
            <a href="https://www.linkedin.com/in/aphilentando/">
              <LinkedInIcon />
            </a>
          </IconWrapper>

          <IconWrapper>
            <a href="https://twitter.com/">
              <TwitterIcon />
            </a>
          </IconWrapper>

          <IconWrapper>
            <a href="https://facebook.com/">
              <FacebookIcon />
            </a>
          </IconWrapper>
          <FooterText>©2022 ALL RIGHTS RESERVED</FooterText>
        </FooterWrapper>
        
      </FooterContainer>
     
    </>
  );
};

export default Footer;
