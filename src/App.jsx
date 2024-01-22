import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { Help } from './components/Help';
import { ItemDetail } from './components/ItemDetail';
import { Item } from './components/itemListContainer';
import { Carro } from './components/Carro';
import { Checkout } from './components/Checkout';


function Indice() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Navigate to={"/home"} />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/help' element={<Help />}></Route>
                <Route path='/item/:id' element={<ItemDetail />}></Route>
                <Route path='/category/:name' element={<Item />}></Route>
                <Route path='/cart' element={<Carro />}></Route>
                <Route path='/check' element={<Checkout />}></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default Indice
