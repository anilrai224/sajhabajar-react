import './Navbar.scss'
import Logo from '../../assets/logo.png'
import Links from './links/Links'
import { IoMdSearch } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
    const [toggle,setToggle] = useState(false);
    const [show,setShow] = useState(false);
    const handleClick=(e)=>{
        e.preventDefault();
        setToggle(prev=>!prev);

        setTimeout(() => {
            setShow(prev=>!prev)
        }, 1300);
    }
    return (
        <div className="navbar">
            <div className={`responsiveNav ${toggle && 'active'}`}>
                <Links type='responsive'/>
            </div>
            <div className='container'>
                <div className="navbarContents">
                    <div className="logoContainer">
                        <img src={Logo} />
                    </div>
                    <div className="search">
                        <label htmlFor="search">
                            <input placeholder='Search...' type="text" name="search" id="search" />
                            <div className="searchCategories">
                                <div className="icon">
                                    <IoMdSearch />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="login">
                        <div className="loginDetails">
                            <p>Login</p>
                            <div className="icon">
                                <MdOutlinePerson/>
                            </div>
                        </div>
                        <div className="navCart">
                            <div className="icon">
                                <IoBagOutline />
                            </div>
                            <p>
                                <span>Shoping Basket</span>
                                <strong>NRS 0.0</strong>
                            </p>
                        </div>
                    </div>
                    <div className="navLinksContainer">
                        <button>shop by category</button>
                        <Links type='normal'/>
                        <div className="toggle" onClick={handleClick}>
                            {!show ? <FaBars /> : <CgClose />}
                        </div>
                        <div className="social">
                            <div className="icon">
                                <FaFacebookF />
                            </div>
                            <div className="icon">
                                <FaInstagram />
                            </div>
                            <div className="icon">
                                <FaXTwitter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar