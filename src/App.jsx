import Hero from "./components/2-hero/Hero"
import Header from "./components/1-header/Header"
import Main2 from "./components/3-main/Main2"
import Contact from "./components/4-contact/Contact"
import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import MainSkill from "./components/skill/MainSkill"

function App() {
 useEffect(()=>{
  window.addEventListener("scroll", ()=>{
    if (window.scrollY >200) {
      setshowScrollBTN(true)
    } else {
      setshowScrollBTN(false)
    }
  })
 },[])

 const [showScrollBTN, setshowScrollBTN] = useState(false)
  return (
    <>
    <div id="up" className="container">
     <Header/>
     <Hero/>
     <div className="divider"/>
     <Main2/>
     <div className="divider"/>
     {/* <ProjectsMain/>
     <div className="divider"/> */}
     <MainSkill/>
     <div className="divider"/>
     <Contact/>
     <div className="divider"/>
     {/* <Footer/> */}


   <Link to="up" style={{opacity:showScrollBTN ? 1 : 0 , transition: "1.2s"}} href="#up"><button className=" icon-keyboard_arrow_up"></button></Link>
     </div>
    </>
  )
}

export default App
