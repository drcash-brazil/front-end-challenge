import { cpf as cpfLib } from 'cpf-cnpj-validator';

import Clinic from 'resources/clinic';
import formatCep from 'utils/formatCep';
import Button from 'components/ui/Button';
import formatMoney from 'utils/formatMoney';
import DetailAccordion from 'components/ui/DetailAccordion';

const Confirm = ({
  formData, navigation
}) => {
  const { go } = navigation;
  const {
    name,
    cpf,
    socialCapital,
    cep,
    state,
    city,
    neightborhood,
    street,
    number
  } = formData;

  const handleSubmitClick = async (ev) => {
    ev.stopPropagation();

    Clinic.create(formData)
      .then(response => {
        go('done');
      })
      .catch(error => {
        alert(error);
      })
  }

  return (
    <>
      <h2 className="mt12 f20">Revisar Dados</h2>
      <h4 className="mt12 mb24 f14 fw3 gray">Clique no lápis para editar</h4>
      <DetailAccordion defaultExpanded={true} className="mt16 ba br2 shadow-4 b--black-10" summary="Sobre a Clínica" go={go} details={[
        { 'Nome da clínica': name },
        { 'CPF do responsável': cpfLib.format(cpf) },
        { 'Capital social': formatMoney(socialCapital) },
      ]} />
      <DetailAccordion className="mt16 ba br2 shadow-4 b--black-10" summary="Endereço" go={go} details={[
        { 'Cep': formatCep(cep) },
        { 'State': state },
        { 'City': city },
        { 'Bairro': neightborhood },
        { 'Endereço': street },
        { 'Número': number },
      ]} />

      <div className="flex justify-between mt32">
        <Button buttonValue="Voltar" type="button" onClick={() => navigation.previous()} variant="outlined" color="default" />
        <Button
          buttonValue="Enviar"
          color="primary"
          onClick={handleSubmitClick}
          type="submit"
        />
      </div>
    </>
  );
}

export default Confirm;