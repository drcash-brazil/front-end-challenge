import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import data from "./data.js";
import CarrouselItem from "./carrousel-item";
import Typography from "@material-ui/core/Typography";

const CarrouselWrapper = styled.div`
  background: linear-gradient(208.18deg, #67c3f3 9.05%, #5a98f2 76.74%);
  border-radius: 24px;
  
  margin: 0  auto;
  width: 95%;
  padding: 25px 5px;
  .slider {
      .slick-arrow{
        display:none;
      }
    .slick-dots {
      position: absolute;
      bottom: -55px;
      button{
        &:before{
          font-size:10px;
          color:#458FF6;
        }
      }
    }
  }
  .tittle {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
     font-size:20px;
    &:after {
      content: "____";
    }
  }
`;

function Carrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <CarrouselWrapper id="newletter">
      <Typography variant="h5" className="tittle">
        O que os clientes dizem
      </Typography>
      <Slider className="slider" {...settings}>
        {data.map((item, id) => {
          return (
            <CarrouselItem
              comment={item.comment}
              avatar={item.avatar}
              name={item.name}
              role={item.role}
              key={id}
            />
          );
        })}
      </Slider>
    </CarrouselWrapper>
  );
}

export default Carrousel;
