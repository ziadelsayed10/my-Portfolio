import { useState } from "react";
import "./main.css";
import { myProjects2 } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main2 = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects2);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects2.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex navv" id="projects">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects2);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

    

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          Freelance Projects
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          Learning Projects
        </button>
  
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <img width={266} height={200} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title project" >{item.projectTitle}</h1>
                 

                  <div className="flex icons">
                    <div style={{ gap: "210px" }} className="flex">
                       <a href={item.demo} target="_blank"><div className="icon-link"></div></a>
                       <a href={item.github}><div className="icon-github"></div></a>
                    </div>

                    
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main2;