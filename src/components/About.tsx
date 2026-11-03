const About = () => {
  return (
    <section className="container page-section">
      <span className="eyebrow">GET TO KNOW ME</span>
      <h1 className="page-title">About Me</h1>

      <div className="content-card">
        <p>
          I'm a Junior Web Developer with a background in Computer Science.
          I have experience developing web applications using PHP, Laravel,
          React, JavaScript, and Ruby on Rails.
        </p>

        <p>
          Through my internships and professional experience, I've gained
          experience in application development, database management,
          implementing business requirements, and collaborating with teams.
        </p>

        <p>
          I enjoy learning new technologies, building useful applications,
          and continuously improving my development skills. Outside coding,
          I also enjoy jogging.
        </p>
      </div>

      <h2 className="subheading">Technical Skills</h2>

      <div className="skills-grid">
        {['PHP', 'Laravel', 'React', 'JavaScript', 'Ruby on Rails',
          'HTML', 'CSS', 'MySQL', 'PostgreSQL', 'Git'].map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default About;
