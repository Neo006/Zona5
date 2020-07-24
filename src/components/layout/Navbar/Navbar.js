import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
        return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/react" className="navbar-brand">Zona 5</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/movies" className="nav-link">Movies</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;