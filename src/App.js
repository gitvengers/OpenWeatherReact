import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {BrowserRouter} from "react-router-dom";
import RouterApp from "./RouterApp";
import Weather from "./Component/Weather";
import Navigation from "./Navigation";

// const city = 'Your Location';

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <RouterApp />
        </BrowserRouter>
    );
}

export default App;
