import ClinicPage from "pages/ClinicPage";
import Clinics from "pages/Clinics";
import CollaboratorPage from "pages/CollaboratorPage";
import Collaborators from "pages/Collaborators";
import Home from "pages/Home";
import Network from "pages/Network";
import NetworkPage from "pages/NetworkPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redes" element={<Network />} />
        <Route path="/rede/:id/:mode" element={<NetworkPage />} />
        <Route path="/rede/new" element={<NetworkPage />} />
        <Route path="/clinicas" element={<Clinics />} />
        <Route path="/clinica/:id/:mode" element={<ClinicPage />} />
        <Route path="/clinica/new" element={<ClinicPage />} />
        <Route path="/funcionarios" element={<Collaborators />} />
        <Route path="/funcionario/new" element={<CollaboratorPage />} />
        <Route path="/funcionario/:id/:mode" element={<CollaboratorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

