import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormAction, useForm } from "../../contexts/FormContext";

import { Theme } from "../../components/Theme";
import InputMask from "react-input-mask";

import * as C from "./styles";

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "" && state.cpf !== "" && state.capital !== "") {
      navigate("/step2");
    } else {
      alert("Preencha os dados.");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setName,
      payload: e.target.value,
    });
  };

  const handleCpfChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setCPF,
      payload: e.target.value.replace(/\D/g, ""),
    });
  };

  const handleCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setCapital,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar pelo nome da Clínica</h1>
        <p>Preencha o campo abaixo com o nome da sua clínica</p>

        <hr />

        <label>
          Nome da clínica
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          CPF do responsável
          <InputMask
            type="text"
            mask="999.999.999-99"
            autoFocus
            value={state.cpf}
            onChange={handleCpfChange}
          />
        </label>
        <br />
        <label>
          Capital social da clínica
          <input
            type="text"
            autoFocus
            value={state.capital}
            onChange={handleCapitalChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
