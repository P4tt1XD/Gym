import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Header from './Components/Header.jsx';
import {Link} from 'react-scroll';
import './index.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <Navbar />
            <Header />

            </header>
        </div>
    );
}

export default App;