import { createTheme } from '@material-ui/core/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#458FF6',
      darker: '#053e85',
      lightBorders: '#458FF6',
      gradient: 'linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)',
    },
    secundary:{
     main: '#1F1534',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    }
  }
});

export default Theme; 