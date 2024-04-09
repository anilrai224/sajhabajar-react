import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Links from './links/DashboardLinks'
import CreateProduct from '../pages/create/CreateProduct'
import UpdateProduct from '../pages/update/UpdateProduct'
import DefaultPage from '../pages/default/Default'

const Dashboard = () => {
    return (
        <div>
            <div className="container" style={{ display:'flex',gap:'20px' }}>
                <Links />
                <Routes>
                    <Route>
                        <Route path='/' element={<DefaultPage/>}/>
                        <Route path='create' element={<CreateProduct/>}/>
                        <Route path='update' element={<UpdateProduct/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard