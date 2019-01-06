import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header, PostItem, Slider } from "../components";
import RightArrow from "../static/svg/RightArrow";
import Strapi from "strapi-sdk-javascript/build/main";
import MainIcon from "../static/svg/mainIcon.svg";
const strapiApi = new Strapi("http://localhost:1337");

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
      // const posts = await strapi.getEntries('Blogposts')
      const news = await strapiApi.getEntries("News");
      const projects = await strapiApi.getEntries("Projects");
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
                <h1>Latest News</h1>
                <span>
                  We Are Very Active Guys So We Need News, Read Them And Give us
                  Your Money We Are Very Active Guys So We Need News, Read Them
                  And Give us Your Money We Are Very Active Guys So We Need
                  News, Read Them And Give us Your Money We Are Very Active Guys
                  So We Need News, Read Them And Give us Your Money We Are Very
                  Active Guys So We Need News, Read Them And Give us Your Money
                  We Are Very Active Guys So We Need News, Read Them And Give us
                  Your Money We Are Very Active Guys So We Need News, Read Them
                  And Give us Your Money We Are Very Active Guys So We Need
                  News, Read Them And Give us Your Money We Are Very Active Guys
                  So We Need News, Read Them And Give us Your Money We Are Very
                  Active Guys So We Need News, Read Them And Give us Your Money
                  We Are Very Active Guys So We Need News, Read Them And Give us
                  Your Money We Are Very Active Guys So We Need News, Read Them
                  And Give us Your Money We Are Very Active Guys So We Need
                  News, Read Them And Give us Your Money We Are Very Active Guys
                  So We Need News, Read Them And Give us Your Money We Are Very
                  Active Guys So We Need News, Read Them And Give us Your Money
                  We Are Very Active Guys So We Need News, Read Them And Give us
                  Your Money We Are Very Active Guys So We Need News, Read Them
                  And Give us Your Money We Are Very Active Guys So We Need
                  News, Read Them And Give us Your Money We Are Very Active Guys
                  So We Need News, Read Them And Give us Your Money We Are Very
                  Active Guys So We Need News, Read Them And Give us Your Money
                  We Are Very Active Guys So We Need News, Read Them And Give us
                  Your Money We Are Very Active Guys So We Need News, Read Them
                  And Give us Your Money We Are Very Active Guys So We Need
                  News, Read Them And Give us Your Money We Are Very Active Guys
                  So We Need News, Read Them And Give us Your Money We Are Very
                  Active Guys So We Need News, Read Them And Give us Your Money
                  We Are Very Active Guys So We Need News, Read Them And Give us
                  Your Money We Are Very Active Guys So We Need News, Read Them
                  And Give us Your Money We Are Very Active Guys So We Need
                  News, Read Them And Give us Your Money We Are Very Active Guys
                  So We Need News, Read Them And Give us Your Money We Are Very
                  Active Guys So We Need News, Read Them And Give us Your Money
                  We Are Very Active Guys So We Need News, Read Them And Give us
                  Your Money We Are Very Active Guys So We Need News, Read Them
                  And Give us Your Money
                </span>
                {/* <NewsHeaderRight>
                  <Icon>
                    <RightArrow width={15} height={15} fill={'#27cba4'} />
                  </Icon>
                </NewsHeaderRight> */}
              </NewsHeader>
              <Posts>
                {news.map(item => (
                  <PostItem data={item} />
                ))}
              </Posts>{" "}
              <ProjectsSlider>
                <ProjectsHeader>
                  <ProjectsBG />
                  <Span>Projects</Span>
                </ProjectsHeader>
                <Slider data={projects} />
              </ProjectsSlider>
            </NewsCenter>
          </News>
        </MainContainer>
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
  height: 100vh;
  background: #fff5f3;
`;

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
`;

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
`;

const HeadContainerRight = styled.div`
  flex: 1;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const News = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 30px 0;
  background: #f5f5f5;
`;

const NewsHeader = styled.div`
  width: 100%;
  color: #543243;
  font-weight: 800;
  font-size: 18px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #ff7e6d;
  }
  span {
    margin-top: 10px;
    /* color:#ff7e6d */
  }
`;

const ProjectsHeader = styled.div`
  width: 100%;
  margin-top: 30px;
  color: #301d28;
  font-size: 18px;
  font-weight: bold;
  position: relative;
`;

const ProjectsBG = styled.div`
  width: 80px;
  height: 80%;
  position: absolute;
  top: 10px;
  background: rgba(255, 255, 255, 0.6);
  z-index: -1;
`;

const Span = styled.div``;

const NewsHeaderRight = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #27cba4;
  }
`;

const Icon = styled.div`
  margin-left: 8px;
  transition: 0.3s;
  ${NewsHeaderRight}:hover & {
    transform: translateX(5px);
  }
`;

const Posts = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ProjectsSlider = styled.div`
  width: 100%;
`;

const NewsCenter = styled.div`
  width: 1224px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
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
