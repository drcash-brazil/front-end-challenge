import { useForm, useStep } from "react-hooks-helper";
import { Card } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import styles from './style.module.css';
import Confirm from "./components/Confirm";
import Done from "./components/Done";

const ClinicForm = () => {
  const history = useHistory();
  const defaultData = {
    name: "",
    cpf: "",
    socialCapital: "",
    cep: "",
    state: "",
    city: "",
    neightborhood: "",
    street: "",
    number: "",
    complement: "",
  };
  
  const steps = [
    { id: "sobre" },
    { id: "endereço" },
    { id: "revisão" },
    { id: "done" },
  ];

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  const handleBackClick = (ev) => {
    ev.stopPropagation();

    if(step.id === "done") {
      return history.push("/clinic");
    }

    confirmAlert({
      title: 'Tem certeza?',
      message: 'Ao voltar para a página anterior os dados preenchidos serão perdidos!',
      buttons: [
        {
          label: 'Sim',
          onClick: () => history.push("/clinic")
        },
      ]
    });
  }
  
  return (
    <div className={styles.wrapper}>
      <Card className="pa20 w-100 h-100">
        <div className="flex flex-column justify-center">
          <div className="flex items-center">
            <ArrowBackIcon className="pointer" onClick={handleBackClick} /> 

            <h2 className="ml16">Cadastro de nova clínica</h2>
          </div>
          <div className="w-100 mt12">
              {step.id === "sobre" && (
                <FirstStep {...props} />
              )}
              {step.id === "endereço" && (
                <SecondStep {...props} />
              )}
              {step.id === "revisão" && (
                <Confirm {...props} />
              )}
              {step.id === "done" && (
                <Done />
              )}
          </div>
        </div>

        {/* <div className="w-50">
          <div className={styles.imgWrapper}>
            <img src={doctorsImage} alt="Doctors" />
          </div>
        </div> */}
      </Card>
    </div>
  );
}

export default ClinicForm;