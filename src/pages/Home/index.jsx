import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

const Home = () => {
  return (
    <>
    <Card className="pa16">
      <div className="flex-justify-between mb24">
        <Link to="/clinic">
          Clinic
        </Link>
      </div>
    </Card>
    </>
  );
}

export default Home;