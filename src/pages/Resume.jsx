import React from 'react';
import './Resume.css'; 
import photo from '/src/assets/photo.jpeg';

const Resume = () => {
  return (
    <div className="resume-body">
      <div className="resume-container">
        <aside>
          <div className="profile-img-placeholder">
           
            <img src={photo} alt="Profile" />
          </div>

          <h1>Sonal Pandey</h1>
          <div className="subtitle">BCA</div>

          <div className="contact-info">
            <h3>Contact</h3>
            <div>📍 Nagpur, India</div>
            <div>
              📞 <a href="tel:+919730662795">+91 9730662795</a>
            </div>
            <div>
              ✉️ <a href="mailto:sp3602386@gmail.com">sp3602386@gmail.com</a>
            </div>
            <div>
              🔗{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
            <div>
              💻{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>

          <h3>Education</h3>
          <div className="edu-block">
            <h4>G.H Raisoni University, Amravati</h4>
            <span>BCA</span>
            <span>2023-2026 | CGPA: 8.0</span>
          </div>
          <div className="edu-block">
            <h4>Hadas Junior College, Nagpur</h4>
            <span>HSC (Science)</span>
          </div>
          <div className="edu-block">
            <h4>Sheeladevi Public School, Nagpur</h4>
            <span>SSC (10th)</span>
          </div>

          <h3>Skills</h3>
          <div className="skill-tags">
            <span className="skill-tag">Java</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">Git</span>
          </div>

          <h3>Certifications</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ marginBottom: '10px', fontSize: '0.85rem' }}>
              • React Js
            </li>
            <li style={{ marginBottom: '10px', fontSize: '0.85rem' }}>
              • Full Stack java
            </li>
            <li style={{ marginBottom: '10px', fontSize: '0.85rem' }}>
              • HTML Css Js
            </li>
          </ul>
        </aside>

        <main className="resume-main">
          <h2>Profile Summary</h2>
          <p className="summary">
            To work in a dynamic and challenging environment where I can utilize
            my technical skills, problem-solving abilities, and academic
            knowledge in Computer Applications to contribute to organizational
            growth while enhancing my expertise and learning opportunities
          </p>

          <h2>Internship</h2>

          <div className="job-card">
            <div className="job-header">
              <span className="job-company">KAVIN INDIA Pvt Ltd</span>
              <span className="date">September 2025 - November 2025</span>
            </div>
            <div className="job-title">React Js</div>
            <ul>
              <li>Developing React websites.</li>
            </ul>
          </div>

          <div className="job-card">
            <div className="job-header">
              <span className="job-company">KAVIN INDIA Pvt Ltd</span>
              <span className="date">December 2025 - January 2026</span>
            </div>
            <div className="job-title">Java</div>
            <ul>
              <li>Devloping java logic for backend.</li>
            </ul>
          </div>

          <h2>Selected Projects</h2>

          <div className="project-card">
            <div className="job-title">Green Space Finder</div>
            <p>
              Built the front-end for locating nearby gardens and tourist
              places. Enhanced user experience with search and filter
              functionalities
            </p>
            <a href="#" className="project-link">
              View Project on GitHub
            </a>
          </div>

          <div className="project-card">
            <div className="job-title">Portfolio</div>
            <p>
              Created a responsive portfolio to showcase projects and skills.
              Improved navigation and user interaction through structured design
            </p>
            <a href="#" className="project-link">
              View Project on GitHub
            </a>
          </div>

          <div className="project-card">
            <div className="job-title">clue trail 404-not-found</div>
            <p>
              Developed a platform to access and comment on recent and
              historical crime cases. Implemented a secure Python back-end for
              data management and processing. Designed a user-friendly interface
              for easy navigation and case exploration.
            </p>
            <a href="#" className="project-link">
              View Project on GitHub
            </a>
          </div>

          <h2>Achievements</h2>
          <ul>
            <li>
              Certificate in Anchoring – Organized and hosted college events
              with effective communication
            </li>
            <li>
              Certificate in Decoration – Participated in event decoration teams
              and contributed creative ideas
            </li>
            <li>
              Dance Participation – Performed in cultural programs at college
              level
            </li>
            <li>
              English Olympiad – Successfully completed the English Olympiad at
              school level
            </li>
          </ul>

          <div className="declaration">
            <p>
              Declaration: I hereby declare that all the information provided
              above is true and authentic to the best of my knowledge.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resume;