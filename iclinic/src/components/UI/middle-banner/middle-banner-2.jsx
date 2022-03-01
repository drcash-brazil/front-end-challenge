import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import Theme from "../../../utils/pallete/index.jsx";

import Slide from "react-reveal/Slide";

import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((Theme) => ({
  root: {
    display: "flex",
    padding: "0 20px",
  },
  title: {
    fontSize: "30px",
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
  },
  button: {
    borderRadius: "55px",
    background: "primary",
  },
}));


const MiddlerBannerWrapper = styled.section`
align-items:center;
margin-bottom:50px;
  .rightAside {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    padding: 10px 50px;
  }

  .leftAside {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    width: 40%;
    padding: 10px 50px;
    height: 70%;
    margin-top: 30px;
  }

  @media (max-width: 776px) {
    flex-direction: column;
    height: unset;
    padding: 10px;
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
    .leftAside {
      flex-direction: column;
      width: 100%;
      height: 70%;
      padding: 10px 5px;
    }
    .rightAside {
      width: 100%;
      display: flex;
      padding: 10px 0px;
      img {
        width: 90%;
      }
    }
  }

`;

const Image = styled.img`
 
  width: 90%;
`;

export default function MiddleBannerQ() {
  const classes = useStyles();
  return (
    <MiddlerBannerWrapper className={classes.root}>
      <ThemeProvider theme={Theme}>
        <Box className="leftAside">
       
            <Typography className={classes.title} variant="h3">
              Download our mobile apps
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </Typography>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Download
            </Button>

        </Box>

        <Box className="rightAside">
   
            <Image
              src={`${process.env.PUBLIC_URL}trafalgar-illustration.svg`}
            />

        </Box>
      </ThemeProvider>
    </MiddlerBannerWrapper>
  );
}
