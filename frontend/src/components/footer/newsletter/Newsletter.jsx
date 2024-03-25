import './Newsletter.scss'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <p>GET DISCOUNT</p>
        <h1>Subscribe To Our NewsLetter</h1>
        <label htmlFor="email">
            <input placeholder='Please Enter your Email Address' type="email" name="email" id="email" />
            <button type="submit">SUBSCRIBE</button>
        </label>
    </div>
  )
}

export default Newsletter