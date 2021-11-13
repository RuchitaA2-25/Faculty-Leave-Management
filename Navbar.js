import React from 'react';
import styled from 'styled-components';
import logo from "../../logo.jpg";
import {Link} from "react-router-dom";


const Navbar = () => {
    return(
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light px-2 py-0">
            
            <a className="navbar-brand" href="http://www.sanjayghodawatuniversity.ac.in">
                <img style={{width: "40px"}} src={logo} alt="logo"/>
            </a>
            <button 
                className="navbar-toggler"
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="http://localhost:3000">
                            Home <span className="sr-only"></span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link" href="http://www.sanjayghodawatuniversity.ac.in/about-sgu">
                                About Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://www.sanjayghodawatuniversity.ac.in/contact-location">
                                Contact Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/first'>
                                Faculty
                        </a>
                    </li>
                    
     
                </ul>
    
            </div>
            </nav>
        </NavbarContainer>
    )
}

export default Navbar;

//MAIN NAVBAR CONTAINER
const NavbarContainer = styled.div`
    background: var(--yellow);
    height: 58px;
    .nav-link{
        color: black !important;
        &:hover {
            background: var(--white);
        }
    }
`

