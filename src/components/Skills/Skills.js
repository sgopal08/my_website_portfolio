import './Skills.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

const categorizedSkills = {
  Languages: [
    { name: 'Python', image: '/images/python.png' },
    { name: 'Java', image: '/images/java.png' },
    { name: 'JavaScript', image: '/images/javascript.png' },
    { name: 'TypeScript', image: '/images/typescript.png' },
    { name: 'HTML', image: '/images/html.jpg' },
    { name: 'CSS', image: '/images/css.svg' },
    { name: 'Swift', image: '/images/swift.png' },
    { name: 'Lua', image: '/images/lua.png' },
    { name: 'C/C++', image: '/images/clang.png' },
    { name: 'SAS', image: '/images/sas_skills.png' },
  ],
  'Frameworks & Libraries': [
    { name: 'React.js', image: '/images/reactjs.png' },
    { name: 'Angular', image: '/images/angular.png' },
    { name: 'Next.js', image: '/images/nexticon.svg' },
    { name: 'Tailwind CSS', image: '/images/tailwind.png' },
    { name: 'Phaser', image: '/images/phaser.png' },
    { name: 'FastAPI', image: '/images/fastapi.png' },
    { name: 'Pytest', image: '/images/pytest.png' },
  ],
  'Database & Cloud': [
    { name: 'Supabase', image: '/images/supabase.png' },
    { name: 'Firebase', image: '/images/firebase.png' },
    { name: 'Vercel', image: '/images/vercel.svg' },
    { name: 'Prisma', image: '/images/prisma.svg' },
    { name: 'SQLAlchemy', image: '/images/sql.png' },
  ],
  'Developer Tools': [
    { name: 'Git', image: '/images/git.png' },
    { name: 'GitHub', image: '/images/github.svg' },
    { name: 'Docker', image: '/images/docker.png' },
    { name: 'Jira', image: '/images/jira.svg' },
    { name: 'Figma', image: '/images/figma.svg' },
    { name: 'Linux', image: '/images/linux.png' },
    { name: 'CI/CD', image: '/images/cicd.png' },
    { name: 'Agile', image: '/images/agile.png' },
  ],
};

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-gallery">
        <div className="skills-gallery-title">
          <span className="section-eyebrow">04 / Toolkit</span>
          <TypingAnimation text="Technical Skills" />
          <p>
            The languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <section className="skill-group" key={category}>
            <h3 className="subtitle">{category}</h3>
            <div className="skills-gallery-grid">
              {skills.map((skill, index) => (
                <div key={index} className="pill-skill-item">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="pill-skill-image"
                  />
                  <span className="pill-skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Skills;
