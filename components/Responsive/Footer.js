import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import SvgHome from "./Assets/HomeSvg";
import SvgBlog from "./Assets/BlogSvg";
import SvgAbout from "./Assets/AboutSvg";
import SvgContact from "./Assets/ContactSvg";

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0 // or your default width here
    };
  }
  componentDidMount() {
    this.handleWindowSizeChange(); // Set width
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillMount() {
    // Don’t use this as the API is deprecated
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
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
    } else return null;
  }
}

const ContainerText = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 100%;
  position: fixed;
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
