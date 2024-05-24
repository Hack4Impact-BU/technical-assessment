import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1><Link to="/" className="title">
                stateline news
            </Link></h1>
            <h2><Link to="/community" className="community">
                community
            </Link></h2>
        </header>
    );
}

export default Header;