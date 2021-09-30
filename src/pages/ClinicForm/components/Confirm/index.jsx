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
      <h2>Conferir informações</h2>
      <DetailAccordion defaultExpanded={true} className="mt16" summary="Sobre" go={ go } details={[
        { 'Nome da clínica': name },
        { 'CPF do responsável': cpfLib.format(cpf) },
        { 'Capital social': formatMoney(socialCapital) },
      ]} />
      <DetailAccordion className="mt16" summary="Endereço" go={ go } details={[
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