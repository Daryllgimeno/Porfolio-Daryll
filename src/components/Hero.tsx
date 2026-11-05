import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <span className="eyebrow">JUNIOR WEB DEVELOPER</span>

        <h1>
          Hi, I'm Daryll <span>Gimeno.</span>
        </h1>

        <h2>Building web applications and solving problems through code.</h2>

        <p>
          I have experience in web development using PHP, Laravel,
          React, and Ruby on Rails. I enjoy learning new technologies
          and building practical applications.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn-primary">
            View My Projects →
          </Link>

          <Link to="/about" className="btn-secondary">
            About Me
          </Link>
        </div>

        <div className="tech-stack">
          <span>PHP</span>
          <span>Laravel</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>SQL</span>
        </div>
      </div>

      <div className="hero-side">
        <div className="profile-placeholder">
          <img src="public/Formalpicture.jpg" alt="formal-picture" />
        </div>
        <p>Developer · Problem Solver · Lifelong Learner</p>
      </div>
    </section>
  );
};

export default Hero;
