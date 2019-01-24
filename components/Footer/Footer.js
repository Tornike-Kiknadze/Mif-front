import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';
import TengoImg from '../../static/img/tengo.png';
import SandroImg from '../../static/img/sandro.png';

const Footer = () => {
  return (
    <Container>
      <Center>
        <Left>
          <MifLogo>Mif</MifLogo>
          <Text>
            We Are Mif written by Steve McKinney, focusing on the design and
            build of websites. The aim is to bridge the gap between the two in
            building your design. It started — and remains — a way to encourage
            self learning and sharing, through a mixture of in depth tutorials
            and quick tips.
          </Text>
          <YCFU>
            <span>You Can Find Us elsewhere</span>
            <Links>
              <Link>Facebook</Link>
              <Link>YouTube</Link>
              <Link>LinkedIn</Link>
            </Links>

            <C>© Media Inovations Foundation 2019</C>
          </YCFU>
        </Left>
        <Right>
          <Dude>
            <DudeTengo img={TengoImg} />
            <Span>Tengo K. Guali</Span>
          </Dude>
          <Dude>
            <DudeSandro img={SandroImg} />
            <Span>Sandro Gviandadze</Span>
          </Dude>
        </Right>
      </Center>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 8rem 3rem 6rem;
  box-sizing: border-box;
  background-color: #e1f2f2;
`;

const Center = styled.div`
  width: 1228px;
  margin: auto;
  display: flex;
  height: 330px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const MifLogo = styled.div`
  color: #ff7e6d;
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
  font-family: Pacifico;
`;

const Text = styled.div`
  width: 70%;
  margin-top: 20px;
  color: #62535c;
  line-height: 1.5;
`;

const YCFU = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  span {
    font-weight: 600;
    font-size: 16px;
    color: #62535c;
  }
`;

const Links = styled.div`
  flex: 1;
  margin-top: 6px;
`;

const Link = styled.a`
  flex: 1;
  margin-right: 15px;
  &:nth-child(1) {
    color: #3c5a99;
  }
  &:nth-child(2) {
    color: #bf2626;
  }
  &:nth-child(3) {
    color: #0077b5;
  }
`;

const C = styled.div`
  margin-top: 50px;
  font-size: 16px;
  color: #938a8f;
  font-weight: 600;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Dude = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;

const DudeTengo = styled.div`
  width: 150px;
  height: 200px;
  background-size: cover;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
`;

const DudeSandro = styled.div`
  width: 130px;
  height: 196px;
  background-size: cover;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
`;

const Img = styled.img``;

const Span = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #62535c;
  margin-top: 15px;
`;
export default Footer;
