import './Hero.scss'
import CategoryLinks from './links/CategoryLinks'
import { FaArrowRight } from "react-icons/fa6";
import HomeyImg from '../../assets/honey.png'
import Grape from '../../assets/angur.png'
import Bucket from '../../assets/bucket.png'
import Services from '../services/Services';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="heroContents">
                <div className="category">
                    <CategoryLinks/>
                </div>
                <div className="offers">
                    <div className="offer1">
                        <div className="textContainer">
                            <div className='save'>
                                <span>%50</span>
                                <p>Save Up to Flat</p>
                            </div>
                            <h2>MEGA SALE</h2>
                            <button>
                                SHOP NOW
                                <div className="icon">
                                    <FaArrowRight />
                                </div>
                            </button>
                        </div>
                        <div className="imgContainer">
                            <img src={HomeyImg}/>
                        </div>
                    </div>
                    <div className="offer2">
                        <div className="textContainer">
                            <div className="sale">
                                <span>SALE</span>
                                <p>Save up to Flat 15%</p>
                            </div>
                            <h5>FRESH FRUIT</h5>
                            <button>SHOP NOW</button>
                        </div>
                        <div className="imgContainer">
                            <div className="img1">
                                <img src={Grape}/>
                            </div>
                            <div className="img2">
                                <img src={Bucket}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Services className='ourServices'/>
    </div>
  )
}

export default Hero