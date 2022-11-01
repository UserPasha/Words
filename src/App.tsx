import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards} from "./Cards/Cards";
import {CurrentCard} from "./CurrentCard/CurrentCard";
import AppRoutes from "./AppRoutes/AppRoutes";

function App() {
    return (
        <div className="App">
           <AppRoutes/>
        </div>
    );
}

export default App;
