import styled from "styled-components";
import { FaProjectDiagram, FaCodeBranch } from "react-icons/fa";
import { VscGitCompare } from "react-icons/vsc";

export const SkillsSec = styled.div`
  padding: 160px 0;
  background: #fbf0f0;
`;
export const SkillsHeader = styled.h1`
  font-family: "Roboto Slab", serif;
  text-align: center;
  margin-bottom: 2rem;
  color: #1d2c2e;
  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.1;
`;

export const Underline = styled.div`
  width: 4rem;
  height: 0.25rem;
  background: #32606e;
  margin-top: 0.75rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

//TECHNICAL SKILLS
export const TechnicalSkills = styled.section`
  margin: 1rem;
  border-radius: 6px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  width: 380px;
  &:hover {
    transition: all 0.3s ease-out;
    background: #7febf7;
  }
  @media screen and (max-width: 478px) {
    width: 350px;
  }
`;
export const TechSkillsIcon = styled(FaProjectDiagram)`
  font-size: 1.5rem;
  text-align: center;
  color: #1f494c;
  margin-bottom: 1rem;
`;
export const TechSkillsHeader = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 1.15rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: #1f494c;
  text-align: center;
`;
export const HeaderUnderLine = styled.div`
  width: 3rem;
  height: 0.25rem;
  background: #5be0e9;
  margin-top: 0.75rem;
  margin-left: auto;
  margin-right: auto;
`;

export const TechSkillsText = styled.p`
  margin-top: 1.25rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #32606e;
`;

// BACKEND SKILLS
export const BackendSkills = styled.section`
  margin: 1rem;
  border-radius: 6px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  width: 380px;
  &:hover {
    transition: all 0.3s ease-out;
    background: #7febf7;
  }
  @media screen and (max-width: 478px) {
    width: 350px;
  }
`;
export const BackendSkillsIcon = styled(VscGitCompare)`
  font-size: 1.5rem;
  text-align: center;
  color: #1f494c;
  margin-bottom: 1rem;
`;
export const BackendSkillsHeader = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 1.15rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: #1f494c;
  text-align: center;
`;
export const BackendSkillsText = styled.p`
  margin-top: 1.25rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #32606e;
`;

// OTHER SKILLS
export const OtherSkills = styled.section`
  margin: 1rem;
  border-radius: 6px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  width: 380px;
  &:hover {
    transition: all 0.3s ease-out;
    background: #7febf7;
  }

  @media screen and (max-width: 478px) {
    width: 350px;
  }
`;

export const OtherSkillsIcon = styled(FaCodeBranch)`
  font-size: 1.5rem;
  text-align: center;
  color: #1f494c;
  margin-bottom: 1rem;
`;
export const OtherSkillsHeader = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 1.15rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: #1f494c;
  text-align: center;
`;
export const OtherSkillsText = styled.p`
  margin-top: 1.25rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #32606e;
`;
