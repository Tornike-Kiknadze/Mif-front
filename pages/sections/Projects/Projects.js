import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import RightPlay from "../../../static/svg/RightPlay";
import { ProjectItem } from "../../../components";

export default ({ projects }) => {
  return (
    <Projects>
      <Header>
        <Left>
          <H2>HELLO.</H2>
          <WeAre>
            <H2>WE ARE</H2> <H2>MIF</H2>
          </WeAre>
        </Left>
        <Right>
          <Spani>
            Technology moves fast. Luckily so do we. Because technology is what
            we do. And we’re here to help. We are Dept. One agency uniting
            creativity, technology and data. Helping reinvent & accelerate your
            digital reality by creating experiences that people want and
            businesses need.
          </Spani>
          <Spani>Check out some of our favourite projects below.</Spani>
          <Button>
            <ButtonContent>
              <RightPlay width={15} height={15} />
              <BtnText href="/projects">ALL PROJECTS </BtnText>
            </ButtonContent>
          </Button>
        </Right>
      </Header>
      <ProjectItems>
        {projects && projects.map(item => <ProjectItem data={item} />)}
      </ProjectItems>
    </Projects>
  );
};

const Projects = styled.div`
  padding: 50px 0;
  background-color: #f5f5f5;
  min-height: 100vh;
  /* 
  @media screen and (max-width: 900px) {
    height: 100vh;
  } */
`;

const Header = styled.div`
  display: flex;
  max-width: 1224px;
  align-items: center;
  margin: auto;
  padding: 20px;
  align-items: flex-start;
  box-sizing: border-box;
  @media screen and (max-width: 1036px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  font-size: 52px !important;

  @media screen and (max-width: 1036px) {
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
  }
`;

const H2 = styled.h2`
  margin-right: 10px;
  color: #2d2c32;
`;

const Spani = styled.span`
  letter-spacing: 1.1px;
  line-height: 1.6;
  font-size: 17px;
  margin-bottom: 20px;
  text-align: justify;
  color: #62535c;
  @media screen and (max-width: 900px) {
  }
`;

const WeAre = styled.div`
  display: flex;
  font-size: 36px !important;
  ${H2}:nth-child(2) {
    color: #ff7e6d;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 300px;
  @media screen and (max-width: 1300px) {
    align-items: center;

    width: 100%;
  }
`;

const ProjectItems = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1228px;
  margin: auto;
  @media screen and (max-width: 1036px) {
    justify-content: center;
  }
`;

const Button = styled.div`
  margin-bottom: 40px;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    margin-left: 10px;
    font-weight: bold;
    font-size: 13px;
    margin-top: 5px;
    cursor: pointer;
    transition: color 200ms ease;
    transition: transform 200ms ease;
    color: #62535c;
    a {
      text-decoration: none;
    }
    &:hover {
      color: #ff7e6d;
      transform: translateX(10px);
    }
  }
`;

const BtnText = styled(Link)``;

const GlobalStyle = createGlobalStyle`
  * {
    margin:0
  }

  body{
    font-family: Averta
  }

  @font-face {
    font-family: Averta;
    src: url('../statiProjectsc/fonts/Averta.otf');
  }
  
  @font-face {
    font-family: Pacifico;
    src: url('../static/fonts/Pacifico-Regular.ttf');
  }
`;
