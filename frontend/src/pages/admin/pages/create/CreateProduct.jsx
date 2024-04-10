import React, { useState } from 'react';
import axios from 'axios';
import './style.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateProduct() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('quantity', quantity);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/product/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.success)
      if(response.data.success){
        toast.success(`${response.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }else{
        toast.error(`${response.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    } catch (error) {
      console.log('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-product-form">
      <input required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
      <input required type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
      <input required type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <input required type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input required type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
      <input required type="file" onChange={(e) => setImage(e.target.files[0])} />
      {image && <div className='imgContainer'>
        <img src={URL.createObjectURL(image)} alt="Selected" />
      </div>}
      <button type="submit">Create Product</button>
      <ToastContainer style={{ zIndex:'100000000' }}/>
    </form>
  );
}

export default CreateProduct;
