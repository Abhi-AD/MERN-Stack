import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
     return (
          <footer className='bg-gray-900 text-white py-8'>
               <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row gap-5 md:justify-between'>
                         {/* About Section */}
                         <div className='mb-6 md:mb-0 md:w-1/2'>
                              <h2 className='text-2xl font-bold mb-4'>CareerConnect</h2>
                              <p className='text-gray-400'>
                                   At CareerConnect, we empower your career journey by connecting you with top job opportunities and resources. Our mission is to simplify job searching and help you advance with ease and confidence.
                              </p>
                         </div>
                         {/* Navigation Links */}
                         <div className='mb-6 md:mb-0 md:w-1/4'>
                              <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                              <ul>
                                   <li><Link to="/" className='text-gray-400 hover:text-[#00c0e4]'>Home</Link></li>
                                   <li><Link to="/jobs" className='text-gray-400 hover:text-[#00c0e4]'>Job Listings</Link></li>
                                   <li><Link to="/about" className='text-gray-400 hover:text-[#00c0e4]'>About Us</Link></li>
                                   <li><Link to="/contact" className='text-gray-400 hover:text-[#00c0e4]'>Contact</Link></li>
                              </ul>
                         </div>
                         {/* Social Media Links */}
                         <div className='md:w-1/4'>
                              <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
                              <div className='flex space-x-4'>
                                   <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#00c0e4]'>
                                        <Facebook className='h-6 w-6' />
                                   </a>
                                   <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#00c0e4]'>
                                        <Twitter className='h-6 w-6' />
                                   </a>
                                   <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#00c0e4]'>
                                        <Linkedin className='h-6 w-6' />
                                   </a>
                                   <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#00c0e4]'>
                                        <Instagram className='h-6 w-6' />
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className='mt-8 border-t border-gray-700 pt-4 text-left text-gray-400'>
                         <div className="flex flex-col md:flex-row gap-2 justify-between">
                              <p>&copy; {new Date().getFullYear()} CareerConnect. All rights reserved.</p>
                              <p className='mb-4'>
                                   <Link to="/privacy-policy" className='text-gray-400 hover:text-[#00c0e4]'>Privacy Policy</Link> |
                                   <Link to="/terms-of-service" className='text-gray-400 hover:text-[#00c0e4]'> Terms of Service</Link>
                              </p>
                         </div>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;
