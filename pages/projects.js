import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";
import { Link } from "next/link";
import Footer from "../components/Footer";
import RightArrowIcon from "../static/svg/RightArrow";
import LeftIcon from "../static/svg/Left";
import Responsive from "../components/Responsive/Footer";
import Strapi from "strapi-sdk-javascript/build/main";
import { PostItem } from "../components";
import ProjectItem from "../components/ProjectItem";

const strapiApi = new Strapi("http://localhost:1337");

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      start: 0,
      limit: 8,
      count: 0
    };
  }

  handleNext = async () => {
    this.setState({
      start: this.state.start + 8
    });
    await this.getData();
  };

  handlePrev = async () => {
    this.setState({
      start: this.state.start - 8
    });
    await this.getData();
  };

  getData = async () => {
    const { limit, start } = this.state;
    try {
      const news = await strapiApi.getEntries(
        `Projects?_start=${start}&_limit=${limit}`
      );
      this.setState({ news });
    } catch (err) {
      alert(err);
    }
  };

  getCount = async () => {
    try {
      const count = await strapiApi.getEntries(`Projects/count`);
      this.setState({ count });
    } catch (err) {
      alert(err);
    }
  };

  async componentDidMount() {
    await this.getData();
    await this.getCount();
  }

  render() {
    const { news, start, count } = this.state;
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <NewsHeader>
          <LeftArrow onClick={this.handlePrev} start={start}>
            <Li>
              <LeftIcon width={20} height={20} fill="#301d28" />
            </Li>
            <Span>Newer</Span>
          </LeftArrow>
          <Heading>Projects</Heading>
          <RightArrow onClick={this.handleNext} count={count}>
            <Span>Older</Span>
            <Ri>
              <RightArrowIcon width={20} height={20} fill="#301d28" />
            </Ri>
          </RightArrow>
        </NewsHeader>
        <Content>
          {news &&
            news.map((item, index) => <ProjectItem data={item} key={index} />)}
        </Content>
        <Footer />
      </Container>
    );
  }
}

export default News;

const Container = styled.div``;

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
`;

const Heading = styled.div`
  color: #62535c;
  font-size: 24px;
  font-weight: 800;
`;

const Li = styled.div`
  transition: 0.4s;
`;

const LeftArrow = styled.div`
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  pointer-events: ${props => (props.start === 1 ? "none" : "inherit")};
  opacity: ${props => (props.start === 1 ? "0.4" : "1")};
  color: ${props => (props.start === 1 ? "#ffcbc7" : "#62535c")};
  &:hover ${Li} {
    transform: translateX(-10px);
  }
`;

const Span = styled.div`
  margin: 0 10px;
  transition: transform 200ms ease;
  color: #301d28;
  font-weight: 800;
`;

const Ri = styled.div`
  transition: transform 200ms ease;
`;

const RightArrow = styled.div`
  display: flex;
  cursor: pointer;
  color: #62535c;
  &:hover ${Ri} {
    transform: translateX(10px);
  }
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 30px 0;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 998px) {
    width: 100%;
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
