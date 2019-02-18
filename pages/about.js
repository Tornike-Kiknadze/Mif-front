import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";
import { Link } from "next/link";
import Footer from "../components/Footer";
import Responsive from "../components/Responsive/Footer";
import Strapi from "strapi-sdk-javascript/build/main";

const strapiApi = new Strapi("http://192.168.0.106:1337");
const BackUrl = "http://localhost:1337";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: ""
    };
  }
  async componentDidMount() {
    try {
      const about = await strapiApi.getEntries("Abouts");
      this.setState({ about });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const { about } = this.state;
    return (
      <React.Fragment>
        <Container>
          <GlobalStyle />
          <Header />
          <Section>
            <SectionHeader>{about[0] && about[0].Heading}</SectionHeader>
            <SectionContent>
              <SubHeading>{about[0] && about[0].SubHeading}</SubHeading>
              <Paragraph>{about[0] && about[0].Paragraph1}</Paragraph>
              {about[0] && about[0].Media1 && (
                <Media>
                  <MediaImage src={`${BackUrl}/${about[0].Media1.url}`} />
                </Media>
              )}
              <ParagraphHeading>
                {about[0] && about[0].paragraph2Heading}
              </ParagraphHeading>
              <Paragraph>{about[0] && about[0].paragraph2}</Paragraph>
            </SectionContent>
            <Footer />
            <ResponsiveWrapper>
              <Responsive />
            </ResponsiveWrapper>
          </Section>
        </Container>
      </React.Fragment>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const ResponsiveWrapper = styled.div``;

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
  color: #543243;
`;

const SectionContent = styled.div`
  width: 60%;
  max-width: 1024px;
  height: auto;
  justify-content: center;
  align-items: flex-start;
  padding: 6rem 6rem 6rem 6rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const SubHeading = styled.div`
  width: 100%;
  text-align: center;
  color: #ff7e6d;
  font-size: 30px;
  letter-spacing: -0.75px;
  font-weight: 600;
`;

const ParagraphHeading = styled.div`
  font-size: 24px;
  letter-spacing: -0.25px;
  margin-top: 25px;
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
`;

const MediaImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
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
