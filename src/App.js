import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import Payment from './Payment';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">

      <Header />
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      {/* </BrowserRouter> */}

      <Footer />

    </div>
  );
}

export default App;

