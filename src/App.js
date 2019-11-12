import React from 'react';
import { hot } from 'react-hot-loader';
import { Container, Card } from '@material-ui/core';

import Header from './components/header';

import './App.css';

function App() {
    return <div className="App">
        <Header />

        <h1> Hello, World! </h1>

        <Container style={{backgroundColor: 'green'}} maxWidth={false}>
            <Card>
                asd
                <br/>
                asd
            </Card>
        </Container>        
    </div>;
}

export default hot(module)(App);