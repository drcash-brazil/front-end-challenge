import React from 'react'
import { Box, TextField } from '@mui/material';

const Input = props => {

    const { name, label, value, error = null, onChange, type = '', InputProps = {} } = props;
    return (
        <Box my={1} sx={{
            width: '100%'
        }} >
            <TextField
                variant="outlined"
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                InputProps={InputProps}
                sx={{
                    width: '100%'
                }}
                {...(error && { error: true, helperText: error })}
            />
        </Box>
    )
}

export default Input;