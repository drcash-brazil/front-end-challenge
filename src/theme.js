import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#0FBD90',
        },
        secondary: {
            main: '#073B4C',
        },
        error: {
            main: red.A400,
        },
        white: {
            main: '#fff'
        }
    },
});

export default theme;