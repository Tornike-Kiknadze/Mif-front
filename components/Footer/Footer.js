import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <ContainerText>
        iamsteve is a blog written by Steve McKinney, focusing on the design and
        build of websites. The aim is to bridge the gap between the two in
        building your design. It started — and remains — a way to encourage self
        learning and sharing, through a mixture of in depth tutorials and quick
        tips. You can find me elsewhere dribbble, twitter, behance and linkedin.
      </ContainerText>
      <ContainerPhoto>
        iamsteve is a blog written by Steve McKinney, focusing on the design and
        build of websites. The aim is to bridge the gap between the two in
        building your design. It started — and remains — a way to encourage self
        learning and sharing, through a mixture of in depth tutorials and quick
        tips. You can find me elsewhere dribbble, twitter, behance and linkedin.
      </ContainerPhoto>
    </Container>
  );
};

const ContainerText = styled.div`
  flex-basis: 40%;
  text-align: justify;
  line-height: 2rem;
`;

const ContainerPhoto = styled.div`
  flex-basis: 40%;
  text-align: justify;
  line-height: 2rem;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 8rem 3rem 6rem;
  box-sizing: border-box;
  background-color: #f7fbfb;
`;

export default Footer;
