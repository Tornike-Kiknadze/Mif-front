import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import RightPlay from '../../../static/svg/RightPlay';
import { ProjectItem, PostItem } from '../../../components';
import Right from '../../../static/svg/Right';
import RightArrow from '../../../static/svg/RightArrow';

export default props => {
  const { news } = props;
  return (
    <News>
      <NewsCenter>
        <NewsHeader>
          <h1>
            <Span>IN OUR</Span>
            <Span>NEWS</Span>
          </h1>
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
  );
};

const News = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 80px 0 120px 0;
  background: #f7fbfb;
`;

const NewsHeader = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 55px;
  font-weight: 800;
  padding-left: 10px;
  h1 {
    font-size: 46px;
  }
  span {
    margin-top: 10px;
    /* color:#ff7e6d */
  }
`;

const Span = styled.div`
  color: #2d2c32;
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

const NewsHeaderRight = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #27cba4;
  }
`;

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
