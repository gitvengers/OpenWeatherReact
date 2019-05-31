import React from "react";
import './Navigation.css';
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faAddressCard, faCloud} from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
    return (
        <div className="headerNav_wrapper">
            <div className="headerNavi">
                <Link to="/" id="Home"><FontAwesomeIcon icon={faHome} />Home</Link>
                <NavLink to="/about" id="About" activeClassName="selected"><FontAwesomeIcon icon={faAddressCard} />About</NavLink>
                <NavLink to="/weather" id="Weather" activeClassName="selected"><FontAwesomeIcon icon={faCloud} />Weather</NavLink>
            </div>
        </div>
    )
}
export default Navigation;