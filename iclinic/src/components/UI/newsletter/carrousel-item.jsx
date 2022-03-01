import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const CarrouselItemWrapper = styled.div`
  padding: 10px 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 50%;
    width: 200px;
    border: 5px solid #fff;
  }
  .main-content {
    display: flex;
    align-items: center;
    width: 45%;
    justify-content: space-around;
  }
  .comment {
    width: 50%;
    font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 30px;
color: rgba(255, 255, 255, 0.9);
  }
  .name {
    display: flex;
    flex-direction: column;
    color: #fff;
   
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 35px;
      color: rgba(255, 255, 255, 0.85);
    }
    span:first-child {
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 30px;
    }
  }
  @media(max-width:776px){
    flex-direction:column;
    .main-content{
      width:100%;

    }
    img {
  
    width: 100px;
   
  }
  .comment{
    width:100%;
    font-size:13px;
    margin:10px 0px;
  }
  }
`;

function CarrouselItem(props) {
  return (
    <CarrouselItemWrapper>
      <Box className="main-content">
        <img src={props.avatar} alt={props.name} />
        <Typography className="name" variant="subtitle2">
          <span>{props.name}</span>
          <span>{props.role}</span>
        </Typography>
      </Box>
      <Typography className="comment" variant="subtitle2">
        {props.comment}
      </Typography>
    </CarrouselItemWrapper>
  );
}

export default CarrouselItem;
