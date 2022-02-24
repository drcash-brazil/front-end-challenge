import * as React from "react";
import Home from "./views/home";
import Clinic from "./views/clinic";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/Clinic" element={<Clinic />} />
        </Routes>
      </Router>
  );
};

export default App;
