import { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from 'react-router-dom';
import { Error404 } from '../404';
import { collection, getDocs } from "firebase/firestore"
import db from "../../../db/firebase-config"
import "./style.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Item = () => {

  const [productos, setProductos] = useState([])
  const { name } = useParams();
  const itemsRef = collection(db, "items")
  const [loading, setLoading] = useState(true)


  const getProducts = async () => {
    try {
      const itemCollection = await getDocs(itemsRef)
      const items = itemCollection.docs.filter(doc => doc.data().category == name).map((doc => ({ ...doc.data(), id: doc.id })))
      setProductos(items)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      return <Error404 />
    }
  }

  const getAllProducts = async () => {
    try {
      const itemCollection = await getDocs(itemsRef)
      const items = itemCollection.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      setProductos(items)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      return <Error404 />
    }
  }

  if (name) {
    useEffect(() => {
      getProducts()
    }, [name])
  } else {
    useEffect(() => {
      getAllProducts()
    }, [])
  }

  if (loading) {
    return <div className="loader"></div>
  }



  return (
    <div className='mt-[30px] p-3'>
      <Carousel responsive={responsive}>
        {

          productos.map((producto) => (
           <div className='md:w-[90%]' key={producto.id}>
            <img src={producto.imagen} alt="" className='h-[400px] w-full object-cover'/>
            <div className='text-center border p-2'>
               <p>Precio: <strong>${producto.precio}</strong></p>
               <p>{producto.nombre}</p>
               <p>{producto.category.toUpperCase()}</p>
               <Link to={`/item/${producto.id}`} className='hover:text-orange-500 duration-150'>Ver más detalles</Link>
            </div>
           </div>
          )
          )
        }
      </Carousel>
    </div>
  )
}

export { Item }