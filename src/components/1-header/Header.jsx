import { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-scroll';
function Header() {
  const [showModel, setShoeModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark")
  
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark")  //
      document.body.classList.add("light")
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");  //
    }
  }, [theme]);
  return (
    <>
      <header className='  flex'>
        <button onClick={() => {
          setShoeModel(true)
        }} className=' icon-menu menu'></button>
        <div />



        <nav>
          <ul className='flex'>
            <li>
              <Link to='about'
              spy={true}
              smooth={true}
              duration={100}
              >About</Link>
            </li>
            <li>
              <Link to='contact'
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              >Contact</Link>
            </li>
            <li>
              <Link to='projects'
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              >Projects</Link>
            </li>
           
          </ul>
        </nav>



        <button

          onClick={() => {
            localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
            setTheme(localStorage.getItem("currentMode"))
          }}

          className='mode' >

          {theme === "dark" ? (<span className='icon-moon-o'></span>
        ) : (
        <span className='icon-sun'></span>
        )}

        </button>



        {showModel && (
          <div className='fixed'>
            <ul className='model'>
              <li><button className='icon-close' onClick={() => {
                setShoeModel(false)

              }} />
              </li>
              <li>
              <Link to='about'
              spy={true}
              smooth={true}
              duration={100}
              >About</Link>
            </li>
            <li>
              <Link to='contact'
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              >Contact</Link>
            </li>
              <li>
                <Link to='projects'
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              >Projects</Link>
              </li>
              
            </ul>
          </div>
        )}

      </header>

    </>
  )
}

export default Header;
