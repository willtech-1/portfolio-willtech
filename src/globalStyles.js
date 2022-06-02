import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Radio Canada', sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;


export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  background: ${({ primaryContact }) =>
    primaryContact ? "#2BB0BF" : "#139EAE"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #e7eaea;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    transition: all 0.3s ease-out;
    background: #7febf7;
    color: #0a1516;

  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ResumeButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  background: ${({ primaryContact }) =>
    primaryContact ? "#2BB0BF" : "#139EAE"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #e7eaea;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
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

export const RbtnContainer = styled.div`
display: flex;
display: ${({ resumeBtn }) => (resumeBtn ? "block" : "none")};
`
 

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const BtnWrapper = styled.span`
  display: flex;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

