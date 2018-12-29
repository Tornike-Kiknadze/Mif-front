import React from "react";
import Link from "next/link";
import styled from "styled-components";
import SvgHome from "./Assets/HomeSvg";
import SvgBlog from "./Assets/BlogSvg";
import SvgAbout from "./Assets/AboutSvg";
import SvgContact from "./Assets/ContactSvg";

const Responsive = () => {
  return (
    <Container>
      <ContainerText>
        <SvgItem>
          <SvgHome width={40} height={40} />
          <p>home</p>
        </SvgItem>

        <SvgItem>
          <SvgAbout width={40} height={40} /> <p>about</p>
        </SvgItem>
        <SvgItem>
          <SvgBlog width={40} height={40} /> <p>blog</p>
        </SvgItem>
        <SvgItem>
          <SvgContact width={40} height={40} />
          <p>contact</p>
        </SvgItem>
      </ContainerText>
    </Container>
  );
};

const ContainerText = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 100%;

  height: auto;
  align-items: bottom;
  justify-content: space-between;

  padding: 3rem 8rem 3rem 6rem;
  box-sizing: border-box;
  background-color: white;
`;
const SvgItem = styled.div`
  text-align: center;
`;
export default Responsive;
