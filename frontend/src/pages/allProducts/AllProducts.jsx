import React, { useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios'
import SingleProduct from '../../components/productCard/SingleProduct'

const AllProducts = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts =async()=>{
            const response = await axios.get('/api/product/allProducts')
            if(response.data.success){
                setProducts(response.data.products)
                console.log(response.data.products)
            }
        }
        fetchProducts()
    },[])
  return (
    <div className='allProducts'>
        <div className="container">
            <div className="allProductsContents">
                {products.map(product=>(
                    <SingleProduct key={product.id} data={product}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllProducts