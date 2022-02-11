import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Mesa } from './components/Mesa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
      <NavBar/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastrar" element={<Register/>} />
            <Route path="/mesa" element={<Mesa/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


