import React from "react";
import { Link } from "react-scroll";
import {
  Container,
  Button,
  ResumeButton,
  RbtnContainer,
  BtnContainer,
  BtnWrapper
} from "../../globalStyles";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  IconContainer,
  IconWrapper,
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  FacebookIcon,
  TechTextContainer,
  TechTextWrapper,
  HtmlText,
  CssText,
  JavascriptText,
  ReactText,
} from "./InfoSection.elements";
import cv from '../../images/Aphile\'s.CV.pdf'

const InfoSection = ({
  buttonLabel,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headLine,
  description,
  primary,
  primaryContact,
  img,
  alt,
  start,
  htmlText,
  cssText,
  javascriptText,
  reactText,
  htmlColor,
  cssColor,
  jsColor,
  reactColor,
  exist,
  resumeBtn,
  resumeButtonLabel,
  RprimaryContact,
}) => {


  return (
    <>
      <InfoSec lightBg={lightBg} id='home'>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <BtnContainer >
                  <BtnWrapper>
                    <Link to="contact">
                      <Button big fontBig primaryContact={primaryContact}>
                        {buttonLabel}
                      </Button>
                    </Link>

                    <RbtnContainer resumeBtn={resumeBtn} >
                      <a href={cv} download="Aphile's.CV.pdf">
                        <ResumeButton
                          fontBig
                          big
                          RprimaryContact={RprimaryContact}
                        >
                          {resumeButtonLabel}
                        </ResumeButton>
                      </a>
                    </RbtnContainer>
                  </BtnWrapper>
                </BtnContainer>

                <IconContainer exist={exist} >
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
                </IconContainer>
                <TechTextContainer  id="about">
                  <TechTextWrapper>
                    <HtmlText htmlColor={htmlColor} >{htmlText}</HtmlText >
                    <CssText cssColor={cssColor}>{cssText}</CssText>
                    <JavascriptText jsColor={jsColor}>
                      {javascriptText}
                    </JavascriptText>
                    <ReactText reactColor={reactColor}>{reactText}</ReactText>
                  </TechTextWrapper>
                </TechTextContainer>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
