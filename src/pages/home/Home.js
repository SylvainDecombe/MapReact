import React from 'react';
import troll from "../../troll.png";
import './Home.css'

function Home() {
    return (
        <div>
            <header className="App-header">
                <img src={troll} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/pages/home/Home.js</code>
                </p>
            </header>
        </div>
    );
}

export default Home;
