import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Header from './Components/Header.jsx';
import Feature from './Components/Feature.jsx';
import {Link} from 'react-scroll';
import './index.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <Navbar />
            <Header />
            <Feature />
            </header>
        </div>
    );
}

export default App;