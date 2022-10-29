import Clinics from "pages/Clinics"
import Home from "pages/Home"
import Network from "pages/Network"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Router = (): JSX.Element => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/:rede" element={<Network />} />
            <Route path="/:rede/:clinica" element={<Clinics />} />
         </Routes>
      </BrowserRouter>
   )
}

export default Router

