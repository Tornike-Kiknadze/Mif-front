import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";
import { Link } from "next/link";
import Footer from "../components/Footer";
import SvgCalendar from "./Assets/Svg";
import SvgCategory from "./Assets/Category";
import Responsive from "../components/Responsive/Footer";

export default () => {
  return (
    <Container>
      {" "}
      <GlobalStyle />
      <Header />
      <SectionHeader>
        {" "}
        {/*  <SectionHeader>Contact</SectionHeader> */}
      </SectionHeader>
      <Section>
        <SectionContentDate>
          <Ul>
            <Li>
              <SvgCalendar width={20} height={20} />
              <p>May 10th 2018</p>
            </Li>
            <Li>
              {" "}
              <SvgCategory width={20} height={20} />
              <p>Design</p>
            </Li>
          </Ul>
        </SectionContentDate>
        <SectionContent>
          {" "}
          iamsteve is a blog written by Steve McKinney, focusing on the design
          and build of websites. The aim is to bridge the gap between the two in
          building your design. It started — and remains — a way to encourage
          self learning and sharing, iamsteve is a blog written by Steve
          McKinney, focusing on the design and build of websites. The aim is to
          bridge the gap between the two in building your design. It
          started — and remains — a way to encourage self learning and sharing,
          through a mixture of in depth tutorials andiamsteve is a blog written
          by Steve McKinney, focusing on the design and build of websites. The
          aim is to bridge the gap between the two in building your design. It
          started — and remains — a way to encourage self learning and sharing,
          through a mixture of in depth tutorials andiamsteve is a blog written
          by Steve McKinney, focusing on the design and build of websites. The
          aim is to bridge the gap between the two in building your design. It
          started — and remains — a way to encourage self learning and sharing,
          through a mixture of in depth tutorials andiamsteve is a blog written
          by Steve McKinney, focusing on the design and build of websites. The
          aim is to bridge the gap between the two in building your design. It
          started — and remains — a way to encourage self learning and sharing,
          through a mixture of in depth tutorials andiamsteve is a blog written
          by Steve McKinney, focusing on the design and build of websites. The
          aim is to bridge the gap between the two in building your design. It
          started — and remains — a way to encourage self learning and sharing,
          through a mixture of in depth tutorials andiamsteve is a blog written
          by Steve McKinney, focusing on the design and build of websites. The
          aim is to bridge the gap between the two in building your design. It
          started — and remains — a way to encourage self learning and sharing,
          through a mixture of in depth tutorials andiamsteve is a blog written
          by Steve McKinney, focusing on the design and build of websites. The
          aim is to bridge the gap between the two in building your design. It
          started — and remains — a way to encourage self learning and sharing,
          through a mixture of in depth tutorials andiamsteve is a blog written
          by Steve McKinney, focusing on the design and build of websites. The
          aim is to bridge the gap between the two in building your design. It
          started — and remains — a way to encourage self learning and sharing,
          through a mixture of in depth tutorials andiamsteve is a blog written
          by Steve McKinney, focusing on the design and build of websites. The
          aim is to bridge the gap between the two in building your design. It
          started — and remains — a way to encourage self learning and sharing,
          through a mixture of in depth tutorials andiamsteve is a blog written
          by Steve McKinney, focusing on the design and build of websites. The
          aim is to bridge the gap between the two in building your design. It
          started — and remains — a way to encourage self learning and sharing,
          through a mixture of in depth tutorials andthrough a mixture of in
          depth tutorials and quick tips. You can find me elsewhere dribbble,
          twitter, behance and{" "}
        </SectionContent>
      </Section>
      <Footer />
      <Responsive /> <Responsive /> <Responsive /> <Responsive /> <Responsive />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const SectionHeader = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 6rem;
  box-sizing: border-box;
  background-color: #eafaf6;
`;

const Section = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  text-align: justify;
  font-size: 1.2rem;
  padding: 6rem 0 6rem 0;
  display: flex;
  line-height: 2rem;
  align-items: center;

  box-sizing: border-box;
`;

const SectionContent = styled.div`
  width: 100%;
  height: auto;

  align-content: center;
  flex: 0 0 55%;
  box-sizing: border-box;
  display: flex;
`;

const SectionContentDate = styled.div`
  height: 50%;
  padding-left: 3rem;
  align-self: flex-start;
  flex: 0 0 5%;
  color: #c0b3b9;
  text-align: justify;
  list-style: none;
`;

const Ul = styled.ul`
  list-style: none;

  font-size: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  width: 210px;
`;
const Li = styled.li`
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  margin: 0.4rem;
  position: relative;

  & > * {
    margin: 0.2rem;
  }
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
  font-size: 1.1rem;
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
