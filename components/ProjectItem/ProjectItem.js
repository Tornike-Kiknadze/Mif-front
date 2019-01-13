import React, { Component } from "react";

import Link from "next/link";
import styled from "styled-components";
import { media } from "../../globals/breakpoints";
import Dash from "../../static/svg/Dash";
import RightArrow from "../../static/svg/RightArrow";
/* const BackUrl = "http://localhost:1337"; */

const ProjectItem = () => {
  /*   const { id, Title, category, date, mainImage, content } = data; */
  return (
    <Container>
      <Img src="https://source.unsplash.com/random" />
      <h2>
        <SpanCategory>
          <a href="#">News</a>
        </SpanCategory>
        <Span>
          <a href="#">Designing the First All-in-One, Wearable Breast Pump</a>
        </Span>
      </h2>

      {/* <h1>Mountain</h1>
        <p>
          Lorem Ipsum is simply dummy text from the printing and typeseting
          industry
        </p>
        <Link href={{ pathname: "/projectpage", query: { id } }}>
          <InfoButton>Read More</InfoButton>
        </Link> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  overflow: hidden;

  width: 280px;
  height: 360px;
  margin: 20px;
  box-sizing: border-box;
  flex-direction: column;
  background: white;
  border-bottom: 8px solid black;
  text-align: justify;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);

  a {
    background-image: linear-gradient(to bottom, transparent 90%, #000 25%);
    background-size: 0% 100%;
    background-repeat: no-repeat;
    text-decoration: none;
    text-decoration: none;
    color: #000;
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

const Text = styled.div`
  width: 100%;
  height: 50%;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  background-color: tan;
`;
const Span = styled.div`
  padding: 1rem;
`;
const SpanCategory = styled.div`
  padding-left: 1rem;

  a {
    font-size: 1rem;
    color: #ff988a;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-bottom: 0.5rem solid #ff988a;
  align-self: flex-start;
`;

export default ProjectItem;
