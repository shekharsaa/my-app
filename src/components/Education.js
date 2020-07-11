import React, { Component } from 'react';
import './../App.css';

export class Education extends Component {
    render() {
        return (
            <div>
                {/* Education-Section */}
                <section id="education-section">
                    {/* Headin-Text */}
                    <div className="section-heading-text">
                        <h2>Education</h2>
                    </div>
                    {/* Content-Container */}
                    <div className="container">
                        <div className="education-main-contentbox">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="single-main-contentbox"> 
                                        {/* Duration-time */}
                                        <div className="duration-time">
                                            <h2>2017-2020</h2>
                                            <h3>B.Voc(Software Development)</h3>
                                        </div>
                                        <div class="duration-time-border">
									        <i class="fa fa-circle" aria-hidden="true"></i>
									        <span class="single-timeline-horizontal"></span>
								        </div>
                                        <div class="institute">
									        <div class="institute-content">
										        <h4 class="title">
										        	Guru Nanak Dev University
										        </h4>
										        <h5>Lyallpur Khalsa College(Jal),Punjab</h5>
										        <p class="description">
										        	I have passed in Becheleor of Vocation Software Development with 75% Marks.
										        </p>
									        </div>
								        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="single-main-contentbox"> 
                                            {/* Duration-time */}
                                        <div className="duration-time">
                                            <h2>2014-2015</h2>
                                            <h3>10+2</h3>
                                        </div>
                                        <div class="duration-time-border">
								    	    <i class="fa fa-circle" aria-hidden="true"></i>
								    	    <span class="single-timeline-horizontal"></span>
								        </div>
                                        <div class="institute">
								    	    <div class="institute-content">
								    	        <h4 class="title">
								    	        	Punjab Education Board
								    	        </h4>
								    	        <h5>GSSS Mithapur (Jal),Punjab</h5>
								    	        <p class="description">
								    	        	I have passed 10+2 in 2015 with 69% Marks. 
								    	        </p>
								    	    </div>
								        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="single-main-contentbox"> 
                                            {/* Duration-time */}
                                        <div className="duration-time">
                                            <h2>2013-2014</h2>
                                            <h3>Metriculation</h3>
                                        </div>
                                        <div class="duration-time-border">
								    	    <i class="fa fa-circle" aria-hidden="true"></i>
								    	    <span class="single-timeline-horizontal"></span>
								        </div>
                                        <div class="institute">
								    	    <div class="institute-content">
								    	        <h4 class="title">
                                                    Punjab Education Board
								    	        </h4>
								    	        <h5>GSSS Mithapur (Jal),Punjab</h5>
								    	        <p class="description">
								    	        	I have passed matriculation in 2014 with 79.23 % Marks. 
								    	        </p>
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

export default Education;
