import React, { Component } from 'react';
import './../App.css';
import Welcomescreen from './Welcomescreen';
import logo from './images/logo.png';

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid header">
                <div className="container main-top">
                    <nav className="navbar navbar-default navbar-expand-lg  boostnav">
                    <a className="navbar-brand m-0" href="#"><img src={logo} className="brand-logo" alt="azaadtech"></img></a>
                        <div>
                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                         <i className="fas fa-bars toggle-icon"></i>
                         </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navigation">
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Education</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Skill</a></li>
                        </ul>
                        </div>
                    </nav>
                </div>
                </div>
                <Welcomescreen/>
            </div>
        );
    }
}

export default Header;
