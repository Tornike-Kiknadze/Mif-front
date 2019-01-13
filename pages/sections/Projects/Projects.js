import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'next/link'
import RightPlay from '../../../static/svg/RightPlay'
import { ProjectItem } from '../../../components'

export default () => {
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
          <Span>
            Technology moves fast. Luckily so do we. Because technology is what
            we do. And we’re here to help. We are Dept. One agency uniting
            creativity, technology and data. Helping reinvent & accelerate your
            digital reality by creating experiences that people want and
            businesses need.
          </Span>
          <Span>Check out some of our favourite projects below.</Span>
        </Right>
      </Header>
      <ProjectItems>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </ProjectItems>
    </Projects>
  )
}

const Projects = styled.div`
  margin: 50px 0;
`

const Header = styled.div`
  display: flex;
  width: 1228px;
  margin: auto;
`

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 60px;
  span {
  }
  p {
  }
`

const H2 = styled.h2`
  margin-right: 10px;
  color: #2d2c32;
  font-size: 46px;
  &:nth-child(1) {
    font-size: 62px;
  }
`

const Span = styled.span`
  letter-spacing: 1.1px;
  line-height: 1.6;
  font-size: 17px;
  margin-bottom: 20px;
`

const WeAre = styled.div`
  display: flex;
  ${H2}:nth-child(2) {
    color: #ff7e6d;
  }
`

const InnerSpan = styled.div``

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`

const ProjectItems = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 1228px;
  margin: auto;
`

const GlobalStyle = createGlobalStyle`
  * {
    margin:0
  }

  body{
    font-family: Averta
  }

  @font-face {
    font-family: Averta;
    src: url('../static/fonts/Averta.otf');
  }
`
