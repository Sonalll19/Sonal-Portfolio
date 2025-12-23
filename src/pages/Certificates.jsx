import React from 'react';

const Certificates = () => {
    return (
        <main className="wrapper">
            <section className="section">
                <div className="top-header">
                    <h1>Certificates</h1>
                </div>
                <div className="project-container">
                    {/* Reusing project-box style for certificates */}
                    <div className="project-box">
                        <i className="uil uil-award"></i>
                        <h3>Web Development</h3>
                        <label>Udemy</label>
                    </div>
                    <div className="project-box">
                        <i className="uil uil-award"></i>
                        <h3>React JS</h3>
                        <label>Coursera</label>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Certificates;