import React, { useContext, useState } from 'react'
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
        .then(({id}) => alert("Compra exitosa. Su orden es " + id))
        setCarrito([])
        setInputNombre("")
        setInputApellido("")
        setInputTelefono("")
        setInputMail("")
        setInputMailRepeat("")
       }
    }


  return (
    <div className='container-form'>
        <h1 className='checkoutTitulo'>Checkout</h1>
        <form action="">
            <input type="text" placeholder='Nombre' onChange={(e) => setInputNombre(e.target.value)} required/>
            <input type="text" placeholder='Apellido' onChange={(e) => setInputApellido(e.target.value)} required/>
            <input type="text" placeholder='Teléfono' onChange={(e) => setInputTelefono(e.target.value)} required/>
            <input type="text" placeholder='Mail' onChange={(e) => setInputMail(e.target.value)} required/>
            <input type="text" placeholder='Ingrese nuevamente el mail' onChange={(e) => setInputMailRepeat(e.target.value)} required />
            <button onClick={finishBuy} className='btn btn-success'>Finalizar Compra</button>
            {carrito.map((product) => (
                <div>
                <p>{product.nombre}</p>
                <p>Cantidad: {product.cantidad}</p>
                </div>
            ))}
            <p>Total: ${total}</p>
        </form>
    </div>
  )
}

export default Checkout