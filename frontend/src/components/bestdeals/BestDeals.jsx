import './BestDeals.scss'
import GoatImg from '../../assets/goat.png'
import SingleProduct from '../productCard/SingleProduct'
import bestdeals from './bestdeal'

const BestDeals = () => {
  return (
    <div className='bestDeal'>
      <span className='title'>100% Organic</span>
      <h1>Today's Best Deals</h1>
      <div className="container">
        <div className="bestDetalContents">
          <div className="left">
              <div className="imgContainer">
                <img src={GoatImg} alt='Image'/>
              </div>
              <span className="price">NPR 15000</span>
              <div className="textContainer">
                <span>%25</span>
                <p>Save Up to 25% Flat</p>
                <h3>LOCAL BOKA</h3>
                <button>SHOP NOW</button>
              </div>
          </div>
          <div className="right">
            {bestdeals.map((product)=>(
              <SingleProduct data={product}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestDeals