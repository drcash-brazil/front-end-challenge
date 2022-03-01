import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import Theme from "../../../utils/pallete/index.jsx";

import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((Theme) => ({
  root: {
    display: "flex",
    height: "580px",
    padding: "50px",
  },

  title: {
    fontSize: "2.5rem",
    color: "#000000",
    mixBlendMode: "normal",
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

const HeroWrapper = styled.section`
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
    font-size:25px;
   }
   h6{
  font-size:15px;
  margin:10px 0px;
  width:80%;
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
  display: flex;
  align-self: end;
  width: 95%;
`;

export default function Hero() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
      <HeroWrapper className={classes.root}>
        <Box className="leftAside">
          <Typography className={classes.title} variant="h3">
            Virtual healthcare for you
          </Typography>

          <Typography className={classes.subtitle} variant="subtitle1">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Consult today
          </Button>
        </Box>
        <Box className="rightAside">
          <Image src={`${process.env.PUBLIC_URL}heroImage.svg`} />
        </Box>
      </HeroWrapper>
    </ThemeProvider>
  );
}
