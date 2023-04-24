import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { FaTwitter } from 'react-icons/fa'
import { BsPinterest } from 'react-icons/bs'

const Index = () => {
  return (
         <footer className='pie-pagina'>
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <Link to={"/"}>
                        <img src="/img/logo.png" alt="" />
                        </Link>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, accusamus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, accusamus!</p>
                </div>
                <div className="box">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                        <a href=""><FaFacebookF/></a>
                        <a href=""><RiInstagramFill/></a>
                        <a href=""><FaTwitter/></a>
                        <a href=""><BsPinterest/></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>© 2021 <b>GS STORE</b> - Todos los derechos Reservados</small>
            </div>
            </footer>
  )
}

export default Index