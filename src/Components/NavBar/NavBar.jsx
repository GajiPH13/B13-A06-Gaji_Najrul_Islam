import React from 'react';
import shopingCartImage from '../../assets/shopping-cart-01.png'
const NavBar = () => {
    return (
        <div>
            <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md px-50 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl ">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]
             bg-clip-text text-transparent">DigiTools</span>
            </a>
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
          <img src={shopingCartImage}alt="Shoping Cart Image"  />
          <a className="btn border-none">Login</a>
          <a className="btn text-white rounded-full px-4 py-3
          bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started</a>
        </div>

      </div>
        </div>
    );
};

export default NavBar;