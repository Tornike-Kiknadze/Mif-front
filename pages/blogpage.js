import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";
import { Link } from "next/link";
import Footer from "../components/Footer";
import SvgCalendar from "./Assets/Svg";
import Facebook from "../static/svg/Facebook";
import Twitter from "../static/svg/Twitter";
import SvgCategory from "./Assets/Category";
import Responsive from "../components/Responsive/Footer";
import Strapi from "strapi-sdk-javascript/build/main";
import dateStringify from "../helpers/dateStringify";

const BackUrl = "http://localhost:1337";
const strapiApi = new Strapi(BackUrl);

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  async componentDidMount() {
    try {
      const id = this.props.url.query.id;
      const post = await strapiApi.getEntries(`News/${id}`);
      this.setState({ post });
    } catch {
      const id = this.props.url.query.id;
      const post = await strapiApi.getEntries(`Projects/${id}`);
      console.log("TCL: Blog -> componentDidMount -> post", post);
      this.setState({ post });
    }
  }

  render() {
    const {
      Title,
      category,
      content,
      createdAt,
      date,
      ending,
      mainImage,
      media1,
      media2,
      media3,
      paragraph1,
      paragraph2,
      paragraph3
    } = this.state.post;
    console.log("TCL: Blog -> render -> date", date);
    const dateStringified = dateStringify(date, false, true);
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <SectionHeader>
          {mainImage && <MainImage image={`${BackUrl}/${mainImage.url}`} />}
        </SectionHeader>
        <Section>
          <Wrapper>
            <SectionContent>
              <Left>
                <SectionContentDate>
                  <Ul>
                    <Li>
                      <SvgCalendar width={15} height={15} fill={"#bbadb4"} />
                      <p>{dateStringified}</p>
                    </Li>
                    <Li>
                      <SvgCategory width={15} height={15} fill={"#bbadb4"} />
                      <p>News</p>
                    </Li>
                    <Li>
                      <Facebook width={15} height={15} fill={"#bbadb4"} />
                      <p>Share</p>
                    </Li>
                  </Ul>
                </SectionContentDate>
              </Left>
              <Right>
                <BlogTitle>
                  This is a Realy Good And Big Title, long title
                </BlogTitle>
                <Paragraph>{paragraph1}</Paragraph>
                {media1 && (
                  <Media>
                    <MediaImage src={`${BackUrl}/${media1.url}`} />
                  </Media>
                )}
                <Paragraph>{paragraph2}</Paragraph>
                {media2 && (
                  <Media>
                    <MediaImage src={`${BackUrl}/${media2.url}`} />
                  </Media>
                )}
                <Paragraph>{paragraph3}</Paragraph>
                {media3 && (
                  <Media>
                    <MediaImage src={`${BackUrl}/${media3.url}`} />
                  </Media>
                )}
                <Ending>{ending}</Ending>
              </Right>
            </SectionContent>
          </Wrapper>
        </Section>
        <Footer />
      </Container>
    );
  }
}

export default Blog;

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const SectionHeader = styled.div`
  width: 100%;
  height: 80vh;
  padding-top: 6rem;
  box-sizing: border-box;
  background-color: #eafaf6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainImage = styled.div`
  width: 30%;
  height: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.47), 0 10px 23px rgba(0, 0, 0, 0.2);
  background-repeat: no-repeat;
`;

const Section = styled.div`
  width: 70%;
  max-width: 1225px;
  margin: auto;
  background-color: #fff;
  text-align: justify;
  font-size: 1.2rem;
  display: flex;
  line-height: 2rem;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  border-radius: 12px 12px 0 0;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: -80px;
  background: #fff;
  padding: 70px 30px 30px 30px;
  border-radius: 12px 12px 0 0;
`;

const SectionContent = styled.div`
  width: 100%;
  display: flex;
`;

const SectionContentTop = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  border-radius: 12px 12px 0 0;
  top: -60px;
  background: #fff;
`;

const Left = styled.div``;
const Right = styled.div`
  max-width: 60%;
`;

const BlogTitle = styled.div`
  color: #ff7e6d;
  font-size: 42px;
  font-weight: 600;
  text-align: left;
  line-height: 3rem;
`;

const Paragraph = styled.div`
  margin-top: 24px;
  font-size: 18px;
  letter-spacing: -1px;
  color: #62535c;
  line-height: 1.5;
  text-align: left;
`;

const Media = styled.div`
  width: 100%;
  margin-top: 25px;
  box-shadow: 0 0 8px 1px #ccc;
  display: flex;
  align-items: center;
`;

const MediaImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

const Ending = styled.div`
  margin-top: 24px;
  font-size: 21px;
  letter-spacing: -1px;
  color: #62535c;
`;

const SectionContentDate = styled.div`
  color: #c0b3b9;
`;

const Ul = styled.ul`
  list-style: none;
  font-size: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  width: 210px;
  padding: 0;
`;

const Li = styled.li`
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #bbadb4;
  cursor: pointer;
  & > * {
    margin: 0.2rem;
  }
  svg {
    fill: #bbadb4;
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
