import ClinicPage from "pages/Clinic/ClinicPage";
import Clinics from "pages/Clinic/Clinics";
import CollaboratorPage from "pages/Collaborator/CollaboratorPage";
import Collaborators from "pages/Collaborator/Collaborators";
import Home from "pages/Home";
import Network from "pages/Network/Network";
import NetworkPage from "pages/Network/NetworkPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

