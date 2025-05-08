
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lct-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Louth Civic Trust</h2>
            <p className="text-sm">
              Louth Civic Trust Ltd is a company limited by guarantee. <br />
              Registered in England Number 00923707. <br />
              Charity Registration Number 256578.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white hover:text-lct-gray no-underline">About Us</Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-white hover:text-lct-gray no-underline">Get Involved</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-lct-gray no-underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-white hover:text-lct-gray no-underline">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white hover:text-lct-gray no-underline">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Louth Civic Trust. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
