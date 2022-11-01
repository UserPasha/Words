import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards} from "./Cards/Cards";
import {CurrentCard} from "./CurrentCard/CurrentCard";

function App() {
    return (
        <div className="App">
            <Cards/>
            <CurrentCard />
        </div>
    );
}

export default App;
