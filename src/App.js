import React from 'react';
import { hot } from 'react-hot-loader';

import Header from './components/header';
import Body from './components/body';

import './App.less';

function App() {
    return <div className="App">
        <Header />

        <h1> Hello, World! </h1>

        <Body />
        
    </div>;
}

export default hot(module)(App);