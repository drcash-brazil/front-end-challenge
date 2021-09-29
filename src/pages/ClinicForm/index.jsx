import { useForm, useStep } from "react-hooks-helper";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import doctorsImage from 'assets/img/doctors.png';
import styles from './style.module.css';
import Confirm from "./components/Confirm";
import Done from "./components/Done";

const ClinicForm = () => {
  const defaultData = {
    name: "",
    cpf: "",
    socialCapital: "",
    cep: "",
    state: "",
    city: "",
    neightborhood: "",
    street: "",
    number: ""
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
  
  return (
    <Card className="flex pa32">
      <div className="w-50 flex flex-column justify-center">
        <div className="flex items-center pl32 mb16">
          <Link to="/clinic" className="black">
            <ArrowBackIcon/> 
          </Link>

          <h1 className="ml16">Cadastro de nova clínica</h1>
        </div>
        <div className={styles.formWrapper}>
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

      <div className="w-50">
        <div className={styles.imgWrapper}>
          <img src={doctorsImage} alt="Doctors" />
        </div>
      </div>
    </Card>
  );
}

export default ClinicForm;