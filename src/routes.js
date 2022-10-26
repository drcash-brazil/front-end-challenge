import React from "react";
import { Route, Routes } from "react-router-dom";

import { NetworksList } from "./pages/Networks/NetworksList";
import { NetworkDetails } from "./pages/Networks/NetworkDetails";

import { ClinicsList } from "./pages/Clinics/ClinicsList";
import { ClinicDetails } from "./pages/Clinics/ClinicDetails";

import { EmployeesList } from "./pages/Employees/EmployeesList";
import { EmployeesDetails } from "./pages/Employees/EmployeeDetails";

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route exact path="/" element={<NetworksList />} />
        <Route path="/network/:id" element={<NetworkDetails />} />

        <Route exact path="/clinics" element={<ClinicsList />} />
        <Route path="/clinic/:id" element={<ClinicDetails />} />

        <Route exact path="/employees" element={<EmployeesList />} />
        <Route path="/employee/:id" element={<EmployeesDetails />} />
      </Route>
    </Routes>
  );
}
