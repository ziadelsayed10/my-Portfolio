// import React, { useState } from 'react';
// import './main.css';
// import { AnimatePresence, motion } from 'framer-motion';


// const myProjects = [
//   { projectTitle: "react project", category: ["react"], imgpath: "./images/4.jpeg" },
//   { projectTitle: "css js project", category: ["css"], imgpath: "./images/13.jpeg" },
//   { projectTitle: "js  css html project", category: ["js","css"], imgpath: "./images/6.jpeg" },
//   { projectTitle: "js css project", category: ["js", "css"], imgpath: "./images/10.jpeg" },
//   { projectTitle: "html css js project", category: ["css", "js"], imgpath: "./images/12.jpeg" },
//   { projectTitle: "html react project", category: ["react"], imgpath: "./images/8.jpeg" },
//   { projectTitle: "js project", category: ["js"], imgpath: "./images/9.jpeg" },
//   { projectTitle: "react redux project", category: ["react"], imgpath: "./images/3.jpeg" },
//   { projectTitle: "react tailwend project", category: ["react"], imgpath: "./images/1.jpeg" },
// ];

// function Main() {
//   const [currentActive, setCurrentActive] = useState('all');
//   const [arr, setarr] = useState(myProjects);


//   const handleClick = (buttonCategory)=>{
//     setCurrentActive(buttonCategory);
//     const newArr = myProjects.filter((item) => {

//       const zzz = item.category.find((myItem) => {

//         return myItem === buttonCategory;
//       })
//       return zzz === buttonCategory ;
//     });

//     setarr(newArr);

//   }

//   return (
//     <>
//       <main className='flex' id='projects'>
//         <section className='flex left-section'>

//           <motion.button
          
         
          
//           onClick={() => {

            
//             setCurrentActive("all");
//             setarr(myProjects)
//           }} className={currentActive === 'all' ? 'active' : null}>
//             All Projects
//             </motion.button>
//           <button onClick={() => {
//            handleClick("css")

//           }} className={currentActive === 'css' ? 'active' : null}>Html&Css</button>

//           <button onClick={() => {
//            handleClick("js")
//           }} className={currentActive === "js" ? 'active' : null}>JavaScript</button>

//           <button onClick={() => {
//             handleClick("react")
//           }} className={currentActive === 'react' ? 'active' : null}>React</button>

//         </section>


//         <section className=' flex right-section'>
//           <AnimatePresence>


//           {arr.map((item) => {
//             return (
//               <motion.article
              
//               layout
//               initial={{ transform: "scale(0)" }}
//               animate={{ transform: "scale(1)" }}
//               transition={{duration:1}}

              


              
//               key={item.projectTitle} className=' card'>
//                 <img width={166} src={item.imgpath} alt="" />
//                 <div className="box" style={{ width: "166px" }}>
//                   <h1 className='title'> {item.projectTitle}</h1>
//                   <p className='sub-title'>
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Accusamus rerum quasi voluptatum eaque perferendis amet.
//                   </p>
//                   <div className="flex icons">
//                     <div style={{ gap: "11px" }} className='flex'>
//                       <div className="icon-link"></div>
//                       <div className="icon-github"></div>

//                     </div>

//                     <a className='link flex' href="">more
//                       <span style={{ alignSelf: "end" }} className='icon-arrow_forward'></span>
//                     </a>
//                   </div>
//                 </div>
//               </motion.article>
//             )
//           })}


// </AnimatePresence>
//         </section>



//       </main>

//     </>

//   )
// }

// export default Main