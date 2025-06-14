import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import subimage from "../../../public/Photo/subSkills.jpg"
import './MainSkill.css'
const MainSkill = () => {
  return (
    <>
    <div id="skills">
      <div className="main-skill-par">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          >
         <div className="main-skill-txt">
      <h2 className="main-skill-title">My Skills</h2>
      <p className="main-skill-pra">
        I don't just work with this technology, I am getting better every day to produce a high-performance website,
         I have been working with all these skills to build my projects
      </p>
    </div>
        </motion.div>
        <div className="main-skill-cont-lg">
          <AllSkills />
        </div>
        <div className="main-skill-cont-sm">
          <AllSkillsSM />
        </div>
      </div>
    </div>
      <div className="image-skill-par">
      <div className="image-skill-inner"></div>
      <img
        src={subimage}
        alt="subSkills image"
        className="image-skill"
        
        />
    </div>
        </>
  );
};

export default MainSkill;
