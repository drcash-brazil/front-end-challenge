import React from 'react';

import ScaleLoader from "react-spinners/ScaleLoader";
import styled from 'styled-components';


const SplashWrapper = styled.div`
  
  display:flex;
  justify-content:center;
  width:100%;
  height:100vh;
  align-items:center;


`;


const Splash = (props) => {
    return (
        <SplashWrapper>
        <ScaleLoader  size={1000} color="#458FF6" loading={props.loading}> 
        </ScaleLoader>
        </SplashWrapper>
    );
}

export default Splash;
