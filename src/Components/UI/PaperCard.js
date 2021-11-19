import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical"
  },
  ellipsis2: {
    "-webkit-line-clamp": 2
  },
  ellipsis3: {
    "-webkit-line-clamp": 3
  }
});

const PaperCard = (props) => {
    const { title, info, img } = props;
    const classes = useStyles();
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={img}
                    alt={title}
                />
                <CardContent>
                    <Typography
                        className={`${classes.multiLineEllipsis} ${classes.ellipsis2}`} 
                        gutterBottom 
                        variant="h5" 
                        component="div">
                        {title}
                    </Typography>
                    <Typography 
                        className={`${classes.multiLineEllipsis} ${classes.ellipsis3}`} 
                        variant="body2" 
                        color="text.secondary">
                        {info}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export { PaperCard }