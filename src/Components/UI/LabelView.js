import React from 'react'
import { Box, Typography } from '@mui/material';

const labelStyle = {
    sx: {
        fontSize: 12,
        marginBottom: 0,
        marginTop: 3
    },
    color: 'text.secondary',
    gutterBottom: true
};

const valueStyle = {
    variant: 'h7',
    component: 'div'
}

const LabelView = (props) => {
    const { label, value } = props;
    return (
        <Box>
            <Typography {...labelStyle} >
                {label}
            </Typography>
            <Typography {...valueStyle}>
                {value}
            </Typography>
        </Box>
    )
}

export { LabelView };