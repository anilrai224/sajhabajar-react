import './style.scss'
import AmalaImg from '../../assets/amala.png'
import AcharImg from '../../assets/achar.png'
import FruitImg from '../../assets/fruits.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="container">
            <div className="offersContents">
                <div className="offer">
                    <div className="imgContainer">
                        <img className='img1' src={AmalaImg}/>
                        <img className='img2' src={AcharImg}/>
                    </div>
                    <div className="textContainer">
                        <span>%15</span>
                        <p>Organic Home Made Achar</p>
                        <h2>AMALA KO ACHAR</h2>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="offer1">
                    <div className="imgContainer">
                        <img src={FruitImg}/>
                    </div>
                    <div className="textContainer">
                        <span>%15<br/> off</span>
                        <div className="text">
                            <p>Vegetables</p>
                            <h2>COMBO OFFER</h2>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers