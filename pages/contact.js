import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";
import { Link } from "next/link";
import Footer from "../components/Footer";

export default () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Section>
        <SectionHeader>Contact</SectionHeader>
        <SectionContent>
          <SectionContentText>
            <ParagraphHeading>Sub Header</ParagraphHeading>
            <Paragraph>
              Proident esse officia nisi ut ex quis minim anim aute laboris sunt
              sint.Ad dolore ea ad voluptate mollit eu officia excepteur nostrud
              incididunt.Excepteur eu ea deserunt tempor ipsum ea mollit.Commodo
              aute qui nisi sit.
            </Paragraph>
            <ParagraphHeading>Sub Header</ParagraphHeading>
            <Paragraph>
              Proident esse officia nisi ut ex quis minim anim aute laboris sunt
              sint.Ad dolore ea ad voluptate mollit eu officia excepteur nostrud
              incididunt.Excepteur eu ea deserunt tempor ipsum ea mollit.Commodo
              aute qui nisi sit.
            </Paragraph>
          </SectionContentText>
          <SectionContentMessage>
            <Form>
              <InputGroup>
                <Label>Name</Label>
                <Input type="text" />
              </InputGroup>
              <InputGroup>
                <Label>Email</Label>
                <Input type="email" />
              </InputGroup>
              <InputGroup>
                <Label>Message</Label>
                <Textarea rows="10" />
              </InputGroup>
              <Button type="submit">Send Message</Button>
            </Form>
          </SectionContentMessage>
        </SectionContent>
      </Section>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Section = styled.div`
  /* width: 70%; */
  height: 100vh;
  margin: auto;
  padding-top: 6rem;
  box-sizing: border-box;
`;

const SectionHeader = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: #fff5f3;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionContent = styled.div`
  width: 70%;
  margin: auto;
  height: auto;
  font-size: 1.1rem;
  line-height: 2rem;
  padding: 6rem 5rem 6rem 6rem;
  box-sizing: border-box;
  display: flex;
  @media screen and (max-width: 930px) {
    flex-direction: column;
  }
`;

const SectionContentText = styled.div`
  width: 150px;
  height: 50%;
  flex: 1;
  text-align: justify;
  padding: 0 20px 20px 20px;
  @media screen and (max-width: 930px) {
    width: 100%;
    text-align: center;
  }
`;

const ParagraphHeading = styled.div`
  letter-spacing: -0.25px;
  font-size: 21px;
  font-weight: 600;
  color: #301d28;
  line-height: 1.25;
`;

const Paragraph = styled.div`
  margin-top: 4px;
  font-size: 18px;
  letter-spacing: -1px;
  color: #62535c;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 15px;
  @media screen and (max-width: 930px) {
    width: 100%;
    text-align: center;
  }
`;

const SectionContentMessage = styled.div`
  height: 50%;
  flex: 1;
  text-align: justify;
  padding: 0 20px 20px 20px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  height: 2.5rem;
  background: linear-gradient(to bottom, #ebe1e6, #fbf9fa 6px, #fff);
  box-shadow: inset 0 2px #c5b9c0, inset 0 0 0 2px #d4cbd0,
    0 2px 2px rgba(255, 255, 255, 0.8);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  max-width: 100%;
  color: #301d28;
  line-height: normal;
  width: 100%;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;

const Textarea = styled.textarea`
  flex: 1;
  padding: 0.5rem 0 0 0.5rem;
  font-size: 1.5rem;
  background: linear-gradient(to bottom, #ebe1e6, #fbf9fa 6px, #fff);
  box-shadow: inset 0 2px #c5b9c0, inset 0 0 0 2px #d4cbd0,
    0 2px 2px rgba(255, 255, 255, 0.8);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  max-width: 100%;
  color: #301d28;
  line-height: normal;
  width: 100%;
  border-radius: 0.3rem;
`;

const Button = styled.button`
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background-clip: padding-box;
  position: relative;
  cursor: pointer;
  line-height: normal;
  font-weight: 700;
  display: inline-block;
  vertical-align: top;
  padding: 14px 24px;
  border-radius: 4px;
  color: currentcolor;
  font-size: 18px !important;
  margin-top: 1rem;
  outline: none;
  color: #543243;
  transition: all ease 0.2s;
  background-color: #ffdd74;

  box-shadow: inset 0 0 0 2px #dba758, 0 1px 3px rgba(190, 216, 216, 0.6);

  &:hover {
    background-color: #ffcc33;
    outline: none;
    box-shadow: inset 0 0 0 2px #dba758, 1px 5px 10px rgba(190, 216, 216, 1);
  }

  &:active {
    box-shadow: inset 0 0 0 2px #dba758, 0px 3px 5px rgba(190, 216, 216, 0.61);
    outline: none;
    background-color: #ffdd74;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin:0
  }
  body{
    font-family:Averta
  }
  @font-face {
    font-family: Averta;
    src: url('../static/fonts/Averta.otf');
  }
  @font-face {
    font-family: Pacifico;
    src: url('../static/fonts/Pacifico-Regular.ttf');
  }
`;
