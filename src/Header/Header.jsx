import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <div className="header-container">
            <h2 className="header-info1">COVID-19 Tracker</h2>
            <select name="country" className="country-dropdown">
            <option value="Worldwide">Worldwide</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="ITALY">ITALY</option>
            </select>
        </div>
    )
}

export default Header; 