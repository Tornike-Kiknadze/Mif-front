import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { media } from "../../globals/breakpoints";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContainerCenter>
        <StyledLink to="\">
          <MenuItem>mif</MenuItem>
        </StyledLink>
        <Menu>
          <StyledLink href="work">
            <MenuItem>work</MenuItem>
          </StyledLink>
          <StyledLink href="services">
            <MenuItem>services</MenuItem>
          </StyledLink>
          <StyledLink href="about">
            <MenuItem>about</MenuItem>
          </StyledLink>
          <StyledLink href="contact">
            <MenuItem>contact</MenuItem>
          </StyledLink>
          <StyledLink href="blog">
            <MenuItem>blog</MenuItem>
          </StyledLink>
        </Menu>
        {/* <LanguageSwitcher>Language: En</LanguageSwitcher> */}
      </HeaderContainerCenter>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  position: fixed;
  z-index: 200;
  font-family: Averta;
`;

const HeaderContainerCenter = styled.div`
  width: 1024px;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #ff7e6d;
  font-size: 24px;
  font-weight: 800;
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  list-style: none;
  color: #ff7e6d;
  margin-left: 15px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LanguageSwitcher = styled.div`
  color: #fff;
  font-size: 20px;
`;

const SubMenuLink = styled(Link)`
  text-decoration: none;
`;

const SubMenuItem = styled.div`
  list-style: none;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  padding: 15px 20px;
  box-sizing: border-box;
  &:hover {
    background-color: #333;
  }
`;

export default Header;
