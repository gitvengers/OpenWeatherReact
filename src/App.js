import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter} from "react-router-dom";
import RouterApp from "./RouterApp";
import Navigation from "./Navigation";
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

window.$(document).ready(function () {
    window.$("#Home").click(function () {
        window.$("#header").slideDown("slow");
    });
    window.$("#About").click(function () {
        window.$("#header").slideUp("slow");
    });
    window.$("#Weather").click(function () {
        window.$("#header").slideUp("slow");
    });
});


// const city = 'Your Location';

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Header/>
            <RouterApp/>
        </BrowserRouter>
    );
}

export default App;
