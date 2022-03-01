import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Slider from 'react-reveal';

import Theme from "../../../utils/pallete/index.jsx";

import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((Theme) => ({
  root: {
    display: "flex",
    padding: "10px",
    marginTop: "20px",
  },
  title: {
    fontSize: "27px",
    color: "#000000",
    "mix-blend-mode": "normal",
  },
  subtitle: {
    fontFamily: "Roboto",
    fontStyle: " normal",
    fontWeight: "300",
    fontSize: "17px",
    lineHeight: "32px",
    color: "#7D7987;",
    margin:"10px 0px"
  },
  button: {
    borderRadius: "55px",
    background: "primary",
  },
}));

const MiddlerBannerWrapper = styled.section`

justify-content:space-around;


.rightAside{
  display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    width: 40%;
    padding: 10px 50px;
    height: 70%;
    margin-top: 30px;
}
.leftAside{
     display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    padding: 10px 50px;
}
@media(max-width:776px){
  flex-direction:column;
  button{
    font-size:10px;
  }
   h3{
    font-size:20px;
   }
   h6{
  font-size:15px;
  margin:10px 0px;
  text-align:start;
   }
  .rightAside{
    padding: 10px 20px;
    width:100%;
  }
}
`;
const Image = styled.img`
  display: flex;
  width: 90%;
`;

export default function MiddleBannerA() {
  const classes = useStyles();
  return (
    <MiddlerBannerWrapper className={classes.root} >
      <ThemeProvider theme={Theme}>
        <Box className="lefttAside">
   <Slider left>
      
            <Image src={`${process.env.PUBLIC_URL}m1.svg`} />
            </Slider>
        </Box>

        <Box className="rightAside">
<Slider left>
            <Typography className={classes.title} variant="h3">
            Principais prestadores de cuidados de saúde
            </Typography>

            <Typography className={classes.subtitle} variant="subtitle1">
            A Iclinic oferece cuidados de saúde progressivos e acessíveis,
              acessível em dispositivos móveis e online para todos. Para nós, não é apenas
              trabalhar. Temos orgulho das soluções que oferecemos para todos
            </Typography>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Saber mais
            </Button>
            </Slider>
        </Box>
      </ThemeProvider>
    </MiddlerBannerWrapper>
  );
}
