import { useHistory } from "react-router";

import Button from 'components/ui/Button';

const Done = () => {
  const history = useHistory();
  return (
    <div className="flex flex-column justify-center">
      <h2>Clínica cadastrada com sucesso!</h2>
      <div className="w-auto ">
        <Button buttonValue="Voltar" type="button" onClick={() => history.push("/clinic")} variant="outlined" color="default" />
      </div>
    </div>
  );
}

export default Done;