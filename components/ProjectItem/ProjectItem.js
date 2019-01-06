import React, { Component } from 'react'

import Link from 'next/link'
import styled from 'styled-components'
import { media } from '../../globals/breakpoints'
import Dash from '../../static/svg/Dash'
import RightArrow from '../../static/svg/RightArrow'
const BackUrl = 'http://localhost:1337'

const ProjectItem = ({ data }) => {
  const { id, Title, category, date, mainImage, content } = data
  return (
    <Container>
      <Img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
      <Info>
        <h1>Mountain</h1>
        <p>
          Lorem Ipsum is simply dummy text from the printing and typeseting
          industry
        </p>
        <Link href={{ pathname: '/projectpage', query: { id } }}>
          <InfoButton>Read More</InfoButton>
        </Link>
      </Info>
    </Container>
  )
}

const Container = styled.div`
  margin: 20px;
  display: block;
  width: 280px;
  height: 360px;
  border-radius: 15px;
  padding: 1.5rem;
  box-sizing: border-box;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
  &:hover {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }

  &:hover:before {
    opacity: 1;
  }

  h1 {
    margin: 0px;
  }

  p {
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
  }
`

const InfoButton = styled.button`
  margin-top: 10px;
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 3px;
  background: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease;
  &:hover {
    background: #27cba4;
    color: white;
  }
`

const Info = styled.div`
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  -webkit-transform: translateY(30px);
  transform: translateY(30px);
  transition: 0.5s;
  ${Container}:hover & {
    opacity: 1;
    transform: translateY(0px);
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
`
export default ProjectItem
