
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from '../pages/Cart'

import NavBar from '../Components/NavBar'
import Provider from '../Contex/Provider'
import ItemDetailContainer from '../pages/ItemDetailContainer'
import ItemListContainer from '../pages/ItemListContainer'


import Layout from './Layout'


const Router = () =>( 
    <Provider>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route index  element={<ItemListContainer />}/>
                <Route path='/:id'  element={<ItemListContainer />}/>

                <Route path="/ItemDetailContainer/" element={<ItemDetailContainer/>}/>
                <Route path="/ItemDetailContainer/category/:id" element={<ItemDetailContainer/>}/>
                <Route path="/Cart/" element={<Cart/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </Provider>
)

export default Router

