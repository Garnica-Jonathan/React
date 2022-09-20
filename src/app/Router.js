
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from '../Components/Cart'

import NavBar from '../Components/NavBar'
import ItemDetailContainer from '../pages/ItemDetailContainer'
import ItemListContainer from '../pages/ItemListContainer'


import Layout from './Layout'


const Router = () =>( 
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route index  element={<ItemListContainer />}/>
                <Route path='/:id'  element={<ItemListContainer />}/>

                <Route path="/ItemDetailContainer/" element={<ItemDetailContainer/>}/>
                <Route path="/ItemDetailContainer/:asd" element={<ItemDetailContainer/>}/>
                <Route path="/Cart/" element={<Cart/>}/>
            </Route>
            
        </Routes>
    </BrowserRouter>
)

export default Router

