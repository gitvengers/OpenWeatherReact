import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {BrowserRouter} from "react-router-dom";
import RouterApp from "./RouterApp";
import Weather from "./Component/Weather";

// const city = 'Your Location';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <RouterApp />
        </BrowserRouter>
    );
}

export default App;
