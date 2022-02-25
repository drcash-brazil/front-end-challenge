import React from 'react';

import FadeLoader from "react-spinners/FadeLoader";
import styled from 'styled-components';


const SplashWrapper = styled.div`
  
  display:flex;
  justify-content:center;
  width:100%;
  height:100vh;
  align-items:center;
  position:absolute;
  top:0;
  z-index:20;
`;


const Loading = (props) => {
    return (
        <SplashWrapper>
        <FadeLoader color="#458FF6" loading={props.loading}> 
        </FadeLoader>
        </SplashWrapper>
    );
}

export default Loading;
