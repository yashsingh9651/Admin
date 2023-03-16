import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import StateContext from './context/StateContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/Admin'>
    <StateContext>
    <App />
    </StateContext>
    </BrowserRouter>
);