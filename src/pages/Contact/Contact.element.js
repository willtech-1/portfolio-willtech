import styled from "styled-components";
import { motion } from "framer-motion"

export const ContactSec = styled.div`
  padding: 160px 0;
  background: #f1fbfb;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactWrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    display: flex;
  justify-content: center;
  align-items: center;
    max-width: 100%;
  }
  @media screen and (max-width: 746px) {
   
  }
`;

export const ContactHeading = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Slab", serif;
  text-align: center;
  color: #32606e;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 8px;
  margin-bottom: 1rem;
`;

// FORM INPUT AREA
export const Form = styled.form``;
export const NameInputDiv = styled.div`
  margin-top: 1.25rem;
`;
export const EmailInputDiv = styled.div`
  margin-top: 1.25rem;
`;
export const TextareaDiv = styled.div`
  margin-top: 1.25rem;
`;

export const NetInput = styled.input``
export const NameInput = styled.input`
  font-size: 0.95rem;
  background-color: white;
  padding: 12px;
  outline: none;
  border: none;
  color: #1d1c1c;
  border-radius: 4px;
  width: 450px;
  ::placeholder {
    color: #1d1c1c;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 768px){
    max-width: 330px;
  }
`;
export const EmailInput = styled.input`
  font-size: 0.95rem;
  background-color: white;
  padding: 12px;
  outline: none;
  border: none;
  color: #1d1c1c;
  border-radius: 4px;
  width: 450px;
  ::placeholder {
    color: #1d1c1c;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 768px){
    max-width: 330px;
  }
`;

export const Textarea = styled.textarea`
  font-size: 0.95rem;
  background-color: white;
  padding: 24px;
  outline: none;
  border: none;
  color: #1d1c1c;
  border-radius: 4px;
  width: 450px;
  ::placeholder {
    color: #1d1c1c;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 768px){
    max-width: 330px;
  }
`;

export const SubmitButton = styled.section`
  margin-top: 1rem;
`;
export const SubmitBtn = styled(motion.button)`
  margin-top: 1rem;
  outline: none;
  background-color: seagreen;
  border: none;
  border-radius: 4px;
  color: whitesmoke;
  padding: 12px 12px;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  width: 450px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #7febf7;
    color: #0a1516;
  }
  @media screen and (max-width: 746px) {
    body {
      overflow-x: hidden;
    }
    width: 330px;
  }
`;
