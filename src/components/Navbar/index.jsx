import { Link } from "react-router-dom"
import Carrito from "../CartWidget/Carrito"
import { useState } from "react"
import { MdOutlineDarkMode } from 'react-icons/md'
import { BsLightbulb } from 'react-icons/bs'

const index = ({logo}) => {

  const [IsDark, setIsDark] = useState(true)
  function cambiarColor(){
      setIsDark(!IsDark)
      if(IsDark){
          document.body.classList.add('dark')
      } else {
          document.body.classList.remove('dark')
      }
  }

    return (
  <header>
          <nav>
              <div class="menu-logo"><Link to={"/"}><img src={logo} alt=""/></Link></div>
              <div class="menu-nav">
                <Link to={'/'}> <a class="active" href="">Home</a></Link>
                <Link to={"/category/men"}>Men</Link>
                <Link to={"/category/women"}>Women</Link>
                <Link to={"/blogs"}><a href="">Blogs</a></Link> 
                <Link to={"/help"}><a href="">Help</a></Link>
              </div>
              <div class="purch">
                  <Carrito/>
                  <button onClick={cambiarColor} className="botonColor">{IsDark ? <MdOutlineDarkMode/> : <BsLightbulb/>}</button>
              </div>
          </nav>
      </header>
  
    )
  }
  
  export default index
  