import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Header, PostItem, Slider, Footer } from '../components'
import { Projects, News } from './sections'

import Strapi from 'strapi-sdk-javascript/build/main'
import MainIcon from '../static/svg/mainIcon.svg'
import Link from 'next/link'

const strapiApi = new Strapi('http://192.168.0.106:1337')

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      news: []
    }
  }

  async componentDidMount() {
    try {
      const news = await strapiApi.getEntries('News?_limit=9')
      const projects = await strapiApi.getEntries('Projects')
      this.setState({ news, projects })
    } catch (err) {
      alert(err)
    }
  }

  render() {
    const { news, projects } = this.state
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <MainContainer>
          <HeadContainer>
            <HeadContainerLeft>
              <h1>Media Inovation Foundation</h1>
              <span>
                This is a such a great slogan that, when kyle mynouge saw it she
                become waffle, This is a such a great slogan that, when kyle
                mynouge saw it she become waffle,This is a such a great slogan
                that, when kyle mynouge saw it she become waffle, This is a such
                a great slogan that, when kyle mynouge saw it she become waffle
              </span>
            </HeadContainerLeft>
            <HeadContainerRight img={MainIcon} />
          </HeadContainer>
          <Projects />
          <News news={news} />
          <Footer />
        </MainContainer>
      </Container>
    )
  }
}

export default HomePage

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff5f3;
`

const HeadContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 0 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`

const HeadContainerLeft = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  font-size: 26px;
  color: #ff7e6d;
  font-weight: bold;
  flex-direction: column;
  text-align: left;
  h1 {
    width: 400px;
    line-height: 55px;
    letter-spacing: 7px;
  }
  span {
    margin-top: 20px;
    font-size: 16px;
    color: #444053;
    font-weight: bold;
    line-height: 25px;
    letter-spacing: 2px;
  }
`

const HeadContainerRight = styled.div`
  flex: 1;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`

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
`

const Space = styled.div`
  margin: 0 5px;
`
