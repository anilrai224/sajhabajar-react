import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './style.scss'
import axios from 'axios'
import Loader from '../../../../components/loader/Loader';
import AuthFailed from '../../../../components/authFailed/AuthFailed';

const AllProducts = () => {
    const [products,setProducts] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(()=>{
        const fetchProducts =async()=>{
            const response = await axios.get('/api/product/allProducts',{
              headers:{
                "Authorization":`Bearer ${token}`
              }
            })
            if(response.data.success){
              setProducts(response.data.products)
            }else if(!response.data.auth){
              return <AuthFailed/>
            }
        }
        fetchProducts()
    },[])

    function EditProduct(pid){
        navigate(`/admin/edit/${pid}`)
    }

    if(!products){
        return <Loader/>
    }
  return (
    <div className='allProducts'>
        {products.length >0 ? <table className="product-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <tr key={index}>
              <td>
                <div className="imgContainer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
              </td>
              <td>
                <div className="product-info">
                  {product.name}
                </div>
              </td>
              <td>
                <div className="product-info">
                   {product.desc}
                </div>
              </td>
              <td>
                <div className="product-info">
                   {product.category}
                </div>
              </td>
              <td>
                <div className="product-info">
                  Rs. {product.price}
                </div>
              </td>
              <td className='actions'>
                <button onClick={e=>deleteProduct(product._id)}>Delete</button>
                <button onClick={e=>EditProduct(product._id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      :
        <h1>No Products Found!!!</h1>
      }
    </div>
  )
}

export default AllProducts
