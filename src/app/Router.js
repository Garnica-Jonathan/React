
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
            </Route>
            
        </Routes>
    </BrowserRouter>
)

export default Router

