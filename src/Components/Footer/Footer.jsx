import React from "react";
import { TiSocialInstagram,TiSocialFacebook,TiSocialTwitter  } from "react-icons/ti";
const Footer = () => {
  return (
    <div>
      <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
            
          <div className="flex justify-evenly ">
            {/* Logo & Description */}
            
            <div className="">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold tracking-tighter text-white">
                  DigiTools
                </h2>
              </div>

              <p className="text-zinc-400  max-w-md">
                Premium digital tools for <br />
                creators, professionals, and businesses.<br/> Work smarter with our
                suite of powerful tools.
              </p>
                {/* className="grid grid-cols-1 md:grid-cols-12 " */}
             
            </div>

            {/* Quick Links */}
            
              <div className="">
                <h3 className="text-white font-semibold mb-6 ">Product</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Models
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      API
                    </a>
                  </li>
                </ul>
              </div>

              <div className="">
                <h3 className="text-white font-semibold mb-6 ">Company</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="">
                <h3 className="text-white font-semibold mb-6 ">Resources</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Cookie Settings
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-white font-semibold mb-6 ">Social Links</h3>
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white">
                  <a href="#" className="hover:text-purple-500 transition-colors"><TiSocialInstagram /></a>
                </div>
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white">
                  <a href="#" className="hover:text-purple-500 transition-colors"><TiSocialFacebook /></a>
                </div>
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white">
                  <a href="#" className="hover:text-purple-500 transition-colors"><TiSocialTwitter /></a>
                </div>
                </div>
                
              </div>
              </div>
            
          

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t
           border-zinc-800 
           flex flex-col gap-4 md:flex-row items-center justify-between md:gap-4 text-sm text-zinc-500">
            <div>
              © {new Date().getFullYear()} Digitools. All rights reserved.
            </div>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
