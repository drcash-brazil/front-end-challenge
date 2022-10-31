import Clinics from "pages/Clinics";
import Collaborators from "pages/Collaborators";
import Home from "pages/Home";
import Network from "pages/Network";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redes" element={<Network />} />
        <Route path="/clinicas" element={<Clinics />} />
        <Route path="/funcionarios" element={<Collaborators />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

