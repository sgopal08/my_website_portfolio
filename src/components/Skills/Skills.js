import './Skills.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

const categorizedSkills = {
  Languages: [
    { name: 'Python', image: '/my_website_portfolio/images/python.png' },
    { name: 'Java', image: '/my_website_portfolio/images/java.png' },
    { name: 'JavaScript', image: '/my_website_portfolio/images/javascript.png' },
    { name: 'HTML', image: '/my_website_portfolio/images/html.jpg' },
    { name: 'CSS', image: '/my_website_portfolio/images/css.svg' },
    { name: 'TypeScript', image: '/my_website_portfolio/images/typescript.png' },
    { name: 'Swift', image: '/my_website_portfolio/images/swift.png' },
    { name: 'C', image: '/my_website_portfolio/images/clang.png' }
  ],
  'Frameworks & Libraries': [
    { name: 'React.js', image: '/my_website_portfolio/images/reactjs.png' },
    { name: 'Angular', image: '/my_website_portfolio/images/angular.png' },
    { name: 'Next.js', image: '/my_website_portfolio/images/nexticon.svg' },
    { name: 'Tailwind CSS', image: '/my_website_portfolio/images/tailwind.png' },
    { name: 'Phaser', image: '/my_website_portfolio/images/phaser.png' },
    { name: 'FastAPI', image: '/my_website_portfolio/images/fastapi.png' },
    { name: 'Pytest', image: '/my_website_portfolio/images/pytest.png' }

  ],
  'Database & Cloud': [
    { name: 'Supabase', image: '/my_website_portfolio/images/supabase.png' },
    { name: 'Firebase', image: '/my_website_portfolio/images/firebase.png' },
    { name: 'Vercel', image: '/my_website_portfolio/images/vercel.svg' },
    { name: 'Prisma', image: '/my_website_portfolio/images/prisma.svg' },
    { name: 'SQLAlchemy', image: '/my_website_portfolio/images/sql.png' },
  ],
  'Developer Tools': [
    { name: 'Git', image: '/my_website_portfolio/images/git.png' },
    { name: 'GitHub', image: '/my_website_portfolio/images/github.svg' },
    { name: 'Docker', image: '/my_website_portfolio/images/docker.png' },
    { name: 'Jira', image: '/my_website_portfolio/images/jira.svg' },
    { name: 'Figma', image: '/my_website_portfolio/images/figma.svg' },
    { name: 'Linux', image: '/my_website_portfolio/images/linux.png' },
    { name: 'CI/CD', image: '/my_website_portfolio/images/cicd.png' },
    { name: 'Agile', image: '/my_website_portfolio/images/agile.png' },
  ],
};

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-gallery">
        <div className="skills-gallery-title">
          <TypingAnimation text="Technical Skills" />
        </div>
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="subtitle">{category}</h3>
            <div className="skills-gallery-grid">
              {skills.map((skill, index) => (
                <div key={index} className="pill-skill-item">
                  <img src={skill.image} alt={skill.name} className="pill-skill-image" />
                  <span className="pill-skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
