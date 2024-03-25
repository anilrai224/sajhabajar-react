import './Campagin.scss'
import Img from '../../assets/corn.png'

const Campaign = () => {
  return (
    <div className='campaign'>
        <div className="container">
            <div className="campaignContent">
                <div className="textContainer">
                    <span>%15</span>
                    <h2>Join To <p> #No Plastic </p> Campaign </h2>
                    <h2>And Get A Disount</h2>
                    <h6>Our Comprehensive experience is the keu to give our clients best services</h6>
                    <span>Join Now</span>
                </div>
                <div className="imgContainer">
                    <img src={Img}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Campaign