import React, { useState } from 'react';
import photo from '/src/assets/photo.jpeg';
import { Link } from 'react-router-dom';


const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <main className="wrapper">
            <section className="featured-box" id="home">
                <div className="featured-text">
                    <div className="featured-text-card">
                        <span>Sonal Pandey</span>
                    </div>
                    <div className="featured-name">
                        <p>I'm <span className="typedText">Developer</span></p>
                    </div>
                    <div className="featured-text-info">
                        <p>Beginner Frontend Developer with a passion for creating visually stunning and user-friendly websites.</p>
                    </div>
                    <div className="featured-text-btn">
                        <button className="btn blue-btn">Hire Me</button>
                       <button className="btn"><Link to="/resume" onClick={() => setMenuOpen(false)}>Download CV</Link> <i className="uil uil-file-alt"></i></button>
                    </div>
                    <div className="social-icons">
                        <div className="icon"><i className="uil uil-instagram"></i></div>
                        <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
                        <div className="icon"><i className="uil uil-github-alt"></i></div>
                        <div className="icon"><i className="uil uil-dribbble"></i></div>
                    </div>
                </div>

                <div className="featured-image">
                    <div className="image">
                        {/* Use your base64 image here, or an import. Using placeholder for now */}
                        <img src={photo} alt="avatar" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;