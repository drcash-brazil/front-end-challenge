import { useHistory } from "react-router";

import Button from 'components/ui/Button';
import sucessImage from 'assets/img/success.png';

const Done = () => {
  const history = useHistory();
  return (
    <div className="flex flex-column justify-center mt12 w-100">
      <h1 className="cool-blue f24 tc">Clínica cadastrada com sucesso!</h1>

      <img src={sucessImage} alt="Successo" />
      <div className="w100 tc pv16">
        <div className="w-auto mt12">
          <Button buttonValue="Voltar à listagem" type="button" onClick={() => history.push("/clinic")} />
        </div>
      </div>
    </div>
  );
}

export default Done;