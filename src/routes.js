import React from "react";
import { Route, Routes } from "react-router-dom";
import { Networks } from "./pages/Networks";

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route exact path="/" element={<Networks />} />
        <Route exact path="/network" element={<Networks />} />
      </Route>
    </Routes>
  );
}
