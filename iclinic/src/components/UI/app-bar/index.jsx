import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Link } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    background: "gray",
    boxShadow: "none",
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.navbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Iclinic
        </Typography>
        <Box component="ul" clone >
          <li>
            <Link href="#" onClick={(e) => e.preventDefault}></Link>
          </li>
          <li></li>
          <Link
            href="#"
            onClick={(e) => e.preventDefault}
            color="inherit"
          ></Link>
          <li>
            <Link
              href="#"
              onClick={(e) => e.preventDefault}
              variant="body2"
            ></Link>
          </li>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
