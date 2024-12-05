// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Privacy from '../pages/Privacy';
// import Terms from '../pages/Terms';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-gray-200 py-6">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         {/* Footer Brand */}
//         <div className="text-lg font-semibold mb-4 md:mb-0">
//           MyApp © {new Date().getFullYear()}
//         </div>

//         {/* Footer Links */}
//         <ul className="flex space-x-4">
//           <li>
//             <Link to="/privacy" className="hover:text-gray-400">
//               Privacy Policy
//             </Link>
//           </li>
//           <li>
//             <Link to="/terms" className="hover:text-gray-400">
//               Terms of Service
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-gray-400">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-gray-400">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Social Icons */}
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <a href="#facebook" className="hover:text-gray-400">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.35c0 .733.592 1.325 1.325 1.325h11.495v-9.294h-3.117v-3.622h3.117v-2.671c0-3.097 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.919c-1.507 0-1.798.717-1.798 1.768v2.308h3.596l-.467 3.622h-3.129v9.294h6.144c.733 0 1.325-.592 1.325-1.325v-21.35c0-.733-.592-1.325-1.325-1.325z" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and Description */}
        <div>
          <h2 className="text-white text-lg font-bold">HI-FI</h2>
          <p className="mt-4">
            This is the Daily drive website for a high-life.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-200">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-white font-semibold">Follow Us</h3>
          <ul className="mt-4 flex space-x-4">
            <li>
              <a href="#facebook" className="hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.35c0 .733.592 1.325 1.325 1.325h11.495v-9.294h-3.117v-3.622h3.117v-2.671c0-3.097 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.919c-1.507 0-1.798.717-1.798 1.768v2.308h3.596l-.467 3.622h-3.129v9.294h6.144c.733 0 1.325-.592 1.325-1.325v-21.35c0-.733-.592-1.325-1.325-1.325z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#twitter" className="hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.933 4.933 0 002.165-2.723c-.935.555-1.97.959-3.066 1.175a4.916 4.916 0 00-8.37 4.482c-4.083-.205-7.702-2.16-10.126-5.126a4.822 4.822 0 001.523 6.573c-.84-.026-1.628-.257-2.318-.641v.065a4.92 4.92 0 003.946 4.827 4.902 4.902 0 01-2.212.084 4.93 4.93 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.788-.023-1.175-.067a13.937 13.937 0 007.548 2.213c9.054 0 14.001-7.503 14.001-14.002 0-.213-.005-.426-.014-.637.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#linkedin" className="hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.994 19.994h-3.588v-5.569c0-1.329-.028-3.041-1.852-3.041-1.854 0-2.137 1.447-2.137 2.942v5.668h-3.586v-11.447h3.448v1.563h.048c.479-.9 1.643-1.848 3.382-1.848 3.621 0 4.291 2.383 4.291 5.477v6.255zM5.337 7.579c-1.156 0-2.091-.936-2.091-2.092 0-1.155.935-2.092 2.091-2.092 1.157 0 2.092.937 2.092 2.092 0 1.156-.935 2.092-2.092 2.092zM6.748 19.994h-2.823v-11.447h2.823v11.447zM22.225 0h-20.449c-.975 0-1.775.8-1.775 1.775v20.449c0 .975.8 1.775 1.775 1.775h20.449c.975 0 1.775-.8 1.775-1.775v-20.449c0-.975-.8-1.775-1.775-1.775z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

