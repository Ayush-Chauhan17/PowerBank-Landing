import React from 'react'
import "./Navbar.css"
import logoo from '../assets/logoo.png'
import { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import underline from '../assets/nav_underline.svg';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg'
const Navbar = () => {

    const [menu,setMenu] = useState("home");
    const menuref = useRef();

    const openMenu = () =>{
        menuref.current.style.right="0";
    }
    const closeMenu = () =>{
        menuref.current.style.right="-350px";
    }

    return (
        <div className='navbar'>
            <img  className="nav-image" src={logoo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuref} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
                <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>⚡ Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#products'><p onClick={()=>setMenu("products")}>✨ Products</p></AnchorLink>{menu==="products"?<img src={underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#3dmodel'><p onClick={()=>setMenu("3dmodel")}>📦 3D Model</p></AnchorLink>{menu==="3dmodel"?<img src={underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#reviews'><p onClick={()=>setMenu("reviews")}>⭐ Reviews</p></AnchorLink>{menu==="reviews"?<img src={underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#faq'><p onClick={()=>setMenu("faq")}>❓ FAQ</p></AnchorLink>{menu==="faq"?<img src={underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>📞 Contact Us</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#newsletter'><p onClick={()=>setMenu("newsletter")}>📬 Newsletter</p></AnchorLink>{menu==="newsletter"?<img src={underline} alt=''/>:<></>}</li>
            </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#products'>🛒 Buy Now</AnchorLink></div>
        </div>
    )
}


export default Navbar
