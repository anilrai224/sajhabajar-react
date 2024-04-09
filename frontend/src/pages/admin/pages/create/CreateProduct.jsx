import React, { useState } from 'react';
import axios from 'axios';

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
      console.log(response)
    } catch (error) {
      console.log('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
      <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Create Product</button>
    </form>
  );
}

export default CreateProduct;
