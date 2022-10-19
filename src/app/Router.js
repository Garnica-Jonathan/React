
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from '../pages/Cart'

import NavBar from '../Components/NavBar'
import Provider from '../Contex/Provider'
import ItemDetailContainer from '../pages/ItemDetailContainer'
import ItemListContainer from '../pages/ItemListContainer'


import Layout from './Layout'
import NewPag from '../pages/NewPag'
import Finalizar from '../pages/Finalizar'


const Router = () =>( 
    <Provider>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<ItemListContainer />}/>
                <Route path='/Item/'  element={<ItemListContainer />}/>
                <Route path="/categoria/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
                <Route path="/NewPag/" element={<NewPag/>}/>
                <Route path="/Cart/" element={<Cart/>}/>
                <Route path="/Finalizar/" element={<Finalizar/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </Provider>
)

export default Router

