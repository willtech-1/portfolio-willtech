import styled from "styled-components";
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";


export const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
background-color: #080712;
color: #fff;

`

export const FooterWrapper = styled.div`
margin-top: 1rem;
`

export const IconWrapper = styled.span`
  margin: 1rem;
`;

export const TwitterIcon = styled(FaTwitterSquare)`
  color: #F5F6F6;
  font-size: 1.85rem;
`;
export const LinkedInIcon = styled(FaLinkedin)`
  color: #F5F6F6;
  font-size: 1.85rem;
`;
export const GithubIcon = styled(FaGithubSquare)`
  color: #F5F6F6;
  font-size: 1.85rem;
`;
export const FacebookIcon = styled(FaFacebookSquare)`
 color: #F5F6F6;
  font-size: 1.85rem;
`;

export const FooterText = styled.p`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
margin-top: 1rem;
`