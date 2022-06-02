import React, { useState } from "react";
import {
  ContactSec,
  ContactContainer,
  ContactHeading,
  ContactWrapper,
  Form,
  NameInput,
  EmailInput,
  SubmitButton,
  SubmitBtn,
  Textarea,
  NameInputDiv,
  EmailInputDiv,
  TextareaDiv,
  NetInput
} from "./Contact.element";

import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  //modal state
  const [modalOpen, setModalOpen] = useState(false);

  //modal text
  const [modalText, setModalText] = useState("");

  //toggle modal
  const close = () => setModalOpen(false);
  // const open = () => setModalOpen(true);

  //handleChage
  const handleChange = (e) => {
    setFormValues((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    let emailCheck =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    e.preventDefault();
    if (
      formValues.firstName &&
      emailCheck.test(formValues.email) &&
      formValues.message
    ) {
      setModalOpen(!modalOpen);
      setModalText("Message sent successfully!");
      setFormValues({firstName: "", email: "", message: ""})
    } else {
      // setModalOpen(modalOpen)
      setModalOpen(true);
      setModalText("Please enter valid values!");
    }
  };
  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} text={modalText} />
        )}
      </AnimatePresence>

      <ContactSec id="contact">
        <ContactHeading>Get In Touch</ContactHeading>
        <ContactContainer>
          <ContactWrapper>
            {/* SEND OR HANDLE CONFIRMATION ON THE SUBMIT BUTTON */}
            <Form onSubmit={handleSubmit} name="contact v1" method="post" data-netlify="true">
              <NetInput type="hidden" name="form-name" value="contact v1" />
              <NameInputDiv>
                <NameInput
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={formValues.firstName}
                  placeholder="NAME"
                />
              </NameInputDiv>

              <EmailInputDiv>
                <EmailInput
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formValues.email}
                  placeholder="EMAIL"
                />
              </EmailInputDiv>

              <TextareaDiv>
                <Textarea
                  name="message"
                  onChange={handleChange}
                  value={formValues.message}
                  placeholder="MESSAGE"
                />
              </TextareaDiv>
              <SubmitButton>
                <SubmitBtn>Submit here</SubmitBtn>
              </SubmitButton>
            </Form>
          </ContactWrapper>
        </ContactContainer>
      </ContactSec>
    </>
  );
};

export default Contact;
