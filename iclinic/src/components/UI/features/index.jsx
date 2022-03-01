import React from 'react'
import Card from './card'
import styled from 'styled-components';
import data from './data';
import { Typography } from '@material-ui/core';

const FeaturesWrapper = styled.section`
display:flex;
align-items:center;
justify-content:center;
padding:0px 90px;
flex-wrap:wrap;
background-image: url(${props => props.img});
background-repeat:no-repeat;
@media(max-width:776px){
padding:0px 50px;

}
`;

const Text = styled(Typography)`
text-align:center;
font-style: normal;
font-weight: bold;
font-size: 30px;
display:flex;
flex-direction:column;
&:after{
  content:'______';
  margin-bottom:10px;
  color: #7D7987;
  font-size:20px;
}

`;
const Description = styled(Typography)`
display:flex;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 30px;
text-align: center;
color: #7D7987;
padding: 15px 200px;
margin-bottom:10px;
@media(max-width:776px){

   font-size:14px;
  padding:10px 16px;
  line-height:20px;

}
`;

function Features() {
  return (
     <>
      <Text  variant="h5"  className="tittle"> Nossos Serviços </Text>
      <Description variant='subtitle4'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors 
      you can consult with us which type of service is suitable for your health </Description>
    <FeaturesWrapper  img={ `${process.env.PUBLIC_URL}Vector.svg` }>
         {data.map((item , id) =>{
           return(
                <Card key={id} description={item.description} tittle={item.tittle}   image={ `${process.env.PUBLIC_URL+item.img}` }  />
           )

         } )}

    </FeaturesWrapper>
    </>
  )
}

export default Features