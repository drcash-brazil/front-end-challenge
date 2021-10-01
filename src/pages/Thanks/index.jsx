import { Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styles from './style.module.css';

const Thanks = () => (
  <Card className="w-100 h-100 flex justify-center items-center">
    <div className={styles.wrapper}>
      <Typography variant="h2" component="div">
          Agradecimentos
      </Typography>

      <div className="mt16">
        <Typography variant="body1" align="center">
            Gostaria de agradecer à equipe Dr Cash pela oportunidade de estar participando mais uma vez do processo seletivo.
        </Typography>
        <Typography variant="body1" align="center">
            Espero muito que vocês gostem deste projeto!
        </Typography>
      </div>
    </div>
  </Card>
);

export default Thanks;