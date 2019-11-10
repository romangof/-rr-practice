import React from 'react';
import { hot } from 'react-hot-loader';

import Header from './components/header';

import './App.css';

function App() {
    return <div className="App">
        <Header />
        <h1> Hello, World! </h1>
    </div>;
}

export default hot(module)(App);