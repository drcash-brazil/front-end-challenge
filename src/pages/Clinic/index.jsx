import Card from '@material-ui/core/Card';
import { useHistory } from 'react-router';
import Button from '../../components/ui/Button';

const Clinic = () => {
  const history = useHistory();

  const handleAddButonClick = (ev) => {
    return history.push("/clinic/add");
  }

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
    </>
  );
}

export default Clinic;