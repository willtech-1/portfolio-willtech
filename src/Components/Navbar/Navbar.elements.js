import styled from "styled-components";
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
background: #F1FBFB;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled.div`
  justify-self: flex-start;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-shadow: 2px 2px 2px;
  font-weight: 510;
`;

export const SpanOne = styled.span`
  color: #1f494c;
`;
export const SpanTwo = styled.span`
  color: #5be0e9;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    color: #49b1b9;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  &:hover {
    color: #398b91;
    transition: all 0.5s ease;
  }
`;


// navlink styles

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #F1FBFB;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 4px solid transparent;

  &:hover {
    border-bottom: 4px solid #5be0e9;
    color: #49b1b9;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
    color: #131819;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-size: 1rem;
    letter-spacing: 0.5px;

    &:hover{
        transition: all 0.3s ease;
        color: #49b1b9;
    }
  
    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            
            transition: all 0.3s ease;
        }
    }
`

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px
}
`
export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
`