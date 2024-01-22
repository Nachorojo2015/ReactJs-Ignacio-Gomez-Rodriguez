import { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { FaCheck } from "react-icons/fa";

const Carro = () => {
    const { carrito, setCarrito } = useContext(CartContext)

    if (carrito.length == 0) {
        return `No hay productos en el carrito `
    }

    function eliminarCarrito(e) {
        const id = e.currentTarget.id
        setCarrito(carrito.filter((producto) => producto.id != id))
    }

    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio * carrito[i].cantidad
    }


    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-3'>Shopping Cart</h1>
            <div className='hidden md:block'>
                {
                    carrito.map(producto => (
                        <div className="max-w-sm w-[50%] mx-auto lg:max-w-full lg:flex mt-3" key={producto.id}>
                            <div className="h-48 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${producto.imagen})` }}>
                            </div>
                            <div className="border-gray-400 lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className='flex items-center justify-center space-x-[200px]'>
                                        <div>
                                            <p className='font-bold text-center'>{producto.nombre}</p>
                                            <p className='mt-2 text-center'>Cantidad: {producto.cantidad}</p>
                                            <p className='mt-2 text-center'>{producto.category.toUpperCase()}</p>
                                            <p className='mt-5'><FaCheck className='inline mr-3 text-green-500' /> In stock</p>
                                        </div>
                                        <div>
                                            <p className='mt-2 font-bold text-center'>Subtotal: ${producto.precio * producto.cantidad}</p>
                                            <p className='btn btn-danger mt-[105px]' id={producto.id} onClick={eliminarCarrito}>Remove</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='md:hidden block'>
                {
                    carrito.map(producto => (
                        <div className='flex items-center justify-around mt-3' key={producto.id}>
                            <div className='w-[20%]'>
                                <img src={producto.imagen} alt="" />
                            </div>
                            <div>
                                <p className='font-bold'>{producto.nombre}</p>
                                <p>Cantidad: {producto.cantidad}</p>
                                <p className='font-bold'>Subtotal: ${producto.precio * producto.cantidad}</p>
                                <p>{producto.category.toUpperCase()}</p>
                                <p><FaCheck className='inline text-green-500' /> In stock</p>
                            </div>
                            <div>
                                <button className='btn btn-danger' id={producto.id} onClick={eliminarCarrito}>Remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mx-auto w-[70%] mt-5'>
                <div className='flex justify-between text-[20px]'><p className='font-bold'>TOTAL</p><p className='font-bold'>${total}</p></div>
                <p>Shipping and taxes will be calculated at checkout.</p>
            </div>
            <div className='text-center'><Link to={"/check"} className='btn btn-primary w-[50%] p-3 mt-4'>Checkout</Link></div>
            <p className='text-center mt-4'>or <Link to={"/"} className='text-violet-400'>Continue Shopping <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg></Link></p>
        </div>
    )

}

export { Carro }