import React from 'react';
import { Paper, styled, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center'
}));

const PaperInfo = (props) => {
    return (
        <Item>
            <CheckCircleIcon sx={{ mr: 1 }} />
            <Typography> {props.label} </Typography>
        </Item>
    )
}

export { PaperInfo }