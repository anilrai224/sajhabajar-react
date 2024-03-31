import React from 'react'
import { useParams } from 'react-router-dom';
import './Category.scss'

const Category = () => {
    const {name} = useParams();
  return (
    <div>Single Category : {name}</div>
  )
}

export default Category