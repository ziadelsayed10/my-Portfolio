import './SingleSkill.css'
const SingleSkill = ({ imgSvg, text }) => {
  return (
   <div className="skill-card">
  <div className="skill-card-inner">
    <div className="skill-card-icon">
      {imgSvg}
    </div>
    <p className="skill-card-text">{text}</p>
  </div>
  <div className="skill-card-bg"></div>
</div>

  );
};

export default SingleSkill;
