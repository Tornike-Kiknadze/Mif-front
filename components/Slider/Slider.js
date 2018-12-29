import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Right from '../../static/svg/Right'
import Left from '../../static/svg/Left'

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backUrl: 'http://localhost:1337'
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <Right />,
      prevArrow: <Left />
    }

    const { data } = this.props
    const { backUrl } = this.state
    return (
      <Override>
        <Slider {...settings}>
          {data &&
            data.map(item => (
              <SliderItem>
                <SliderInner>
                  {item.MainImage.url && (
                    <ItemImage img={`${backUrl}/${item.MainImage.url}`} />
                  )}
                  <ItemDate>3909023.233</ItemDate>
                  <ItemTitle>ASDF</ItemTitle>
                </SliderInner>
              </SliderItem>
            ))}
        </Slider>
      </Override>
    )
  }
}

const Override = styled.div`
  .slick-slide:focus {
    outline: none;
  }

  .slick-slide {
    &:focus,
    a {
      outline: none;
    }
    .slick-prev,
    .slick-next {
      font-size: 0;
      line-height: 0;

      position: absolute;
      top: 50%;

      display: block;

      width: 20px;
      height: 20px;
      padding: 0;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);

      cursor: pointer;

      color: transparent;
      border: none;
      outline: none;
      background: transparent;
    }
    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus {
      color: transparent;
      outline: none;
      background: transparent;
    }
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before {
      opacity: 1;
    }
    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before {
      opacity: 0.25;
    }

    .slick-prev:before,
    .slick-next:before {
      font-family: 'slick';
      font-size: 20px;
      line-height: 1;

      opacity: 0.75;
      color: white;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .slick-prev {
      left: -25px;
    }
    [dir='rtl'] .slick-prev {
      right: -25px;
      left: auto;
    }
    .slick-prev:before {
      content: '←';
    }
    [dir='rtl'] .slick-prev:before {
      content: '→';
    }

    .slick-next {
      right: -25px;
    }
    [dir='rtl'] .slick-next {
      right: auto;
      left: -25px;
    }
    .slick-next:before {
      content: '→';
    }
    [dir='rtl'] .slick-next:before {
      content: '←';
    }
  }

  .slick-slide,
  .slick-slide * {
    outline: none !important;
  }
`

const SliderItem = styled.div`
  height: 350px;
  box-sizing: border-box;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`

const SliderInner = styled.div`
  width: 100%;
  height: 100%;
`

const ItemImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  border-radius: 5px;
`

const ItemTitle = styled.h3`
  margin-top: 7px;
  font-size: 18px;
  color: #543243;
`

const ItemDate = styled.h3`
  font-size: 12px;
  color: #7f6371;
  margin-top: 5px;
`
