import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Routes className="overflow-auto">
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;