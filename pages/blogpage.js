import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header/Header'
import { Link } from 'next/link'
import Footer from '../components/Footer'
import SvgCalendar from './Assets/Svg'
import SvgCategory from './Assets/Category'
import Responsive from '../components/Responsive/Footer'
import Strapi from 'strapi-sdk-javascript/build/main'

const BackUrl = 'http://localhost:1337'
const strapiApi = new Strapi(BackUrl)

class BlogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {}
    }
  }

  async componentDidMount() {
    const id = this.props.url.query.id
    const post = await strapiApi.getEntries(`News/${id}`)
    this.setState({ post })
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
    } = this.state.post
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <SectionHeader>
          {/*  <SectionHeader>Contact</SectionHeader> */}
          {mainImage && <MainImage image={`${BackUrl}/${mainImage.url}`} />}
        </SectionHeader>
        <Section>
          <SectionHeadThing />
          <Wrapper>
            <SectionContentDate>
              <Ul>
                <Li>
                  <SvgCalendar width={20} height={20} />
                  <p>{date}dasdasdasd</p>
                </Li>
                <Li>
                  <SvgCategory width={20} height={20} />
                  <p>Design</p>
                </Li>
              </Ul>
            </SectionContentDate>
            <SectionContent>
              <BlogTitle>{Title}</BlogTitle>
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
            </SectionContent>
          </Wrapper>
        </Section>
        <Footer />
      </Container>
    )
  }
}

export default BlogPage

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const SectionHeader = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 6rem;
  box-sizing: border-box;
  background-color: #eafaf6;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainImage = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  border-radius: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.47), 0 10px 23px rgba(0, 0, 0, 0.2);
`

const Section = styled.div`
  width: 70%;
  max-width: 1825px;
  margin: auto;
  background-color: #fff;
  text-align: justify;
  font-size: 1.2rem;
  padding: 6rem 0 6rem 0;
  display: flex;
  line-height: 2rem;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
`

const SectionHeadThing = styled.div`
  width: 100%;
  height: 110px;
  background: #fff;
  position: absolute;
  top: -50px;
  background: #fff;
  border-radius: 30px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`

const SectionContent = styled.div``

const BlogTitle = styled.div`
  color: #ff7e6d;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -1px;
`

const Paragraph = styled.div`
  margin-top: 24px;
  font-size: 21px;
  letter-spacing: -1px;
  color: #62535c;
`

const Media = styled.div`
  width: 100%;
  height:auto;
  margin-top:25px;
  /* background-image: url(${props => props.img}); */
`

const MediaImage = styled.img`
  width: 100%;
  object-fit: cover;
`

const Ending = styled.div`
  margin-top: 24px;
  font-size: 21px;
  letter-spacing: -1px;
  color: #62535c;
`

const SectionContentDate = styled.div`
  padding-top: 1rem;
  color: #c0b3b9;
`

const Ul = styled.ul`
  list-style: none;
  font-size: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  width: 210px;
  padding: 0;
`
const Li = styled.li`
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  margin: 0.4rem;
  position: relative;

  & > * {
    margin: 0.2rem;
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
`
