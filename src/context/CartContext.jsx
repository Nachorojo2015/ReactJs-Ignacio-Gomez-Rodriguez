import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children})=>{

    const [carrito, setCarrito] = useState([])


    return (
        <CartContext.Provider value={{carrito,setCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider