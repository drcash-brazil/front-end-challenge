import React from 'react'
import { Button as MuiButton } from '@mui/material';

const Button = props => {

    const { text, size, variant, onClick, isBackButton = false, ...other } = props

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            onClick={onClick}
            {...other}>
            <span style={{ color: isBackButton ? '' : 'white' }}>
                {text}
            </span>
        </MuiButton>
    )
}

export default Button;