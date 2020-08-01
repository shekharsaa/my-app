import React, { Component } from 'react';
import kfclogo from './images/kfclogo.png';
import pizzahutlogo from './images/pizzahut-logo.png';
import weblogo from './images/web-logo.png';
import './../App.css';

export class Experience extends Component {
    render() {
        return (
            <div>
                <section className="experience-section" id="experience-section">
                    <div className="section-heading-text">
                        <h2>Experience</h2>
                    </div>
                    <div className="experience-container">
                        <div className="experience-content">
                            <div className="experience-logo">
                                <img src={kfclogo} alt="KFC-Logo"/>
                            </div>
                            <div>
                                <h2>KFC </h2>
                                <p>Team Member</p>
                            </div>
                        </div>
                        <div className="experience-content">
                            <div className="experience-logo">
                                <img src={pizzahutlogo} alt="PizzaHut"/>
                            </div>
                            <div>
                                <h2>Pizza Hut</h2>
                                <p>Team Member</p>
                            </div>
                        </div>
                        <div className="experience-content">
                            <div className="experience-logo">
                                <img  src={weblogo} alt="Web Development"/>
                            </div>
                            <div>
                                <h2>Web Development</h2>
                                <p>Team Member</p>
                            </div>
                        </div>
                    </div>
                </section>                
            </div>
        )
    }
}

export default Experience;
