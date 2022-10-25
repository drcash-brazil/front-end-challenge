import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';

import Clinic from './pages/Clinic';
import Welcome from './pages/Welcome';
import Network from './pages/Network';
import Layout from './components/Layout';
import Employees from './pages/Employees';
import NewClinic from './pages/Clinic/NewClinic';
import NewNetwork from './pages/Network/NewNetwork';
import NewEmployee from './pages/Employees/NewEmployee';
import SpecificClinic from './pages/Clinic/SpecificClinic';
import SpecificNetwork from './pages/Network/SpecificNetwork';

import Sandbox from './pages/Sandbox';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/clinicas" element={<Clinic />} />
            <Route path="/clinicas/adicionar" element={<NewClinic />} />
            <Route path="/clinicas/:id" element={<SpecificClinic />} />
            <Route path="/redes" element={<Network />} />
            <Route path="/redes/adicionar" element={<NewNetwork />} />
            <Route path="/redes/:id" element={<SpecificNetwork />} />
            <Route path="/funcionarios" element={<Employees />} />
            <Route path="/funcionarios/adicionar" element={<NewEmployee />} />
            <Route path="/sandbox" element={<Sandbox />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>

  );
}

export default App;
