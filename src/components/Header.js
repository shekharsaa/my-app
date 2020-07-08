import React, { Component } from 'react';
import './../App.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="container main-top">
                    <nav className="navbar navbar-default navbar-expand-lg navbar-fixed">
                        <div>
                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                         </button>
                        </div>
                        <a className="navbar-brand m-0" href="#">Navbar</a>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Education</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Skill</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;
