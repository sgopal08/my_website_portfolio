import './Skills.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import CourseworkPill from './CourseworkPill/CourseworkPill';

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
    { name: 'Pytest', image: '/images/pytest.png' }

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

      {/* <div className="coursework-container">
        <h3 className="coursework-title">Coursework</h3>
        <div className="coursework-grid">
          {coursework.map((c, idx) => (
            <CourseworkPill key={idx} name={c.name} ta={c.ta} software={c.software} />
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
