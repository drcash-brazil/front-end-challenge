import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormAction, useForm } from "../../contexts/FormContext";

import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { getAdressApi } from "../../api/getAdress";
import { Link } from "react-router-dom";
import { clinicsApi } from "../../api/clinicsAPI";
import { Clinics } from "../../types/Clinics";

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [clinics, setClinics] = useState<Clinics[]>([]);

  useEffect(() => {
    // if (state.name === "") {
    //   navigate("/");
    // } else {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 3,
    });
    // }
  }, []);

  useEffect(() => {
    handleGetAllClinics();
  }, []);

  const handleGetAllClinics = async () => {
    let json = await clinicsApi.getAllClinics();
    return setClinics(json);
  };

  return (
    <Theme>
      <C.Container>
        <h1>Agora vamos ver todas as clínicas cadastradas</h1>
        <p>Abaixo encontra todas suas clínicas cadastradas</p>
        <>
          {clinics.map((item) => (
            <C.Body key={item.id}>
              <C.Title>
                <div className="diplayCollumn">
                  <p>Nome</p>
                  <h2>{item.name}</h2>
                </div>
                <div className="displayCollumn">
                  <p>CPF</p>
                  <h2>{item.cpf}</h2>
                </div>
                <div className="displayCollumn">
                  <p>Capital</p>
                  <h2>R$ {item.capital}</h2>
                </div>
              </C.Title>
              <C.Address>
                <div className="addressText">
                  <div className="diplayCollumn">
                    <p>Rua</p>
                    <h2>{item.logradouro}</h2>
                  </div>
                  <div className="diplayCollumn" style={{ width: "25%" }}>
                    <p>Número</p>
                    <h2>{item.numero}</h2>
                  </div>
                  <div className="diplayCollumn">
                    <p>Bairro</p>
                    <h2>{item.bairro}</h2>
                  </div>
                </div>
              </C.Address>
              <C.Address>
                <div className="addressText">
                  <div className="diplayCollumn">
                    <p>CEP</p>
                    <h2>{item.cep}</h2>
                  </div>
                  <div className="diplayCollumn">
                    <p>UF</p>
                    <h2>{item.uf}</h2>
                  </div>
                  <div className="diplayCollumn">
                    <p>Cidade</p>
                    <h2>{item.localidade}</h2>
                  </div>
                </div>
              </C.Address>
            </C.Body>
          ))}
        </>
      </C.Container>
    </Theme>
  );
};
