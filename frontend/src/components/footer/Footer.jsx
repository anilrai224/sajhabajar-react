import './footer.scss'
import Newsletter from './newsletter/Newsletter'
import Logo from '../../assets/footer-logo.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import bgImage from '../../assets/footer.png'

const Footer = () => {
    return (
        <div className='footer'>
            <Newsletter />
            <div className="imgContainer">
                <img src={bgImage}/>
            </div>
            <div className="container">
                <div className="footerContents">
                    <div className="left">
                        <img src={Logo} />
                        <p>Nourishing communities sustainably. Discover the essence of
                            freshness with our handpicked selection of locally sourced organic
                            treasures. Join us in fostering a healthier world, one bite at a time.</p>
                        <div className="socials">
                            <div className="icon">
                                <FaFacebookF />
                            </div>
                            <div className="icon">
                                <FaInstagram />
                            </div>
                            <div className="icon">
                                <FaXTwitter />
                            </div>
                            <div className="icon">
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <h2>Category</h2>
                        <div className="links">
                            <NavLink to='/categroy/Vegetable'>Vegetable</NavLink>
                            <NavLink to='/categroy/Fruits'>Fruits</NavLink>
                            <NavLink to='/categroy/Meat'>Meat</NavLink>
                            <NavLink to='/categroy/Jadibuti'>Jadibuti</NavLink>
                            <NavLink to='/categroy/Honey'>Honey</NavLink>
                            <NavLink to='/categroy/Ghee'>Vegetable</NavLink>
                            <NavLink to='/categroy/Ingredients'>Vegetable</NavLink>
                            <NavLink to='/categroy/HomeMade'>Home Made</NavLink>
                        </div>
                    </div>
                    <div className="right">
                        <h2 >Contact</h2>
                        <div className="address">
                            <a href={`tel:+9779816731608`}>
                                <FaPhoneAlt className='icon' />
                                +977 9847516161
                            </a>
                            <a href={`mailto:sajhabajar@gmail.com`}>
                                <MdEmail className='icon' />
                                sajhabajar@gmail.com
                            </a>
                            <a>
                                <IoLocationSharp className='icon' />
                                Kathmandu, Balkhu
                            </a>

                        </div>
                    </div>
                </div>
                <div className="copyright" style={{ color:'white',textAlign:'center' }}>
                    <p>© 2024 SAJHA BAZAR ALL RIGHT RESERVED. MADE BY <span>SAJHA BAJAR</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer