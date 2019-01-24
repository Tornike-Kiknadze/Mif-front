import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header, PostItem, Slider, Footer } from '../components';
import { Projects, News } from './sections';

import Strapi from 'strapi-sdk-javascript/build/main';
import MainIcon from '../static/svg/mainIcon.svg';
import HeroImage from '../static/svg/Hero';

import Link from 'next/link';

const strapiApi = new Strapi('http://192.168.0.106:1337');

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      news: []
    };
  }

  async componentDidMount() {
    try {
      const news = await strapiApi.getEntries('News?_limit=9');
      const projects = await strapiApi.getEntries('Projects');
      this.setState({ news, projects });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const { news, projects } = this.state;
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <MainContainer>
          <h1>Media Inovation Foundation</h1>
          <span>
            This is a such a great slogan that, when kyle mynouge saw it she
            become waffle
          </span>
          <ImgWrapper>
            <HeroImage />
          </ImgWrapper>
        </MainContainer>
        <Projects />
        <News news={news} />
        <Footer />
      </Container>
    );
  }
}

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 55vh;
  background: #fff5f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0;
  overflow: hidden;
  position: relative;
  /* border-bottom:1px solid #ccc; */
  h1 {
    line-height: 55px;
    letter-spacing: 7px;
    color: #ff7e6d;
    font-size: 48px;
    margin-top: 120px;
  }

  span {
    margin-top: 20px;
    font-size: 16px;
    color: #444053;
    font-weight: bold;
    line-height: 5px;
    letter-spacing: 2px;
  }
`;

const ImgWrapper = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: -130px;
  overflow: hidden;
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

const Space = styled.div`
  margin: 0 5px;
`;
