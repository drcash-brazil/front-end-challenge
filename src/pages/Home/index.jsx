import { useHistory } from 'react-router';
import { Typography } from '@material-ui/core';

import Button from 'components/ui/Button';
import Logo from 'components/ui/Logo';
import styles from './style.module.css';
import doctorsImage from 'assets/img/doctors.svg';

const Home = () => {
  const history = useHistory();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className="mv16 flex justify-between">
            <Logo className="white f48" />
          </div>
          <div className="content flex flex-grow-1 justify-between">
            <div className="flex flex-column justify-center white pr72">
              <Typography variant="h2" component="div" gutterBottom>
                  Uma plataforma como você nunca viu!
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                  Gerencie sua rede de clínicas com a melhor tecnologia do mercado.
              </Typography>
              <div className="w-100 mt16">
                <Button 
                  buttonValue="Acesso interno"
                  onClick={() => history.push("/clinic")}
                />
              </div>
            </div>

            <div className={styles.imgWrapper}>
              <img src={doctorsImage} alt="Doctors" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;