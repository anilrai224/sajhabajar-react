import './style.scss'
import BG from '../../assets/choosebg.png'
import SingleReason from './Cards/SingleReason'
import reasons from './reasons'

const ChooseUs = () => {
  return (
    <div className='chooseus'>
        <div className="container">
            <div className="chooseusContents">
                <div className="imgContainer">
                    <img src={BG}/>
                </div>
                <div className="textContainer">
                    <p>Discover The Difference</p>
                    <h2>WHY CHOOSE ORGANIC VILLAGE FOODS?</h2>
                </div>
            <div className="reasons">
                {reasons.map(reason=>(
                    <SingleReason key={reason.title} reason={reason}/>
                ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs