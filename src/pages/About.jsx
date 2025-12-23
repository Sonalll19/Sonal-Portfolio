import React from 'react';

const About = () => {
    return (
        <main className="wrapper">
            <section className="section" id="about">
                <div className="top-header">
                    <h1>About Me</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="about-info">
                            <h3>My Introduction</h3>
                            <p>I am well-versed in HTML, CSS, and JavaScript and other cutting-edge frameworks and libraries which allow me to implement interactive features. Additionally, I have experience working with Content Management Systems like WordPress.</p>
                            <div className="about-btn" style={{marginTop: '20px'}}>
                                <button className="btn blue-btn">Download CV <i className="uil uil-file-alt"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Frontend</h3>
                            </div>
                            <div className="skills-list">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>Bootstrap</span>
                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Backend</h3>
                            </div>
                            <div className="skills-list">
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;