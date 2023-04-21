import React from "react";
import logo from './poster-lazarev.png';
import header_img from './orbital-desk-purple.png';


function Header() {
    return (
        <div>
            <header className="App-header">
                <img src={header_img} alt="" />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    )
}


export default Header;
