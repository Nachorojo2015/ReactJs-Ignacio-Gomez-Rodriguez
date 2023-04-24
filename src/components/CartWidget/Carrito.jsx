import { Link } from 'react-router-dom'
import './Carrito.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const carrito = () => {

  const {carrito} = useContext(CartContext)

  let cantidad = 0;
  for(let i=0;i<carrito.length;i++){
    cantidad += carrito[i].cantidad
  }

  return (
    <Link to={"/cart"}><FaShoppingCart className='icons'/><p id='numero'>{cantidad}</p></Link>

  )
}

export default carrito