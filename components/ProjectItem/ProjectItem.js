import React, { Component } from "react";

import Link from "next/link";
import styled from "styled-components";
import { media } from "../../globals/breakpoints";
import Dash from "../../static/svg/Dash";
import RightArrow from "../../static/svg/RightArrow";
const BackUrl = "http://localhost:1337";

const ProjectItem = ({ color, id, data }) => {
  const { title, subtitle, category, date, mainImage, content } = data;
  return (
    <Container>
      <Link
        as={`/blogpage/${data && data._id}`}
        href={`/blogpage/?id=${data && data._id}`}
      >
        <ImgContainer>
          <ImageWrapper />
          <Link
            as={`/blogpage/${data && data._id}`}
            href={`/blogpage/?id=${data && data._id}`}
          >
            <Category color={color}>{category}</Category>
          </Link>
          <Date color={color}>
            <Day>12</Day>
            <Month>Sep</Month>
          </Date>
          <Img
            src={`${BackUrl}/${mainImage && mainImage.url && mainImage.url}`}
          />
        </ImgContainer>
      </Link>
      <TextContainer color={color}>
        <TextContent>
          <Link
            href={`/blogpage/?id=${data && data._id}`}
            as={`/blogpage/${data && data._id}`}
          >
            <Title color={color}>{title && title}</Title>
          </Link>
          <Subtitle color={color}>{subtitle && subtitle}</Subtitle>
          <Link
            as={`/blogpage/${data && data._id}`}
            href={`/blogpage/?id=${data && data._id}`}
          >
            <Content color={color}>{content && content}</Content>
          </Link>
        </TextContent>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1 0 380px;
  max-width: 369px;
  height: 460px;
  margin: 20px;
  box-sizing: border-box;
  flex-direction: column;
  background: white;
  text-align: justify;
  transition: 0.4s ease-out;
  border-radius: 6px;
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);

  a {
    background-image: linear-gradient(to bottom, transparent 90%, #000 25%);
    background-size: 0% 100%;
    background-repeat: no-repeat;
    text-decoration: none;
    text-decoration: none;
    color: #464242;
    position: relative;
    text-align: center;
    font-size: 1.5rem;
    transition: background-size 0.4s ease;
    &:hover,
    &:focus {
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
`;

const Date = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => (props.color ? props.color : "#ff7e6d")};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  right: 15px;
  top: 20px;
  z-index: 9999;
  color: #fff;
  font-weight: 800;
`;

const Day = styled.div``;

const Month = styled.div``;

const Category = styled.div`
  width: 120px;
  height: 30px;
  background-color: ${props => (props.color ? props.color : "#ff7e6d")};
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const ImgContainer = styled.div`
  width: 100%;
  flex: 2;
  object-fit: cover;
  overflow: hidden;
  align-self: flex-start;
  position: relative;
  transition: 0.5s;
  cursor: pointer;
  ${Container}:hover & {
    flex: 1;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  ${Container}:hover & {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 200ms ease;
  cursor: pointer;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: 0.5s;
  background: #fcfcfc;
  border-bottom: 5px solid;
  border-color: ${props => (props.color ? props.color : "#ff7e6d")};
  color: #62535c;
  ${Container}:hover & {
    flex: 1.5;
    cursor: pointer;
    background: #fff;
  }
  position: relative;
  overflow: hidden;
`;

const TextContent = styled.div``;

const Title = styled.span`
  font-size: 26px;
  font-weight: 800;
  &:hover {
    color: #7a7a7a;
  }
`;

const Subtitle = styled.div`
  font-size: 16px;
  color: #ff7e6d;
`;

const Content = styled.div`
  margin-top: 20px;
  overflow: hidden;
  transition: 0.5s;
  max-height: 0;
  overflow: hidden;

  ${Container}:hover & {
    max-height: 16ch;
  }
`;

export default ProjectItem;
