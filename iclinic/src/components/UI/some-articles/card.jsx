import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
 
  .imgWrapper {
    border-radius: 20px;
    height: 40%;
     width:100%;
    img {
      border-radius: 20px 20px 0px 0px;
      width: 100%;
    }
  }
  .contentWrapper {
    height: 60%;
    display: flex;
    align-items: start;
    flex-direction: column;
    padding: 25px 20px;
    justify-content: space-between;
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 21px;
      line-height: 32px;
      color: #000000;
      mix-blend-mode: normal;
    }
    .desc {
      font-family: Mulish;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 28px;

      color: #7d7987;

      mix-blend-mode: normal;
    }
    .readMore {
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 28px;
      color: #4089ed;
      mix-blend-mode: normal;
    }
  }
  @media(max-width:776px){
  width:100%;
  margin: 10px 0px;
  height: 100%;
.contentWrapper{
  padding:45px 20px;
}
  }
`;
function Card({ image, title, description }) {
  return (
    <CardWrapper>
      <div className="imgWrapper">
        <img alt={title} src={image} />
      </div>
      <div className="contentWrapper">
        <h3>{title}</h3>
        <p className="desc">{description}</p>
        <p className="readMore"> Ler mais » </p>
      </div>
    </CardWrapper>
  );
}

export default Card;
