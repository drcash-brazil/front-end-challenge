import React from 'react';

import ScaleLoader from "react-spinners/ScaleLoader";
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


const Splash = (props) => {
    return (
        <SplashWrapper>
        <ScaleLoader color="#458FF6" loading={props.loading}> 
        </ScaleLoader>
        </SplashWrapper>
    );
}

export default Splash;
