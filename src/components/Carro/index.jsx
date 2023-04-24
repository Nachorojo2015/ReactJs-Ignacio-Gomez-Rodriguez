import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Carro = () => {
    const { carrito, setCarrito } = useContext(CartContext)
    console.log(carrito)

    if(carrito.length == 0){
        return `No hay productos en el carrito `
    }

    function eliminarCarrito(e){
        const id = e.currentTarget.id
        setCarrito(carrito.filter((producto) => producto.id != id))
    }

    function vaciarCarrtio(){
        setCarrito([])
    }

    let total = 0;
    for(let i = 0;i<carrito.length;i++){
        total += carrito[i].precio * carrito[i].cantidad
    }
   

    return (

        <div>
           {
 carrito.map((producto) => (
    <div className='container-productos-carrito'>
    <div>
    <img src={producto.imagen} alt="" />
   </div>
   <div>
    <p>Nombre:</p>
    <p>{producto.nombre}</p>
</div>
<div>
    <p>Cantidad:</p>
    <p>{producto.cantidad}</p>
</div>
<div>
    <p>Precio:</p>
    <p>${producto.precio}</p>
</div>
<div>
    <p>SubTotal:</p>
    <p>${producto.cantidad * producto.precio}</p>
</div>
<div>
<BsFillTrashFill className="borrarCarrito" id={producto.id} onClick={eliminarCarrito}/>
</div>
</div>
        ))
           }
           <div className='container-options-carrito'>
            <div>
              <button className='btn btn-warning' onClick={vaciarCarrtio}>Vaciar Carrito</button>
            </div>
            <div>
                <p>TOTAL : ${total}</p>
            </div>
            <div>
                <Link to={"/check"}><button className='btn btn-success'>Comprar</button></Link>
            </div>
           </div>
        </div>
    )
   
}

export default Carro