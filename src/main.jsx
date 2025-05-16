import { StrictMode } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
// import './App.css';
import Navbar from './components/Navbar.jsx';
import App from './App.jsx';
import Copyright from './components/Copyright.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import BcaDepartments from './components/Program.jsx';
import Upcoming from './components/Upcoming.jsx';
import SemesterOne from './components/SemesterOne.jsx';
import SemesterTwo from './components/SemesterTwo.jsx';
import SemesterThree from './components/SemesterThree.jsx';
import SemesterFour from './components/SemesterFour.jsx';
import SemesterFive from './components/SemesterFive.jsx';
import SemesterSix from './components/SemesterSix.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<BcaDepartments />} />
      <Route path="/Upcoming" element={<Upcoming />} />
      <Route path="/SemesterOne" element={<SemesterOne />} />
      <Route path="/SemesterTwo" element={<SemesterTwo />} />
      <Route path="/SemesterThree" element={<SemesterThree />} />
      <Route path="/SemesterFour" element={<SemesterFour />} />
      <Route path="/SemesterFive" element={<SemesterFive />} />
      <Route path="/SemesterSix" element={<SemesterSix />} />
    </Routes>
    <Footer />
    <Copyright />
  </Router>
</React.StrictMode>

);
