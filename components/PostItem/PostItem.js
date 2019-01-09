import React, { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { media } from '../../globals/breakpoints'
import Dash from '../../static/svg/Dash'
import RightArrow from '../../static/svg/RightArrow'
const BackUrl = 'http://localhost:1337'

const PostItem = ({ data }) => {
  const { id, Title, category, date, mainImage, content } = data
  return (
    <Link href={{ pathname: '/blogpage', query: { id } }}>
      <Container>
        {mainImage && (
          <Top image={`${BackUrl}${mainImage.url}`} className="top" />
        )}
        {/* <Date>
        <Time>{date}</Time>
        <Dashes>p
          <Dash />
        </Dashes>
      </Date> */}
        <Bottom>
          <BottomTop>
            <PostTitle>{Title}</PostTitle>
            <Content>{content}</Content>
          </BottomTop>
          <Footer>
            {/* <Category>{category}</Category> */}
            <ContinueReading>
              <Text> Continue Reading</Text>
              <Icon>
                <RightArrow width={15} height={15} fill={'#27cba4'} />
              </Icon>
            </ContinueReading>
          </Footer>
        </Bottom>
      </Container>
    </Link>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  top: 0;
  transition: all 0.3s ease-in;
  box-shadow: 9px 10px 9px -10px #777;
  border-radius: 4px;
  overflow: hidden;
  &:hover {
    top: -2px;
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.16);
    transform: translate(0, -8px);
  }
`

const Top = styled.div`
  width: 100%;
  padding-bottom: 60%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

const Date = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  margin-top: 30px;
`

const Time = styled.div`
  color: #543243;
  font-weight: 800;
`

const Dashes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  background: #ffffff;
  min-height: 350px;
`
const BottomTop = styled.div``

const PostTitle = styled.div`
  width: 100%;
  color: #ff7e6d;
  font-weight: bold;
  font-size: 20px;
`

const Content = styled.div`
  color: #7f6371;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  max-height: 15ch;
  overflow: hidden;
  text-align: justify;
`

const Footer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`

const Category = styled.div`
  color: #543243;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #27cba4;
  }
`

const ContinueReading = styled.div`
  color: #543243;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  &:hover {
    color: #27cba4;
  }
  ${Container}:hover & {
    color: #27cba4;
  }
`

const Text = styled.p`
  margin-right: 5px;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;
  ${ContinueReading}:hover & {
    transform: translateX(5px);
  }
  ${Container}:hover & {
    transform: translateX(5px);
  }
`

export default PostItem
