import DrCash from '../../assets/logoDrCash.png';
import Logo from '../../components/Logo';

const Welcome = () => (
  <div style={{
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }}
  >
    <h1>Bem vindo a iClinic</h1>

    <p>Uma iniciativa:</p>
    <Logo />
  </div>
);

export default Welcome;
