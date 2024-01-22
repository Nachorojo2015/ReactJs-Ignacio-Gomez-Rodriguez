import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { FaTwitter } from 'react-icons/fa'
import { BsPinterest } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='w-full bg-black mt-24'>
            <div className="w-full max-w-[1200px] mx-auto flex justify-around gap-[100px] flex-wrap p-5">
                <div className='w-full md:w-[20%]'>
                    <figure className='w-full h-full flex justify-center items-center'>
                        <Link to={"/"}>
                            <img src="/img/logo.png" alt="" className='w-[250px]' />
                        </Link>
                    </figure>
                </div>
                <div className='w-full md:w-[35%]'>
                    <h2 className='text-white mb-6 text-[20px] text-center'>SOBRE NOSOTROS</h2>
                    <p className='text-[#efefef] mb-2 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, accusamus!</p>
                    <p className='text-[#efefef] mb-2 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, accusamus!</p>
                </div>
                <div className='w-full md:w-[20%]'>
                    <h2 className='text-white mb-6 text-[20px] text-center'>SIGUENOS</h2>
                    <div className='flex items-center justify-center mx-auto'>
                        <Link className='list-none w-[45px] h-[45px] ml-7 text-[#f2f2f2] mr-2 text-center transition-all ease-in duration-300 leading-10 hover:text-blue-400'><FaFacebookF/></Link>
                        <Link className='list-none w-[45px] h-[45px] text-[#f2f2f2] mr-2 text-center transition-all ease-in duration-300 leading-10 hover:text-blue-400'><RiInstagramFill /></Link>
                        <Link className='list-none w-[45px] h-[45px] text-[#f2f2f2] mr-2 text-center transition-all ease-in duration-300 leading-10 hover:text-blue-400'><FaTwitter /></Link>
                        <Link className='list-none w-[45px] h-[45px] text-[#f2f2f2] mr-2 text-center transition-all ease-in duration-300 leading-10 hover:text-blue-400'><BsPinterest /></Link>
                    </div>
                </div>
            </div>
            <div className='bg-[#0a1a2a] p-3 text-center text-white'>
                <small className='text-[15px]'>© 2024 <b>GS STORE</b> - Todos los derechos Reservados</small>
            </div>
        </footer>
    )
}

export {Footer}