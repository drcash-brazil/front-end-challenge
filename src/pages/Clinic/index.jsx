import Card from '@material-ui/core/Card';
import Button from '../../components/ui/Button';

const Clinic = () => {
  return (
    <>
      <Card className="pa16">
        <div className="flex justify-between mb24">
          <h2>Clínicas</h2>
          <Button
            buttonValue="Nova Clínica"
            onClick={(ev) => alert("teste")}
          />
        </div>
      </Card>
    </>
  );
}

export default Clinic;