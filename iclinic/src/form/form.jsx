import React from "react";
import { Formiz, FormizStep, useForm } from "@formiz/core";
import { isPattern } from "@formiz/validations";
import Button from "@material-ui/core/Button";
import MyField from "./custom-field";
import Pagination from "./pagination";

import axios from "axios";
import Swal from "sweetalert2";
import ArrowBackICon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import {Parent , FormWrapper} from './style';

const Form = () => {
  const myForm = useForm();
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const submitForm = (values) => {
    const { CEP, CPF, Capital, Nome } = values;
    const { bairro, localidade, logradouro, siafi, uf } = data;

    setIsLoading(true);
    setTimeout(() => {
      axios
        .post("https://620fa753ec8b2ee283481997.mockapi.io/Iclinic/clinicas", {
          Nome,
          CPF,
          Capital,
          CEP,
          localidade,
          bairro,
          uf,
          logradouro,
          siafi,
        })
        .then((response) => {
          Swal.fire("Clinica Registada!", "Sucesso!!", "success");
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("Erro!", "Verifique a conexão!!", "error");
        });

      const step = myForm.getFieldStepName("Nome");
      myForm.goToStep(step);
      const inputs = document.querySelectorAll(".ant-input");
      if (inputs) {
        inputs.forEach((element) => {
          element.value = "";
        });
      }
    }, 1000);
  };

  const handleChange = async (values) => {
    let cep = values.CEP;
    if (cep) {
      let pattern = /^[0-9]{5}-[0-9]{3}$/;
      let value = pattern.test(cep);

      if (value) {
        await axios
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => {
            setData(response.data);
            if (response.data?.erro === true) {
              document.querySelector(".submit-buttton").disabled = true;
              Swal.fire("Erro!", "CEP inexistente !!", "error");
            } else {
              document.querySelector(".submit-buttton").disabled = false;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <Parent>
      <span className="back">
        <Link to="/Clinic">
          <ArrowBackICon className="icon" /> Voltar
        </Link>{" "}
      </span>

      <Formiz
        onValidSubmit={submitForm}
        className="Formiz"
        onChange={handleChange}
        connect={myForm}
      >
        <FormWrapper
          noValidate
          onSubmit={myForm.submitStep}
          className="form"
          style={{ minHeight: "16rem" }}
        >
          <Pagination current={myForm.currentStep?.index} />
          <div className="form__content">
            <FormizStep name="step1">
              <MyField
                name="Nome"
                label="Nome"
                placeholder="Iclinic"
                required="Preencha o nome"
                id="nome"
              />

              <MyField
                name="CPF"
                label="CPF do Responsável"
                required="Preencha o CPF"
                placeholder="999.999.999-99"
                validations={[
                  {
                    rule: isPattern("[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"),
                    message: "Insira um CPF válido",
                  },
                ]}
                id="cpf"
              />

              <MyField
                name="Capital"
                label="Capital Social"
                required="Preencha o Capital"
                type="number"
                placeholder="1234567890"
                id="capital"
              />
            </FormizStep>
            <FormizStep name="step2" className="from-2">
              <div className="stepform2Wrapper">
                {" "}
                <MyField
                  name="CEP"
                  label="CEP"
                  type="text"
                  placeholder="00000-000"
                  required="Insira o CEP"
                  validations={[
                    {
                      rule: isPattern("[0-9]{5}-[0-9]{3}"),
                      message: "Insira um CEP Válido",
                    },
                  ]}
                  id="nome"
                />
                <MyField
                  name="localidade"
                  label="localidade"
                  type="text"
                  placeholder={data?.localidade}
                  value={data?.localidade}
                  disable={true}
                />
                <MyField
                  name="bairro"
                  label="bairro"
                  type="text"
                  placeholder={data?.bairro}
                  value={data?.bairro}
                  disable={true}
                />
                <MyField
                  name="logradouro"
                  label="logradouro"
                  type="text"
                  placeholder={data?.logradouro}
                  value={data?.logradouro}
                  disable={true}
                />
                <MyField
                  name="complemento"
                  label="complemento"
                  type="text"
                  placeholder={data?.complemento}
                  value={data?.complemento}
                  disable={true}
                />
                <MyField
                  name="uf"
                  label="uf"
                  type="text"
                  placeholder={data.uf}
                  value={data.uf}
                  disable={true}
                />
                <MyField
                  name="ibge"
                  label="ibge"
                  type="text"
                  placeholder={data.ibge}
                  value={data.ibge}
                  disable={true}
                />
                <MyField
                  name="siafi"
                  label="siafi"
                  type="text"
                  placeholder={data.siafi}
                  value={data.siafi}
                  disable={true}
                />
                <MyField
                  name="ddd"
                  label="ddd"
                  type="text"
                  placeholder={data.ddd}
                  value={data.ddd}
                  disable={true}
                />
              </div>
            </FormizStep>
            <FormizStep name="step3">
              <MyField
                name="description"
                label="decrição"
                type="text-area"
                placeholder="Uma clínica especializada em rinoplastia..."
              />
            </FormizStep>
          </div>

          <div className="form__footer">
            <div className="mr-auto" style={{ minWidth: "6rem" }}></div>
            <div className="ml-auto" style={{ minWidth: "6rem" }}>
              {!myForm.isFirstStep && (
                <Button
                  className="prev-buttton"
                  type="button"
                  onClick={myForm.prevStep}
                  color="primary"
                  variant="contained"
                >
                  Anterior
                </Button>
              )}
              {myForm.isLastStep ? (
                <Button
                  className="next-buttton"
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={
                    isLoading || (!myForm.isValid && myForm.isStepSubmitted)
                  }
                >
                  {isLoading ? "Loading..." : "Submit"}
                </Button>
              ) : (
                <Button
                  className="submit-buttton"
                  type="submit"
                  disabled={!myForm.isStepValid && myForm.isStepSubmitted}
                  variant="contained"
                  color="primary"
                >
                  Próximo
                </Button>
              )}
            </div>
          </div>
        </FormWrapper>
      </Formiz>
    </Parent>
  );
};
export default Form;
