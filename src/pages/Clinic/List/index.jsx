import Card from '@material-ui/core/Card';
import { cpf as cpfLib } from 'cpf-cnpj-validator';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import Button from 'components/ui/Button';
import Table from 'components/ui/Table';
import formatCep from 'utils/formatCep';
import formatMoney from 'utils/formatMoney';
import ClinicRequests from 'resources/clinic';
import Loader from 'react-loader-spinner';
import emptyResultImg from 'assets/img/empty-result.png';

const Clinic = () => {
  const [clinics, setClinics] = useState([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(true);
  const history = useHistory();

  const handleAddButonClick = (ev) => {
    return history.push("/clinic/add");
  }

  useEffect(() => {
    //O objetivo deste delay entre 1 e 2000ms é exibir o componente de loading por um breve período de tempo
    const randomDelay = Math.floor(Math.random() * 2000) + 1;

    setTimeout(() => {
      ClinicRequests.getAll()
        .then(response => {
          const { data } = response;

          setClinics(data);
        })
        .catch(error => {
          setClinics([]);
          alert(error);
        })
        .finally(() => {
          setShowLoadingSpinner(false);
        })
    }, randomDelay);
  }, []);

  return (
    <>
      <Card className="pa32">
        <div className="flex justify-between">
          <h1>Clínicas</h1>
          <Button
            buttonValue="Nova Clínica"
            onClick={handleAddButonClick}
          />
        </div>
      </Card>
      <Card className="pa32 mt12">
        {showLoadingSpinner
          ? (
            <div className="w-100 h-100 flex justify-center items-center">
              <Loader
                type="ThreeDots"
                color="#3B74F2"
                height={100}
                width={100}
                visible={true}
              />
            </div>
          )
          : clinics.length > 0
            ? (
              <div className="mb12 w-100 flex flex-column items-end">
                <div className="mb12">
                  <span>Quantidade de registros encontrados: {clinics.length}</span>
                </div>
                <Table
                  data={clinics}
                  headers={[
                    'Clínica',
                    'CPF Representante',
                    'Capital Social',
                    'CEP',
                    'Endereço',
                    'Cidade/UF',
                  ]}
                  cells={[
                    'name',
                    'cpf',
                    'socialCapital',
                    'cep',
                    'address',
                    'location',
                  ]}
                  formatElements={({ cpf, socialCapital, cep, state, city, neightborhood, street, number, complement }) => ({
                    cpf: cpfLib.format(cpf),
                    socialCapital: formatMoney(socialCapital),
                    cep: formatCep(cep),
                    location: `${city}/${state}`,
                    address: `${street}, ${number} - ${neightborhood} ${complement ? ` (${complement})` : ""}`
                  })}
                />
              </div>
            )
            : (
              <div className="w-100 flex flex-column justify-center items-center">
                <img className="mw-300" src={emptyResultImg} alt="Sem resultados!" />

                <div className="tc mt16 pl16">
                  <span>Nenhum registro foi encontrado!</span>
                </div>
              </div>
            )}
      </Card>
    </>
  );
}

export default Clinic;