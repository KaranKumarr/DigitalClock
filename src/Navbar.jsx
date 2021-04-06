import React from 'react';
import './Navbar.css';

const Navbar = () => {

    return (<>
        <nav className="navbar">
            <button className="nav-btn">Clock</button>

            <button className="nav-btn">Timer</button>

            <button className="nav-btn">Pomodoro</button>
        </nav>
    </>);

}

export default Navbar;
