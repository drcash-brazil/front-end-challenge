import { useForm, useStep } from "react-hooks-helper";
import { Card, Stepper, StepLabel, Typography, Step, StepContent } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import styles from './style.module.css';
import Confirm from "./components/Confirm";
import Done from "./components/Done";
import formInitialFieldsValue from "./utils/formInitialFieldsValue";
import formStepsConfig from "./utils/formStepsConfig";

const ClinicForm = () => {
  const history = useHistory();
  const [formData, setForm] = useForm(formInitialFieldsValue);
  const { step, navigation, index } = useStep({
    steps: formStepsConfig,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  const handleBackClick = (ev) => {
    ev.stopPropagation();

    if (step.id === "done") {
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
      <Card className="pa20 w-100 h-100 flex flex-column items-start">
        <div className="flex items-center">
          <ArrowBackIcon className="pointer" onClick={handleBackClick} />
          <h1 className="ml16 f26">Cadastro de nova clínica</h1>
        </div>

        <div className="w-100 h-100 flex items-start mt12">
          <div className="mr32">
            <Stepper activeStep={index} orientation="vertical">
              {formStepsConfig.map((step, index) => {
                if (index === 3) return null
                return (
                  <Step key={step.label}>
                    <StepLabel>
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                    </StepContent>
                  </Step>
                )
              })}
            </Stepper>
          </div>
          <div className={styles.formWrapper}>
            <div className="flex flex-column justify-center">
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
          </div>
        </div>

      </Card>
    </div>
  );
}

export default ClinicForm;