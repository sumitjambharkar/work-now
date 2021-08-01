import React from 'react';
import {NavLink } from "react-router-dom";
import Logo from '../images/logo.jpeg'
import call from '../images/call.png'

const Navbar = () => {
    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-between m-4">
                <div>
                    <img src={Logo} style={{width:70}} alt=""/>

                </div>
                <div>
                    <ul className="d-flex">
                        <li className="m-2">
                        <img src={call} style={{width:30}} alt="fs"/>
                        </li>
                        <li className="m-2">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="m-2">
                        <NavLink to="/register">Register</NavLink>
                        </li>
                        <li className="m-2">
                        <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
            </div>
        </>
    )
}

export default Navbar