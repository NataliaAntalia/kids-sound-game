import React from 'react';
import './App.css';
import {HashRouter, useRoutes} from "react-router-dom";
import {appRoutes} from "./routes/routes";


function AppRoutes() {
    const routes = useRoutes(appRoutes);
    return routes;
}


function App() {

    return (
        <HashRouter>

            <AppRoutes/>

            </HashRouter>

    );
}

export default App;
