import { createStyles } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },

    '::-webkit-scrollbar': {
      width: '0.5rem',
      height: '0.5rem',
    },

    '::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px #F4F6F8',
      borderRadius: 10,
      background: '#F4F6F8',
    },

    '::-webkit-scrollbar-thumb': {
      background: '#9e9e9e',
      borderRadius: 10,
      '&:hover': {
        background: '#bdbdbd',
      },
    },

    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
    },

    body: {
      backgroundColor: '#f4f6f8',
      height: '100%',
      width: '100%',
      fontFamily: 'Roboto, sans-serif',
    },

    a: {
      textDecoration: 'none',
      color: 'inherit',
    },

    button: {
      cursor: 'pointer',
    },
  },
}));

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
