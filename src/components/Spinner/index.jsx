import { Container, CircularProgress } from '@mui/material';

const Spinner = () => (
  <Container
    maxWidth={false}
    style={{
      opacity: '.3',
      width: '100%',
      height: 'calc(100vh - 64px)',
      display: 'flex',
      background: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CircularProgress />
  </Container>
);

export default Spinner;
