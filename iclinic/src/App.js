import * as React from "react";
import Home from "./views/home";
import Clinic from "./views/clinic";
import Register from "./views/register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/Clinic" element={<Clinic />} />
          <Route  path="/Register" element={<Register />} />
        </Routes>
      </Router>
  );
};

export default App;
