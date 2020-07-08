import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './../App.css';

export class Welcomescreen extends Component {
    render() {
        return (
            <div>
                <section id="main-screen">
                    <div  className="container">
                        <div className='row'>
                            <div className="col-md-12 text-center">
                                <div className="header-text">
                                    <h2>Hi i am Chander shekhar</h2>
                                    <p>Web Developer</p>
                                    <a href="#" >Download Resume</a>
                                </div>
                             <Particles 
                             params={{ 
                                particles: { 
                                  number: { 
                                    value: 200, 
                                    density: { 
                                      enable: true, 
                                      value_area: 800, 
                                    } 
                                  }, 
                                }, 
                              }} 
                            /> 
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Welcomescreen;
