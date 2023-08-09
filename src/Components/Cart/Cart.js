
import React from 'react';
import "./Cart.css";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Cart = (props) => {
    const {cart} = props;

    const totalOrdered = cart.reduce((previous,current) => previous + current.quantity ,0);
    const itemsTotal = cart.reduce((previous, current) => previous + (current.price *current.quantity), 0);
    const shipping = cart.reduce((previous,current) => previous+current.shipping, 0);
    const tax = (itemsTotal + shipping) * 0.15;
    const orderTotal = itemsTotal + shipping+tax;
    
     const navigate = useNavigate(); // Utilisez useNavigate pour la navigation

  const handleCheckout = () => {
    // Naviguer vers la page de paiement avec les articles du panier comme paramètre
    navigate('/payment', { state: { cart: cart } }); // Utilisez navigate au lieu de setLocation
  };

    
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items ordered: {totalOrdered}</h3>
            <p>Items Total: {itemsTotal.toFixed(2)}</p>
            <p>shipping: {shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Order Total: ${orderTotal.toFixed(2)}</h3>
          <Button className="checkout-btn" onClick={handleCheckout}>
        Checkout
      </Button>
        </div>
    );
};

export default Cart;