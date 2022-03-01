import React from 'react'
import styled from 'styled-components';


const CardWrapper = styled.div`
display:flex;
background: #FFFFFF;
box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
border-radius: 20px;
align-items:start;
flex-direction:column;
justify-content:space-around;
width :30%;
height :354px; 
margin:10px;
padding:25px;´

p{
  font-family: Mulish;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 28px;
color: #7D7987;
}
&:hover{
  background-color:#458FF6;
  transition:1s;

  h4{
    color:#FFF;
  }
  p{
    color:#FFF;
  }

}

@media(max-width:776px){
  width:100%;
}
`;

function Card(props) {
  return (
    <CardWrapper>

         <img alt={props.tittle} src={props.image} />  
          <h4>{props.tittle}</h4>
          <p> {props.description} </p>
   
    </CardWrapper>
  )
}

export default Card