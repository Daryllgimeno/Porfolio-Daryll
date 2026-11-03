const projects = [
  {
    title: 'Matuturo Tutor Finder',
    description: 'A web-based tutor finder application designed to help students find tutors and learning resources.',
    tech: ['PHP', 'MySQL'],
    link: 'https://github.com/Daryllgimeno/Matuturo_Tutor_Finder',
    label: 'GitHub Repository'
  },
  {
    title: 'Agriculture Inventory System',
    description: 'A web application for managing agricultural products and poultry inventory.',
    tech: ['Laravel', 'PHP', 'Vue.js'],
    link: 'https://github.com/Daryllgimeno/Agriculture-inventory-system',
    label: 'GitHub Repository'
  },
  {
    title: 'EPlatify',
    description: 'An omnichannel management platform that brings multiple online stores into one platform.',
    tech: ['PHP', 'Laravel', 'React'],
    link: 'https://www.eplatify.com/',
    label: 'Visit Website'
  }
];

const Projects = () => {
  return (
    <section className="container page-section">
      <span className="eyebrow">WHAT I'VE BUILT</span>
      <h1 className="page-title">My Projects</h1>

      <p className="section-description">
        A selection of projects I've worked on during my development journey.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <span className="project-number">
              PROJECT 0{index + 1}
            </span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noreferrer">
              {project.label} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
