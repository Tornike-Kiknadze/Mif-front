import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { media } from "../../globals/breakpoints";
import Dash from "../../static/svg/Dash";
import RightArrow from "../../static/svg/RightArrow";
const BackUrl = 'http://localhost:1337'

const PostItem = ({ data }) => {
  const { id, Title, category, date, mainImage, content } = data
  return (
    <Container>
      <Top image={`${BackUrl}${mainImage.url}`}></Top>
      <Date>
        <Time>{date}</Time>
        <Dashes>
          <Dash />
        </Dashes>
      </Date>
      <Bottom>
        <PostTitle>{Title}</PostTitle>
        <Content>
            {content}
        </Content>
        <Footer>
          <Category>{category}</Category>
          <Dash />
            <Link href={{ pathname: '/blog', query: { id } }}>
               <ContinueReading>
                  <Text> Continue Reading</Text>
                  <Icon>
                    <RightArrow width={15} height={15} fill={"#27cba4"} />
                  </Icon>
               </ContinueReading>
            </Link>
        </Footer>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  flex: 1 0 350px;
  max-width: 388px;
  height: auto;
  margin: 10px;
`;

const Top = styled.div`
  width: 100%;
  height: 300px;
  background-image:url( ${props => (props.image)});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

const Date = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Time = styled.div`
  color: #543243;
  font-weight: 800;
`;

const Dashes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

const Bottom = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.div`
  width: 100%;
  color: #ff7e6d;
  font-weight: bold;
  font-size: 24px;
`;

const Content = styled.div`
  color: #7f6371;
  font-size: 16px;
  margin-top: 10px;
`;

const Footer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

const Category = styled.div`
  color: #543243;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #27cba4;
  }
`;

const ContinueReading = styled.div`
  color: #543243;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  &:hover {
    color: #27cba4;
  }
`;

const Text = styled.p`
  margin-right: 5px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;
  ${ContinueReading}:hover & {
    transform: translateX(5px);
  }
`;

export default PostItem;
