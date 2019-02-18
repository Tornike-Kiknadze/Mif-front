import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import RightPlay from "../../../static/svg/RightPlay";
import { ProjectItem, PostItem } from "../../../components";
import Right from "../../../static/svg/Right";
import RightArrow from "../../../static/svg/RightArrow";

export default props => {
  const { news } = props;
  return (
    <News>
      <NewsCenter>
        <NewsHeader>
          <Left>
            <h1>
              <Span>IN OUR</Span>
              <Span>NEWS</Span>
            </h1>
          </Left>
          <RightSide>
            <Spani>
              Technology moves fast. Luckily so do we. Because technology is
              what we do. And we’re here to help. We are Dept. One agency
              uniting creativity, technology and data. Helping reinvent &
              accelerate your digital reality by creating experiences that
              people want and businesses need.
            </Spani>
            <Spani>Check out some of our favourite projects below.</Spani>
            <Button>
              <ButtonContent>
                <RightPlay width={15} height={15} />
                <BtnText href={{ pathname: "/news" }}>ALL NEWS </BtnText>
              </ButtonContent>
            </Button>
          </RightSide>
        </NewsHeader>

        <NewsItems>
          {news.map((item, index) => (
            <ProjectItem color={"#66D7D1"} data={item} />
          ))}
          <ViewAllNews>
            <ViewAllNewsContent>
              <Link href={{ pathname: "/news" }}>All News</Link>
              <Icon>
                <RightArrow width={20} height={20} fill={"#27cba4"} />
              </Icon>
            </ViewAllNewsContent>
          </ViewAllNews>
        </NewsItems>
      </NewsCenter>
    </News>
  );
};

const News = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 80px 0 120px 0;
  background: #f7fbfb;
`;

const NewsHeader = styled.div`
  min-width: 1224px;
  margin: auto;
  display: flex;
  margin-bottom: 55px;
  font-weight: 800;
  padding-left: 10px;
  h1 {
    font-size: 46px;
  }

  @media screen and (max-width: 1036px) {
    flex-direction: column;
  }
`;

const Span = styled.div`
  color: #2d2c32;
  margin-top: 10px;

  font-size: 52px !important;
  &:nth-child(2) {
    font-size: 36px !important;
    color: #ff7e6d;
  }
`;

const NewsTitleLeft = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 52px !important;

  @media screen and (max-width: 1036px) {
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
  }
`;

const H2 = styled.h2`
  margin-right: 10px;
  color: #2d2c32;
`;

const NewsHeaderRight = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #27cba4;
  }
`;

const RightSide = styled.div`
  flex: 2;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  width: 300px;
  @media screen and (max-width: 1300px) {
    align-items: center;

    width: 100%;
  }
`;

const NewsItems = styled.div`
  min-width: 1224px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ViewAllNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;
  margin-left: 5px;
  ${ViewAllNewsContent}:hover & {
    transform: translateX(5px);
  }
`;

const Spani = styled.span`
  letter-spacing: 1.1px;
  line-height: 1.6;
  font-size: 17px;
  margin-bottom: 20px;
  text-align: justify;
  color: #62535c;
  @media screen and (max-width: 900px) {
  }
`;

const Button = styled.div`
  margin-bottom: 40px;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    margin-left: 10px;
    font-weight: bold;
    font-size: 13px;
    margin-top: 5px;
    cursor: pointer;
    transition: color 200ms ease;
    transition: transform 200ms ease;
    color: #62535c;
    a {
      text-decoration: none;
    }
    &:hover {
      color: #ff7e6d;
      transform: translateX(10px);
    }
  }
`;

const BtnText = styled(Link)``;

const NewsCenter = styled.div`
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
