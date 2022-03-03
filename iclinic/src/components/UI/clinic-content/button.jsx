import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  main: {
    display: "flex",
    alignSelf: "end",
    marginRight: "120px",
    marginTop: "10px",
  },
});

function AddButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const classes = useStyles();

  return (
    <Button
      className={classes.main}
      onClick={handleOpen}
      color="primary"
      variant="contained"
    >
      <Link to="/Register">
      Adicionar Clínica
      </Link>
    </Button>
  );
}

export default AddButton;
