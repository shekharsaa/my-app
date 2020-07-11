import React, { Component } from 'react';
import './../App.css';

export class Skill extends Component {
    render() {
        return (
            <div>
                <section id="skill-section">
                    <div className="skill-content">
                        <div className="section-heading-text">
                            <h2>Skill</h2>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-skill-content">
                                        <div className="barwrapper">
                                            <span className="progresstext">Html</span>
                                            <div className="single-progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{width:"95%"}}>

                                                    </div>
                                                </div>
                                                <h3>95%</h3>
                                            </div>
                                        </div>
                                        <div className="barwrapper">
                                            <span className="progresstext">Css</span>
                                            <div className="single-progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{width:"80%"}}>

                                                    </div>
                                                </div>
                                                <h3>80%</h3>
                                            </div>
                                        </div>
                                        <div className="barwrapper">
                                            <span className="progresstext">Bootstrap</span>
                                            <div className="single-progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{width:"90%"}}>

                                                    </div>
                                                </div>
                                                <h3>90%</h3>
                                            </div>
                                        </div>
                                        <div className="barwrapper">
                                            <span className="progresstext">JavaScript</span>
                                            <div className="single-progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{width:"80%"}}>

                                                    </div>
                                                </div>
                                                <h3>80%%</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-skill-content">
                                        <div className="barwrapper">
                                            <span className="progresstext">PHP</span>
                                            <div className="single-progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{width:"90%"}}>
                                                    </div>
                                                </div>
                                                <h3>90%</h3>
                                            </div>
                                        </div>
                                        <div className="barwrapper">
                                            <span className="progresstext">Mysql</span>
                                            <div className="single-progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{width:"90%"}}>
                                                    </div>
                                                </div>
                                                <h3>90%</h3>
                                            </div>
                                        </div>
                                        <div className="barwrapper">
                                            <span className="progresstext">ReactJs</span>
                                            <div className="single-progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{width:"60%"}}>
                                                    </div>
                                                </div>
                                                <h3>60%</h3>
                                            </div>
                                        </div>
                                        <div className="barwrapper">
                                            <span className="progresstext">Adobe Photoshop</span>
                                            <div className="single-progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{width:"60%"}}>
                                                    </div>
                                                </div>
                                                <h3>60%</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skill;
