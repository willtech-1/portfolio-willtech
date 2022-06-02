import React from "react";
import {
  SkillsSec,
  SkillsHeader,
  Underline,
  SkillsContainer,
  SkillsWrapper,
  TechnicalSkills,
  TechSkillsHeader,
  TechSkillsIcon,
  TechSkillsText,
  BackendSkills,
  BackendSkillsIcon,
  BackendSkillsHeader,
  BackendSkillsText,
  OtherSkills,
  OtherSkillsHeader,
  OtherSkillsIcon,
  OtherSkillsText,
  HeaderUnderLine
} from "./Skills.elements";
const Skills = () => {
  return (
    <>
      <SkillsSec id="skills">
        <SkillsHeader>
          Skills
          <Underline />
        </SkillsHeader>
        <SkillsContainer>
          <SkillsWrapper>
            <TechnicalSkills>
            <TechSkillsIcon />
              <TechSkillsHeader>
                Technical Skills
                </TechSkillsHeader>
              <HeaderUnderLine />
              <TechSkillsText>HTML5</TechSkillsText>
              <TechSkillsText>CSS3</TechSkillsText>
              <TechSkillsText>JAVASCRIPT</TechSkillsText>
              <TechSkillsText>REACT</TechSkillsText>
            </TechnicalSkills>

            <BackendSkills>
            <BackendSkillsIcon />
              <BackendSkillsHeader>
                
              Skills (Still Learning)

              </BackendSkillsHeader>
              <HeaderUnderLine />
              <BackendSkillsText>GATSBY</BackendSkillsText>
              <BackendSkillsText>NODEJS</BackendSkillsText>
              <BackendSkillsText>ESPRESS</BackendSkillsText>
              <BackendSkillsText>MONGODB</BackendSkillsText>
            </BackendSkills>

            <OtherSkills>
            <OtherSkillsIcon />
              <OtherSkillsHeader>
                
                Other Skills and Tools
              </OtherSkillsHeader>
              <HeaderUnderLine />
              <OtherSkillsText>STYLED COMPONENTS</OtherSkillsText>
              <OtherSkillsText>MATERIAL UI</OtherSkillsText>
              <OtherSkillsText>GITHUB</OtherSkillsText>
              <OtherSkillsText>VS CODE</OtherSkillsText>
              
            </OtherSkills> 
          </SkillsWrapper>
        </SkillsContainer>
      </SkillsSec>
    </>
  );
};

export default Skills;
