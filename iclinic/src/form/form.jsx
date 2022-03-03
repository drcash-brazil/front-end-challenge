import React from "react";
import { Formiz, FormizStep, useForm } from "@formiz/core";
import { isPattern } from "@formiz/validations";
import Button from "@material-ui/core/Button";
import MyField from "./custom-field";
import Pagination from "./pagination";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import ArrowBackICon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  height: auto;
  width: 700px;
  min-height: 30rem !important;
  background: #fff;
  border-radius: 20px;
  @media (max-width: 776px) {
    width: 300px;
  }
  @media (max-width: 380px) {
    width: 270px;
    min-height: 40rem !important;
    .ml-auto {
      display: flex;
    }
  }
  .form-group {
    margin: 10px 0;
  }
  .form {
    color: red;
  }
  .next-buttton {
    margin-left: 20px;
  }
  .prev- buttton {
    margin-right: 20px;
  }
  .submit-buttton {
    margin-left: 10px;
  }
  .stepform2Wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0px;

    .form-group {
      width: 30%;
      @media (max-width: 776px) {
        width: 48%;
      }
    }
  }
`;

const Parent = styled.section`
  overflow: auto;
  background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
  height: 100vh;
  @media (max-width: 776px) {
    padding: 10px;
  }
  .back {
    color: #fff;
    font-size: 25px;
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    margin: 10px;
    text-align: center;
    a {
      color: #fff;
    }
    @media (max-width: 776px) {
      margin: 30px;
      position: sticky;
    }
    cursor: pointer;

    .icon {
      color: #fff;

      font-size: 20px;
    }
  }
`;

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
      const step = myForm.getFieldStepName("name");
      myForm.goToStep(step);
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
            if(response.data?.erro === true){
          
              document.querySelector('.submit-buttton').disabled=true
            }else{
              document.querySelector('.submit-buttton').disabled=false

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
