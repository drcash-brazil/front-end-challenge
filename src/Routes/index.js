import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Home, ClinicList, ClinicForm } from '../Pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route
                component={Home}
                path="/"
                exact />
            <Route
                component={ClinicList}
                path="/clinicas"
                exact />
            <Route
                component={ClinicForm}
                path="/clinicas/cadastro"
                exact />
        </BrowserRouter>
    )
}

export default Routes;