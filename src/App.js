import React from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Payment from './Components/payment/Payment';
import './App.css'


function App() {
  return (
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/payment" element={<PaymentWrapper />} />
        </Routes>
      </div>
  );
}

const PaymentWrapper = () => {
  const location = useLocation();
  const cart = location.state ? location.state.cart || [] : [];

  return <Payment cart={cart} />;
};

export default App;
