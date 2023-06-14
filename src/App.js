import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import Home from './Home';
import BestBooks from './BestBooks'; // Importing BestBooks Component
import About from './About'; // Importing About Component
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { userAuthenticated } = useAuth0();

  return (
    <>
      <Router className="App">
        <Header />
        <Routes>
          {/* path for a home page but it isnt implemented */}
          <Route exact path="/" element={<BestBooks />} />
          {/* PLACEHOLDER: aa a route with a path of /'about' that renders the 'About' component*/}
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={userAuthenticated ? <Profile /> : <Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

