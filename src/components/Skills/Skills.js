import './Skills.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import CourseworkPill from './CourseworkPill/CourseworkPill';

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

const coursework = [
    { name: "COMP110: Introduction to Programming and Data Science", ta: true, software: ["Python"] },
    { name: "COMP210: Data Structures & Algorithms", ta: false, software: ["Java"] },
    { name: "COMP283: Discrete Structures for Computer Science", ta: false, software: [] },
    { name: "COMP211: System Fundamentals", ta: false, software: ["C"] },
    { name: "COMP301: Foundations of Programming", ta: false, software: ["Java"] },
    { name: "COMP311: Computer Organization", ta: false, software: [] },
    { name: "COMP426: Modern Web Programming", ta: true, software: ["TypeScript", "React", "Next", "Supabase"] },
    { name: "COMP 423: Software Engineering Lab", ta: false, software: ["TypeScript", "Angular", "FastAPI", "CI/CD"] },
    { name: "COMP 550: Algorithms & Analysis", ta: false, software: [] },
    { name: "MEJO 581: User Experience Design & Usability", ta: false, software: ["Figma"] },
  ]

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

      <div className="coursework-container">
        <h3 className="coursework-title">Coursework</h3>
        <div className="coursework-grid">
          {coursework.map((c, idx) => (
            <CourseworkPill key={idx} name={c.name} ta={c.ta} software={c.software} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
