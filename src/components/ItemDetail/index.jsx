import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import Error404 from '../404';
import {doc, getDoc} from "firebase/firestore"
import db from "../../../db/firebase-config"
import { CartContext } from '../../context/CartContext';


const ItemDetail = () => {

  //Arreglar esto

    const {carrito,setCarrito} = useContext(CartContext)
    const [producto, setProducto] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    let [cantidad, setCantidad] = useState(1)


    const getProducto = async ()=>{
      try{
          const itemDoc = doc(db,"items",id)
          const item = await getDoc(itemDoc)
          item.data();
          if(item.exists()){
            const data  = item.data()
            setProducto([data])
            setLoading(false)
            console.log(data)
          } else {
            console.log("Nada en el documento")
          }
      } catch (error){
         return <Error404/>
      }
  }

    useEffect(() => {
      getProducto()
    }, [id, setProducto])
  

    if(loading){
      return <div>Cargando...</div>
    }

    function sumarCantidad(){
      cantidad++;
      setCantidad(cantidad);
      producto[0].cantidad = cantidad
      console.log(producto)
    }

    function restarCantidad(){
      cantidad--;
      setCantidad(cantidad);
      producto[0].cantidad = cantidad
      console.log(producto)
    }

    if(cantidad < 1){
      setCantidad(1)
    }
  
    function addCarrito(){
      setCarrito([].concat(...carrito, producto))
      console.log(carrito)
    }

  return (
    <div className='container-id'>
        <div>
        {
          producto.map((producto) => (
            <div className='card'>
            <img className='product--image' src={producto.imagen} alt="" />
           </div>
          ))
        }
        </div>
        <div>
            {
                producto.map((producto) => (
                    <div key={producto.id}>
                        <h3>{producto.nombre}</h3>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <hr />
                        <h4>${producto.precio}</h4>
                        <p>3 CUOTAS SIN INTERÉS DE ${Math.round(producto.precio / 3)}</p>
                        <h5>SELECCIONE UN TALLE</h5>
                        <div className='botones-talle'> 
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        </div>
                        <div className='cantidad'>
                          <h5>Cantidad</h5>
                        <button className='btn btn-danger' onClick={sumarCantidad}>+</button><p>{cantidad}</p><button className='btn btn-danger' onClick={restarCantidad}>-</button>
                        </div>
                        <button id='agregarCarrito' onClick={addCarrito}>Agregar Al Carrito</button>
                       <div className='compartir'>
                        <BsFillShareFill/>
                         <a href=""><img src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360" alt="" /></a>
                         <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png" alt="" /></a>
                       </div>
                        
                    </div>
                    
                ))
            }
            
        </div>
    </div>
  )
}

export default ItemDetail