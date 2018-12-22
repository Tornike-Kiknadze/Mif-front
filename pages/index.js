import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header, PostItem } from "../components";
import RightArrow from "../static/svg/RightArrow";

export default () => {
  return (
    <Container>
      {" "}
      <GlobalStyle />
      <Header />
      <MainContainer>
        {" "}
        <MainContainerCenter>Svg Illustration Here</MainContainerCenter>
        <News>
          <NewsCenter>
            <NewsHeader>
              <NewsHeaderLeft>Latest News</NewsHeaderLeft>
              <NewsHeaderRight>
                All News
                <Icon>
                  <RightArrow width={15} height={15} fill={"#27cba4"} />
                </Icon>
              </NewsHeaderRight>
            </NewsHeader>
            <Posts>
              {" "}
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
            </Posts>{" "}
          </NewsCenter>
        </News>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 80vh;
  background: #fff5f3;
`;

const MainContainerCenter = styled.div`
  width: 1224px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const News = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  margin: 30px 0;
`;

const NewsHeader = styled.div`
  width: 100%;
  margin-top: 50px;
  color: #543243;
  font-weight: 800;
  font-size: 18px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
`;

const NewsHeaderLeft = styled.div``;

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
