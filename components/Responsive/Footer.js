import React from "react";
import Link from "next/link";
import styled from "styled-components";
import SvgHome from "./Assets/HomeSvg";

const Responsive = () => {
  return (
    <Container>
      <ContainerText>
        <Responsive /> <Responsive /> <Responsive /> <Responsive />{" "}
        <Responsive />
        <SvgHome width={40} height={40} />
      </ContainerText>
    </Container>
  );
};

const ContainerText = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  align-items: bottom;
  justify-content: space-between;

  padding: 3rem 8rem 3rem 6rem;
  box-sizing: border-box;
  background-color: tomato;
`;

export default Responsive;
