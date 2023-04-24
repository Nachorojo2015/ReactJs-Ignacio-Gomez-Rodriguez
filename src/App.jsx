import Navbar from './components/Navbar'
import Index from './components/Footer/Index';
import Principal from './components/Home/Principal';
import { Navigate, Route, Routes } from 'react-router-dom';
import Blogs from './components/Blog/Blogs';
import Ayuda from './components/Help/Ayuda';
import ItemDetail from './components/ItemDetail';
import Item from './components/itemListContainer/Item';
import Carro from './components/Carro';
import Checkout from './components/Checkout';






function Indice() {


    
    return (
        <div>
            <Navbar logo="img/logo.png"/>
            <Routes>
                <Route path='/' element={<Navigate to={"/home"}/>}></Route>
                <Route path='/home' element={<Principal/>}></Route>
                <Route path='/blogs' element={<Blogs/>}></Route>
                <Route path='/help' element={<Ayuda/>}></Route>
                <Route path='/item/:id' element={<ItemDetail/>}></Route>
                <Route path='/category/:name' element={<Item/>}></Route>
                <Route path='/cart' element={<Carro/>}></Route>
                <Route path='/check' element={<Checkout/>}></Route>
            </Routes>
           <Index/>
        </div>
    )
}

export default Indice
