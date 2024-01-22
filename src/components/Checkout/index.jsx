import { useContext, useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {

    const { carrito, setCarrito } = useContext(CartContext)
    const [inputNombre, setInputNombre] = useState("")
    const [inputApellido, setInputApellido] = useState("")
    const [inputTelefono, setInputTelefono] = useState("")
    const [inputMail, setInputMail] = useState("")
    const [inputMailRepeat, setInputMailRepeat] = useState("")


    let total = 0;
    for(let i = 0;i<carrito.length;i++){
        total += carrito[i].precio * carrito[i].cantidad
    }

    const order = {
        buyer : {
            name : inputNombre,
            apellido : inputApellido,
            telefono : inputTelefono,  
            mail : inputMail == inputMailRepeat ? inputMail : "N/A"
        },
        date : new Date(),
        total: total,
        items: carrito.map(product => ({id:product.id, nombre:product.nombre, precio:product.precio, cantidad:product.cantidad}))
    }

    function finishBuy(e){
       e.preventDefault()
       if(inputMail != inputMailRepeat){
        alert("Ingrese nuevamente su mail")
       } else {
        const db = getFirestore();
        const ordersCollection = collection(db,"orders");
        addDoc(ordersCollection,order)
        .then(({id}) =>
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Su orden de Compra es ${id}`,
          showConfirmButton: false,
          timer: 1500
        }))
        setCarrito([])
        setInputNombre("")
        setInputApellido("")
        setInputTelefono("")
        setInputMail("")
        setInputMailRepeat("")
       }
    }


  return (
    <div className='flex justify-around items-center flex-col text-center mt-24 text-black'>
        <h1 className='font-bold text-3xl'>Checkout</h1>
        <form>
            <input type="text" placeholder='Nombre' className='block m-1 border-none rounded-lg shadow-[#0a1a2a] text-center w-[300px] border' onChange={(e) => setInputNombre(e.target.value)} required/>
            <input type="text" placeholder='Apellido' className='block m-1 border-none rounded-lg shadow-[#0a1a2a] text-center w-[300px] border' onChange={(e) => setInputApellido(e.target.value)} required/>
            <input type="text" placeholder='Teléfono' className='block m-1 border-none rounded-lg shadow-[#0a1a2a] text-center w-[300px] border' onChange={(e) => setInputTelefono(e.target.value)} required/>
            <input type="text" placeholder='Mail' className='block m-1 border-none rounded-lg shadow-[#0a1a2a] text-center w-[300px] border' onChange={(e) => setInputMail(e.target.value)} required/>
            <input type="text" placeholder='Ingrese nuevamente el mail' className='block m-1 border-none rounded-lg shadow-[#0a1a2a] text-center w-[300px] border' onChange={(e) => setInputMailRepeat(e.target.value)} required />
            {carrito.map((product) => (
                <div className='mt-2' key={product.id}>
                <p className='font-bold'>{product.nombre}</p>
                <p>Cantidad: {product.cantidad}</p>
                </div>
            ))}
            <p className='font-bold mt-3 text-2xl'>Total: ${total}</p>
            <button onClick={finishBuy} className='btn btn-success mt-2'>Finalizar Compra</button>
        </form>
    </div>
  )
}

export { Checkout }