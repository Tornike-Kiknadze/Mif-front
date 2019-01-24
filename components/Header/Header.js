import React, { Component } from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { media } from '../../globals/breakpoints';
import AboutIcon from '../../static/svg/About';
import ProjectsIcon from '../../static/svg/Projects';
import ContactIcon from '../../static/svg/Contact';
import NewsIcon from '../../static/svg/News';
import Projects from '../../static/svg/Projects';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastScroll: 0,
      isScroollingUp: true,
      isOnTop: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', e => {
      if (window.scrollY <= this.state.lastScroll) {
        this.setState({
          isScroollingUp: true
        });
      } else {
        this.setState({
          isScroollingUp: false
        });
      }
      this.setState({
        lastScroll: window.scrollY
      });
    });
  }
  render() {
    const { isOnTop } = this.state;
    return (
      <HeaderContainer isOnTop={isOnTop} isUp={this.state.isScroollingUp}>
        <HeaderContainerCenter>
          <StyledLink href="/">
            <Logo>Mif</Logo>
          </StyledLink>
          <Menu>
            <StyledLink href="/news">
              <MenuItem>
                <NewsIcon fill="#ff7e6d" width={17} height={17} />
                <Txt>News</Txt>
              </MenuItem>
            </StyledLink>
            <StyledLink href="/projects">
              <MenuItem>
                <ProjectsIcon />
                <Projects fill="#ff7e6d" width={20} height={20} />
                <Txt>projects</Txt>
              </MenuItem>
            </StyledLink>
            <StyledLink href="/about">
              <MenuItem>
                <AboutIcon fill="#ff7e6d" width={20} height={20} />
                <Txt>about</Txt>
              </MenuItem>
            </StyledLink>
            <StyledLink href="/contact">
              <MenuItem>
                <ContactIcon fill="#ff7e6d" width={20} height={20} />
                <Txt>contact</Txt>
              </MenuItem>
            </StyledLink>
          </Menu>
          {/* <LanguageSwitcher>Language: En</LanguageSwitcher> */}
        </HeaderContainerCenter>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  top: ${props => (props.isUp ? `0` : `-100px`)};
  transition: 0.4s;
  z-index: 9999;
`;

const HeaderContainerCenter = styled.div`
  width: 1024px;
  height: 40px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #ff7e6d;
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
  font-family: Pacifico;
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  color: #ff7e6d;
  margin: 13px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.1s;
  }
  svg {
    margin-bottom: 4px;
  }
`;

const Txt = styled.span`
  margin-left: 2px;
`;

const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
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
