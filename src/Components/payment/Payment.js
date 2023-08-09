import React, { useRef, useState } from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form, Input, message } from 'antd';


const Payment = ({ cart }) => {
 const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cardCvv: '',
  });

  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();


//   
    const handlePayNowClick = () => {
    setIsCardFlipped(true);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    message.success('Payment successful!');
    navigate.push('/');
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    };
    
  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <div className="items-container" style={{ display: 'flex' }}>
        <h3>Items Ordered:</h3>
        {cart.map((item) => (
          <div key={item.key} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
        <Button type="primary"  onClick={handlePayNowClick}>Shop</Button>
       <Modal
        title="Payment"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form>
          <Form.Item label="Card Number">
            <Input
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Card Name">
            <Input
              value={formData.cardName}
              onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Expiration Month">
            <Input
              value={formData.cardMonth}
              onChange={(e) => setFormData({ ...formData, cardMonth: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Expiration Year">
            <Input
              value={formData.cardYear}
              onChange={(e) => setFormData({ ...formData, cardYear: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="CVV">
            <Input
              value={formData.cardCvv}
              onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Payment;
