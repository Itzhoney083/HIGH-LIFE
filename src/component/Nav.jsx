import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Users from '../pages/Users';
import CreateUsers from '../pages/CreateUsers';
import Help from '../pages/Help';
import Footer from '../component/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import  "../pages/home.css";
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import About from '../pages/About';
import Contact from '../pages/Contact';
const Nav = () => {
  return (
    <Router>
      <div className=" bg-gray-100">
        {/* Navbar */}
        <nav className="bg-gray-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <div className="text-lg font-bold">HI-LI
            </div>
                <img src="./picture.png" alt="" className="h-12"/>
            {/* Navigation Links */}
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/users" className="hover:text-gray-200">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/createusers" className="hover:text-gray-200">
                  Create Users
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-gray-200">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        {/* Routes */}
   <div className=" flex flex-col " id="Bg">
        <div className="flex  items-center justify-center h-screen ">
          <Routes className="h-96">
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/createusers" element={<CreateUsers />} />
            <Route path="/help" element={<Help />} />
          {/* </Routes> */}
        {/* </div> */}
    {/* </Router> */}
   {/* <Router> */}
     {/* Main Content */}
     {/* <main className="flex-grow"> */}
       {/* <Routes> */}
         {/* <Route path="/" element={<Home />} /> */}
         <Route path="/privacy" element={<Privacy />} />
         <Route path="/terms" element={<Terms />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
     {/* </main> */}

     {/* Footer */}
   </div>
     <Footer />
   </div>
 </Router>  
   
  );
};

export default Nav;
