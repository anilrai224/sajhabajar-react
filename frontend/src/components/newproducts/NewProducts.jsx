import './newProduct.scss'
import { products } from './product'
import Caresoul from '../caresoul/Caresoul'

const NewProducts = () => {
  return (
    <div className='newProducts'>
        <div className="container">
            <div className="newProductsContents">
                <div className="products">
                  <Caresoul type='new' product={products}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewProducts
