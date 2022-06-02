import React from "react";
import p1img from "../../projectImgs/paydebt.jpg";
import p2img from "../../projectImgs/tiguan2.jpg";
import p3img from "../../projectImgs/crypto.jpg";
import {
  ProjectsSec,
  ProjectsContainer,
  ProjectsWrapper,
  FirstProject,
  ProjectOneImg,
  ProjectOneHeader,
  ProjectOneDesc,
  TechStacks,
  ProjectOneTechStack,
  ProjectOneButtons,
  ProjectOneLive,
  ProjectOneCode,
  ProjectHeader,
  HeaderUnderline,
  ProjectOneLiveIcon,
  ProjectOneCodeIcon,
  ButtonLink,
  SecondProject,
  ThirdProject
} from "./Projects.element";
const Projects = () => {
  return (
    <>
      <ProjectsSec id="projects">
        <ProjectHeader>Featured Projects</ProjectHeader>
        <HeaderUnderline />
        <ProjectsContainer>
          <ProjectsWrapper>
            <FirstProject>
              <ProjectOneImg src={p1img} />
              <ProjectOneHeader>Credit Score Check</ProjectOneHeader>
              <ProjectOneDesc>
              Users have to enter valid South African ID.
              </ProjectOneDesc>
              <TechStacks>
                <ProjectOneTechStack>HTML5</ProjectOneTechStack>
                <ProjectOneTechStack>CSS3</ProjectOneTechStack>
                <ProjectOneTechStack>JAVASCRIPT</ProjectOneTechStack>
                <ProjectOneTechStack>REACT</ProjectOneTechStack>
              </TechStacks>
              <ProjectOneButtons>
                <ButtonLink
                  href="https://willtech-check-credit.netlify.app/"
                  target="_blank"
                >
                  <ProjectOneLive>
                    <ProjectOneLiveIcon /> LIVE
                  </ProjectOneLive>
                </ButtonLink>
                <ButtonLink
                  href="https://github.com/willtech-1/check-credit"
                  target="_blank"
                >
                  <ProjectOneCode>
                    <ProjectOneCodeIcon /> CODE
                  </ProjectOneCode>
                </ButtonLink>
              </ProjectOneButtons>
            </FirstProject>

            <SecondProject>
              <ProjectOneImg src={p2img} />
              <ProjectOneHeader>Auto-Setters Dealership</ProjectOneHeader>
              <ProjectOneDesc>
              Filter using car prices, brands, and model.
              </ProjectOneDesc>
              <TechStacks>
                <ProjectOneTechStack>HTML5</ProjectOneTechStack>
                <ProjectOneTechStack>CSS3</ProjectOneTechStack>
                <ProjectOneTechStack>JAVASCRIPT</ProjectOneTechStack>
                <ProjectOneTechStack>REACT</ProjectOneTechStack>
                <ProjectOneTechStack>CONTENTFUL HEADLESS CMS</ProjectOneTechStack>
              </TechStacks>
              <ProjectOneButtons>
                <ButtonLink
                  href="https://auto-setters.netlify.app/"
                  target="_blank"
                >
                  <ProjectOneLive>
                    <ProjectOneLiveIcon /> LIVE
                  </ProjectOneLive>
                </ButtonLink>
                <ButtonLink
                  href="https://github.com/willtech-1/auto-setters"
                  target="_blank"
                >
                  <ProjectOneCode>
                    <ProjectOneCodeIcon /> CODE
                  </ProjectOneCode>
                </ButtonLink>
              </ProjectOneButtons>
            </SecondProject>

            <ThirdProject>
              <ProjectOneImg src={p3img} />
              <ProjectOneHeader>Cryptocurrency Markets</ProjectOneHeader>
              <ProjectOneDesc>
              Search, see how the individual coin has been performing.
              </ProjectOneDesc>
              <TechStacks>
                <ProjectOneTechStack>HTML5</ProjectOneTechStack>
                <ProjectOneTechStack>CSS3</ProjectOneTechStack>
                <ProjectOneTechStack>JAVASCRIPT</ProjectOneTechStack>
                <ProjectOneTechStack>REACT</ProjectOneTechStack>
                <ProjectOneTechStack>MATERIAL UI</ProjectOneTechStack>
                <ProjectOneTechStack>COIN GECKO API</ProjectOneTechStack>
              </TechStacks>
              <ProjectOneButtons>
                <ButtonLink
                  href="https://crypto-markets-willtech.netlify.app/"
                  target="_blank"
                >
                  <ProjectOneLive>
                    <ProjectOneLiveIcon /> LIVE
                  </ProjectOneLive>
                </ButtonLink>
                <ButtonLink
                  href="https://github.com/willtech-1/crypto-markets"
                  target="_blank"
                >
                  <ProjectOneCode>
                    <ProjectOneCodeIcon /> CODE
                  </ProjectOneCode>
                </ButtonLink>
              </ProjectOneButtons>
            </ThirdProject>
          </ProjectsWrapper>
        </ProjectsContainer>
      </ProjectsSec>
    </>
  );
};

export default Projects;
