import React, { Component } from 'react';
import './../App.css';

export class Experience extends Component {
    render() {
        return (
            <div>
                <section className="experience-section" id="experience-section">
                    <div className="section-heading-text">
                        <h2>Experience</h2>
                    </div>
                    <div className="container">
                        <div className="experience-content">
                            <div className="main-timeline">
                                <ul>
                                    <li>
                                        <div className="single-timeline-box">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="experience-time">
                                                        <h2>2017-Present</h2>
                                                        <h3>Team Member</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 col-md-offset-1">
                                                    <div className="timeline">
                                                        <div className="timeline-content">
                                                            <h4 className="title">
                                                                Sapphirefood PVT LTD
                                                            </h4>
                                                            <p className="description">
                                                                
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>                
            </div>
        )
    }
}

export default Experience;
