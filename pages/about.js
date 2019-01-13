import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";
import { Link } from "next/link";
import Footer from "../components/Footer";
import Responsive from "../components/Responsive/Footer";
export default () => {
  return (
    <React.Fragment>
      <Container>
        <GlobalStyle />
        <Header />
        <Section>
          <SectionHeader>About</SectionHeader>
          <SectionContent>
            <SectionContentText>
              Feedback <br />
              Feedback is really helpful, as I will be able to improve posts
              further. It also helps me to focus on the right topics. If you
              have any feedback or suggestions, I’ll be grateful for you taking
              the time. <br /> Issues with a post <br /> If you’re stuck with a
              post, I’ll be happy to steer you in the right direction. The
              following will help speed things up: Don’t send login details by
              email Promoting If you’re trying to promote a product, service or
              build links, it’s very unlikely it’s relevant (based upon previous
              experience). I encourage you to think twice about sending a
              message. I don’t take readers time & attention for granted. Hiring
              me I’m available for short term design related consulting.
              However, for sake of clarity, I’m not available for longer term
              design projects. If you have a project you think I can add value
              to, send a messgae and we’ll see if there’s a good fit. Find me
              elsewhere dribbble, twitter, behance and linkedin.
            </SectionContentText>
          </SectionContent>{" "}
          <Footer />
          <ResponsiveWrapper>
            <Responsive />
          </ResponsiveWrapper>
        </Section>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const ResponsiveWrapper = styled.div`
   
`;

const Section = styled.div`
  width: 100%;
  height: 100vh;
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
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 6rem 6rem 6rem 6rem;
  box-sizing: border-box;
  display: flex;
`;

const SectionContentText = styled.div`
  height: auto;
  flex: 0 0 65%;
  line-height: 2rem;
  font-size: 1.1rem;
  text-align: justify;
`;

const SectionContentMessage = styled.div`
  height: 50%;

  flex: 1;
  padding: 2rem 2rem 2rem 0;
  text-align: justify;
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
  margin: 1.2rem 0 0.8rem 0;
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
`;
