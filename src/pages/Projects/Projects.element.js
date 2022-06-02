import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
import { VscLiveShare } from "react-icons/vsc";

export const ProjectsSec = styled.div`
  padding: 160px 0;
  background: #cce8e7;
`;

export const ProjectHeader = styled.h1`
  font-family: "Roboto Slab", serif;
  text-align: center;
  margin-bottom: 2rem;
  color: #1d2c2e;
  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.1;
`;
export const HeaderUnderline = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: #32606e;
  margin-top: 0.75rem;
  margin-left: auto;
  margin-right: auto;
`;
export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FirstProject = styled.section`
  margin: 1rem;
`;

export const SecondProject = styled.section`
  margin: 1rem;
`;

export const ThirdProject = styled.section`
  margin: 1rem;
`;

// PROJECT IMAGE
export const ProjectOneImg = styled.img`
  max-height: 500px;
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 3px 3px 3px 3px;
  object-fit: cover; 
  display: block;

  /* @media screen and (max-width: 1024px){
    body{
      overflow-x: hidden;
    }
    max-width: 100%;

  }
  @media screen and (max-width: 748px){
    body{
      overflow-x: hidden;
    }
    max-width: 400px;
  } */
`;
export const ProjectOneHeader = styled.p`
  font-family: "Roboto Slab", serif;
  text-align: center;
  margin-bottom: 2rem;
  color: #1d2c2e;
  margin-bottom: 24px;
  margin-top: 1rem;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  line-height: 1.1;
`;
export const ProjectOneDesc = styled.p`
  font-family: "Roboto Slab", serif;
  font-size: 1.15rem;
  letter-spacing: 2px;
  font-weight: 600;
  color: #1f494c;
  text-align: center;
`;

//TECH STACKS
export const TechStacks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  @media screen and (max-width: 768px){
    flex-wrap: wrap;
  }
`;

export const ProjectOneTechStack = styled.p`
  padding: 6px 6px;
  font-size: 1rem;
  color: #32606e;
  background: #f3eeee;
  border-radius: 4px;
  max-width: 100%;
  margin: 0.5rem;
  @media screen and (max-width: 768px){
    max-width: 100%;
  }
`;


// BUTTONS
export const ProjectOneButtons = styled.div`
  margin-top: 1rem;
  padding: 6px 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 991px){
    flex-direction: column;
  }
  
`;
export const ProjectOneLive = styled.button`
  border-radius: 4px;
  background: #2BB0BF;
  white-space: nowrap;
  padding: 12px 64px;
  color: #e7eaea;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    transition: all 0.3s ease-out;
    background: #0a1516;
    color: #7febf7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ProjectOneCode = styled.button`
  border-radius: 4px;
  background: #7febf7;
  white-space: nowrap;
  padding: 12px 64px;
  color: #0a1516;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    transition: all 0.3s ease-out;
    background: #0a1516;
    color: #7febf7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ProjectOneLiveIcon = styled(AiFillEye)`
  color: #32606e;
  font-size: 1.25rem;
`;
export const ProjectOneCodeIcon = styled(VscLiveShare)`
  color: #32606e;
  font-size: 1.25rem;
`;

export const ButtonLink = styled.a`
text-decoration: none;
`
