import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Login from './components/Login';



function App() {
  return (
    <>
      <Router>
      <NavBar />
      <Routes> 
          <Route path='/' exact element={ <Home />}></Route>
          <Route path='/services' exact element={<Services />}> </Route>
          <Route path='/products' exact element={<Products />}> </Route>
          <Route path='/sign-up' exact element={<SignUp />}> </Route>
          <Route path = '/' exact element={<Login />}></Route>
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
