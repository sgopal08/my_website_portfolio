import './CourseworkPill.css';

function CourseworkPill({ name, ta, software }) {
  return (
    <div className="course-pill">
      {ta && <div className="ta-ribbon">TA</div>}
      <span className="course-name">{name}</span>
      {software.length > 0 && (
        <div className="software-hover" aria-hidden="true">
          <div className="software-title">Skills</div>
          <div className="software-tags">
            {software.map((tool, i) => (
              <span key={i} className="software-tag">{tool}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseworkPill