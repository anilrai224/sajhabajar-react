import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Links from './links/DashboardLinks'
import CreateProduct from '../pages/create/CreateProduct'
import UpdateProduct from '../pages/update/UpdateProduct'
import DefaultPage from '../pages/default/Default'
import AllProducts from '../pages/listallProducts/AllProducts'
import Edit from '../pages/edit/Edit'

const Dashboard = () => {
    return (
        <div style={{ marginBottom:'50px' }}>
            <div className="container" style={{ display:'flex',gap:'20px' }}>
                <Links />
                <Routes>
                    <Route>
                        <Route path='/' element={<DefaultPage/>}/>
                        <Route path='create' element={<CreateProduct/>}/>
                        <Route path='update' element={<UpdateProduct/>}/>
                        <Route path='listProducts' element={<AllProducts/>}/>
                        <Route path='edit/:id' element={<Edit/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard