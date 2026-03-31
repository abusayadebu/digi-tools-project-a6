import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';

const Footer = () => {
    return (
        <footer className="container mx-auto mb-12 bg-neutral text-neutral-content px-10 py-10 lg:px-28 lg:py-20">
        <div className='footer sm:footer-horizontal'>
            <div>
        <a className="cursor-pointer text-3xl font-extrabold text-white">DigiTools</a>
        <p className='max-w-sm opacity-70'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>

        </div>
  <nav>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <div className="grid grid-flow-col gap-4">
      <a className='bg-white text-black rounded-full p-2 cursor-pointer'>
        <TiSocialFacebook className='text-2xl'></TiSocialFacebook>
      </a>
      <a className='bg-white text-black rounded-full p-2 cursor-pointer'>
        <TiSocialInstagram className='text-2xl'></TiSocialInstagram>
      </a>
      <a className='bg-white text-black rounded-full p-2 cursor-pointer'>
        <FaXTwitter className='text-2xl'></FaXTwitter>
      </a>
    </div>
  </nav>
        </div>
        <hr className='text-white opacity-20 mt-20'/>
        <div className='flex items-center justify-between opacity-50 mt-7'>
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className='flex items-center gap-4 lg:gap-8 flex-wrap'>
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>
                <a href="">Cookies</a>
            </div>
        </div>

</footer>
    );
};

export default Footer;