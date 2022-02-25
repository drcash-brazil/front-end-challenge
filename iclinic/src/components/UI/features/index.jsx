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

`;

const Text = styled(Typography)`
text-align:center;
font-style: normal;
font-weight: bold;
font-size: 30px;
display:flex;
flex-direction:column;
&:after{
  content:'____';
  margin-bottom:10px;
}
`;

function Features() {
  return (
    <>
      <Text  variant="h5"  className="tittle"> Nossos Serviços </Text>
    <FeaturesWrapper>
         {data.map(  (item, key) =>{
           return(
                <Card  description={item.description} tittle={item.tittle}   image={ `${process.env.PUBLIC_URL+item.img}` }  />
           )

         } )}

    </FeaturesWrapper>
    </>
  )
}

export default Features