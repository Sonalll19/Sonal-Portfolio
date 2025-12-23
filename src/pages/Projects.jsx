import React from 'react';

const Projects = () => {
    return (
        <main className="wrapper">
            <section className="section" id="projects">
                <div className="top-header">
                    <h1>Projects</h1>
                </div>
                <div className="project-container">
                    <div className="project-box">
                        <i className="uil uil-briefcase-alt"></i>
                        <h3>Project One</h3>
                        <label>Green Space Finder</label>
                    </div>
                    <div className="project-box">
                        <i className="uil uil-briefcase-alt"></i>
                        <h3>Project Two</h3>
                        <label>clue tril 404-not-found</label>
                    </div>
                    <div className="project-box">
                        <i className="uil uil-briefcase-alt"></i>
                        <h3>Project Three</h3>
                        <label>Portfolio Site</label>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projects;