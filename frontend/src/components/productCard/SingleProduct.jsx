import { FaCartShopping } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import './style.scss'

const SingleProduct =({data})=>{
  return (
    <div className="card">
      <div className="imgContainer">
        <img src={data?.img} alt='Product Image'/>
      </div>
      <div className="textContainer">
        <div className="name">
          <p>{data?.category}</p>
          <div className="stars">
            <IoMdStarOutline className='icon' />
            <IoMdStarOutline className='icon' />
            <IoMdStarOutline className='icon' />
            <IoMdStarOutline className='icon' />
            <IoMdStarOutline className='icon' />
          </div>
        </div>
        <h3>{data?.name}</h3>
        <span>NPR {data?.price}</span>
      </div>
      <button>
        <FaCartShopping className='icon' />
        add to cart
      </button>
    </div>
  )
}

export default SingleProduct