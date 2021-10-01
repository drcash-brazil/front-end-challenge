import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Thanks from "pages/Thanks";
import Clinic from './pages/Clinic/List';
import ClinicForm from './pages/Clinic/Add';
import Route from './components/routing/CustomRoute';
import MenuWithTopBar from './components/layout/MenuWithTopBar';

import "./assets/css/global.css";
import './assets/css/tachyons.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/clinic/add" layout={MenuWithTopBar}>
          <ClinicForm />
        </Route>
        <Route path="/clinic" layout={MenuWithTopBar}>
          <Clinic />
        </Route>
        <Route path="/thanks" layout={MenuWithTopBar}>
          <Thanks />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
