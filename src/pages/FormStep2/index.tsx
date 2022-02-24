import * as C from "./styles";
import { ChangeEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { FormAction, useForm } from "../../contexts/FormContext";

import { Theme } from "../../components/Theme";

import { getAdressApi } from "../../api/getAdress";
import { clinicsApi } from "../../api/clinicsAPI";

import InputMask from "react-input-mask";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormAction.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = async () => {
    if (
      state.cep !== "" &&
      state.logradouro !== "" &&
      state.bairro !== "" &&
      state.localidade !== "" &&
      state.uf !== ""
    ) {
      let json = await clinicsApi.postAllClinicData(state);
      alert("Cadastro realizado com sucesso");
      navigate("/step3");
      return json;
    } else {
      alert("Preencha os dados.");
    }
  };

  const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setCep,
      payload: e.target.value.replace(/\D/g, ""),
    });
  };

  const handleAddress = async () => {
    let json = await getAdressApi.getAddress(state.cep);
    if (json.erro) {
      alert("CEP não encontrado");
    } else {
      dispatch({
        type: FormAction.setLogradouro,
        payload: json.logradouro,
      });
      dispatch({
        type: FormAction.setBairro,
        payload: json.bairro,
      });
      dispatch({
        type: FormAction.setUf,
        payload: json.uf,
      });
      dispatch({
        type: FormAction.setLocalidade,
        payload: json.localidade,
      });
    }
  };

  const handleNumberAddress = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setNumero,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <h1>
          Certo {state.name}, agora nos ajude completando o endereço da Clínica
        </h1>
        <p>Preencha os campos abaixo com o endereço da sua clínica</p>

        <hr />
        <div className="addressCep">
          <label>
            CEP
            <InputMask
              type="text"
              mask="99.999-999"
              autoFocus
              value={state.cep}
              onChange={handleCepChange}
            />
          </label>
          <button onClick={handleAddress}>
            <img src="/images/search.svg" />
          </button>
        </div>

        <br />
        <div className="addressNumber">
          <label>
            Logradouro
            <input
              type="text"
              value={state.logradouro}
              onChange={handleAddress}
            />
          </label>
          <label>
            Número
            <input
              type="text"
              value={state.numero}
              onChange={handleNumberAddress}
            />
          </label>
        </div>
        <br />
        <div className="addressNumber">
          <label>
            Cidade
            <input
              type="text"
              value={state.localidade}
              onChange={handleAddress}
            />
          </label>
          <br />
          <label>
            UF
            <input type="text" value={state.uf} onChange={handleAddress} />
          </label>
        </div>
        <br />
        <label>
          Bairro
          <input type="text" value={state.bairro} onChange={handleAddress} />
        </label>

        <Link to="/" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
