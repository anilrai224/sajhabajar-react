import React, { useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import './style.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProduct=()=> {
    const [tempProduct,setTempProduct] = useState(null);

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  const {id} = useParams();

  const token = localStorage.getItem('token')
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('quantity', quantity);
    formData.append('image',)//todo

    try {
        const response = await axios.post(`/api/product/getAProduct/${id}`,formData,{
          headers:{
            "Authorization":`Bearer ${token}`
          }
        });
        console.log(response)
    } catch (error) {
        console.log('Error fetching a Product',error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="create-product-form">
      <input required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
      <input required type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
      <input required type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <input required type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input required type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
      <button type="submit">Update Product</button>
      <ToastContainer style={{ zIndex:'100000000' }}/>
    </form>
  );
}

export default CreateProduct;
