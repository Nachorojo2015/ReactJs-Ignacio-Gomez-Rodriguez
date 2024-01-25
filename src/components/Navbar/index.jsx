import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from "../../context/CartContext.jsx"
import { GiHamburgerMenu } from "react-icons/gi";
import "./scroll.js"

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const { carrito } = useContext(CartContext)

  let cantidad = 0;
  for (let i = 0; i < carrito.length; i++) {
    cantidad += carrito[i].cantidad
  }

  function menuMobile() {
    setOpen(!open)
  }

  return (
    <>
      <header>
        <nav className="flex md:justify-around justify-between items-center p-4 bg-black z-10">
          <GiHamburgerMenu className="text-white md:hidden inline-block" id="menu-button" onClick={menuMobile} />
          <div className="w-[20%] hidden md:inline-block"><Link to={"/"}><img src="/img/logo.png" alt="" className="w-[150px]" /></Link></div>
          <div className="md:flex items-center justify-around list-none w-[30%] text-center hidden">
            <Link to={'/'} className="text-orange-500 m-2">Home</Link>
            <Link to={"/category/men"} className="text-white m-2">Men</Link>
            <Link to={"/category/women"} className="text-white m-2">Women</Link>
            <Link to={"/blog"} className="text-white m-2">Blog</Link>
            <Link to={"/help"} className="text-white m-2">Help</Link>
          </div>
          <div className="text-white w-[20%] flex items-center justify-center gap-10">
            <Link to={"/cart"}><FaShoppingCart className='text-white m-2 inline' /><span className="text-[12px]">{cantidad}</span></Link>
          </div>
        </nav>
      </header>
      <div
        className={`z-10 bg-[#ffffff] w-full h-full absolute top-0 left-0 transition-all ease-linear duration-300 text-center ${open ? "block" : "hidden"}`}
        id="menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x mt-3 ml-3 cursor-pointer" onClick={menuMobile} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        <img src="/img/logo.png" alt="" className="bg-black p-2 w-[70%] mx-auto mt-12" />
        <ul className="pt-[20px] pr-0 pb-[20px] pl-0 mt-[70px] list-none">
          <li
            className="text-black font-bold block text-[15px] no-underline p-2 cursor-pointer"
          >
            <b className="hover:text-orange-500 duration-150 transition-all ease-in"
            ><Link to={"/"} className="text-[30px]" onClick={menuMobile}>Home</Link></b
            >
          </li>
          <li
            className="text-black font-bold block text-[15px] no-underline p-2 cursor-pointer mt-3"
          >
            <b className="hover:text-orange-500 duration-150 transition-all ease-in"
            ><Link to={"/category/men"} className="text-[30px]" onClick={menuMobile}>Men</Link></b
            >
          </li>
          <li
            className="text-black font-bold block text-[15px] no-underline p-2 cursor-pointer mt-3"
          >
            <b className="hover:text-orange-500 duration-150 transition-all ease-in"
            ><Link to={"/category/women"} className="text-[30px]" onClick={menuMobile}>Women</Link></b
            >
          </li>
          <li
            className="text-black font-bold block text-[15px] no-underline p-2 cursor-pointer mt-3"
          >
            <b className="hover:text-orange-500 duration-150 transition-all ease-in"
            ><Link to={"/blog"} className="text-[30px]" onClick={menuMobile}>Blog</Link></b
            >
          </li>
          <li
            className="text-black font-bold block text-[15px] no-underline p-2 cursor-pointer mt-3"
          >
            <b className="hover:text-orange-500 duration-150 transition-all ease-in"
            ><Link to={"/help"} className="text-[30px]" onClick={menuMobile}>Help</Link></b
            >
          </li>
        </ul>
      </div>
    </>
  )
}

export { Navbar }
