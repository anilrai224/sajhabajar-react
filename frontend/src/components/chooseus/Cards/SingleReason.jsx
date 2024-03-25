import './style.scss'

const SingleReason = ({reason}) => {
  return (
    <div className='reason' key={Math.random()}>
        <div className="imgContainer">
            <img src={reason.img}/>
        </div>
        <div className="textContainer">
            <div className="logoContainer">
                <img src={reason.logo}/>
            </div>
            <h4>{reason.title}</h4>
            <p>{reason.desc}
            </p>
        </div>
    </div>
  )
}

export default SingleReason