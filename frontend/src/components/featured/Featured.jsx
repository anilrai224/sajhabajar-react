import Caresoul from '../caresoul/Caresoul'
import { products } from './product'
import './style.scss'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="featuredContents">
                <Caresoul type='featured' product={products}/>
            </div>
        </div>
    </div>
  )
}

export default Featured