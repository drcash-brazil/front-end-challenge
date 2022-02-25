import React from 'react'
import Card from './card'
import styled from 'styled-components';
import data from './data';

const FeaturesWrapper = styled.section`
display:flex;
align-items:center;
justify-content:center;
padding:0px 90px;
flex-wrap:wrap;

`;

function Features() {
  return (
    <FeaturesWrapper>
         {data.map(  (item, key) =>{
           return(
                <Card  description={item.description} tittle={item.tittle}   image={ `${process.env.PUBLIC_URL+item.img}` }  />
           )

         } )}

    </FeaturesWrapper>
  )
}

export default Features