import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navigation = () =>{
    return (
        <div>
                <div className="headerNavi">
                    <Link to="/">Home</Link>
                    <NavLink to="/about" activeClassName="selected"> About</NavLink>
                    <NavLink to="/weather" activeClassName="selected"> Weather</NavLink>
                </div>
        </div>
    )
}
export  default Navigation;