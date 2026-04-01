import React from 'react';
import shopingCartImage from '../../assets/shopping-cart-01.png'
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
    return (
        <div>
            <div className="navbar fixed top-0 left-0 w-full z-50 
            bg-base-100 shadow-md pl-4 pr-10  md:px-12 lg:px-52 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} roll="button" 
            className='btn btn-ghost lg:hidden'>
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-2xl ">
          
            </a> */}
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]
             bg-clip-text text-transparent">DigiTools</span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-[16px]">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <p><span className='text-s text-red-500'>0</span><img className='w-full' src={shopingCartImage}alt="Shoping Cart Image"  /></p>
          <a className="btn border-none">Login</a>
          <a className="btn text-white rounded-full px-4 py-3
          bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started</a>
        </div>

      </div>
        </div>
    );
};

export default NavBar;