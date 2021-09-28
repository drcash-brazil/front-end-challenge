import "./assets/css/global.css";
import './assets/css/tachyons.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './components/routing/CustomRoute';
import MenuWithTopBar from './components/layout/MenuWithTopBar';
import Clinic from './pages/Clinic';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/clinic" layout={MenuWithTopBar}>
          <Clinic />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
