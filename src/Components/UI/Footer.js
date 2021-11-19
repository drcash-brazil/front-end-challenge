import * as React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export { Footer };