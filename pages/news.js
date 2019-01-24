import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header/Header'
import { Link } from 'next/link'
import Footer from '../components/Footer'
import SvgCalendar from './Assets/Svg'
import SvgCategory from './Assets/Category'
import Responsive from '../components/Responsive/Footer'
import Strapi from 'strapi-sdk-javascript/build/main'
import { PostItem } from '../components'
import ProjectItem from '../components/ProjectItem'

/* const strapiApi = new Strapi("http://localhost:1337"); */

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
  }

  /*  async componentDidMount() {
    try {
      const news = await strapiApi.getEntries("News");
      this.setState({ news });
    } catch (err) {
      alert(err);
    }
  } */

  render() {
    const { news } = this.state
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <NewsHeader>
          <LeftArrow>Left</LeftArrow>
          <Heading>News</Heading>
          <RightArrow>Right</RightArrow>
        </NewsHeader>
        <Content>
          <ProjectItem />
          {news &&
            news.map((item, index) => <PostItem data={item} key={index} />)}
        </Content>
        <Footer />
      </Container>
    )
  }
}

export default News

const Container = styled.div``

const NewsHeader = styled.div`
  width: 100%;
  height: 80px;
  background: #fff5f3;
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
`

const Heading = styled.div`
  color: #301d28;
  font-size: 24px;
  font-weight: 800;
`

const LeftArrow = styled.div``

const RightArrow = styled.div``

const Content = styled.div`
  width: 1024px;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  padding: 30px 0;
  box-sizing: border-box;
  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(3, 1fr);
  }
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
  @font-face {
    font-family: Pacifico;
    src: url('../static/fonts/Pacifico-Regular.ttf');
  }
`
