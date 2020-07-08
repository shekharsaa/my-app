import React, { Component } from 'react';
import './../App.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link">Home</a></li>
                            <li className="nav-item"><a className="nav-link">Home</a></li>
                            <li className="nav-item"><a className="nav-link">Home</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;
