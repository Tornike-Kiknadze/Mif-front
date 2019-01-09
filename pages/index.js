import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Header, PostItem, Slider, Footer } from '../components'
import RightArrow from '../static/svg/RightArrow'
import Strapi from 'strapi-sdk-javascript/build/main'
import MainIcon from '../static/svg/mainIcon.svg'
import Link from 'next/link'
import ProjectItem from '../components/ProjectItem'
import Right from '../static/svg/Right'

const strapiApi = new Strapi('http://localhost:1337')

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
          <News>
            <NewsCenter>
              <NewsHeader>
                <NewsTitleLeft>
                  <h1>In The News</h1>
                </NewsTitleLeft>
                <NewsTitleRight>
                  <Right width={15} height={15} />
                </NewsTitleRight>
              </NewsHeader>
              <NewsItems>
                {news.map((item, index) => (
                  <PostItem data={item} />
                ))}
                <ViewAllNews>
                  <ViewAllNewsContent>
                    <Link href={{ pathname: '/news' }}>All News</Link>
                    <Icon>
                      <RightArrow width={20} height={20} fill={'#27cba4'} />
                    </Icon>
                  </ViewAllNewsContent>
                </ViewAllNews>
              </NewsItems>
            </NewsCenter>
          </News>
          <ProjectsSlider>
            <ProjectsHeader>
              <ProjectsBG />
              <Span>Projects</Span>
            </ProjectsHeader>
            <Slider>
              {projects && projects.map(item => <ProjectItem data={item} />)}
            </Slider>
          </ProjectsSlider>
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

const News = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 80px 0 120px 0;
  background: #f7fbfb;
`

const NewsHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-bottom: 55px;
  font-weight: 800;
  font-size: 18px;
  padding-left: 10px;
  color: #fff;
  background: #ff7e6d;
  transition: 0.2s;
  box-shadow: 0 10px 12px -9px #777;
  cursor: pointer;
  h1 {
    font-size: 18px;
  }
  span {
    margin-top: 10px;
    /* color:#ff7e6d */
  }
  &:hover {
    background: #543243;
  }
`

const NewsTitleLeft = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NewsTitleRight = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #543243;
  transition: 0.1s;
  svg {
    fill: #fff;
  }
  ${NewsHeader}:hover & {
    background: #27cba4;
    transform: scale(1.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.16);
  }
`

const ProjectsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #301d28;
  font-weight: bold;
  position: relative;
  color: #ff7e6d;
  font-size: 2em;
`

const ProjectsBG = styled.div`
  width: 80px;
  height: 80%;
  position: absolute;
  top: 10px;
  background: rgba(255, 255, 255, 0.6);
  z-index: -1;
`

const Span = styled.div`
  color: #543243;
  font-size: 18px;
`

const NewsHeaderRight = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #27cba4;
  }
`

const NewsItems = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 35px;
  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ViewAllNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ViewAllNewsContent = styled.div`
  display: flex;
  a {
    text-decoration: none;
    font-size: 26px;
    font-weight: 800;
    color: #543243;
    transition: 0.2s;
    &:hover {
      color: #27cba4;
    }
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;
  margin-left: 5px;
  ${ViewAllNewsContent}:hover & {
    transform: translateX(5px);
  }
`

const ProjectsSlider = styled.div`
  width: 1224px;
  margin: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 80px 0 0 0;
`

const NewsCenter = styled.div`
  width: 1224px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
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
