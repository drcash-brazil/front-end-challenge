import DetailAccordion from 'components/ui/DetailAccordion';
import Button from 'components/ui/Button';

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

  return (
    <>
      <h2>Conferir informações</h2>
      <DetailAccordion defaultExpanded={true} className="mt16" summary="Sobre" go={ go } details={[
        { 'Nome da clínica': name },
        { 'CPF do responsável': cpf },
        { 'Capital social': socialCapital },
      ]} />
      <DetailAccordion className="mt16" summary="Endereço" go={ go } details={[
        { 'Cep': cep },
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
          onClick={() => go('done')}
          type="submit"
        />
      </div>
    </>
  );
}

export default Confirm;