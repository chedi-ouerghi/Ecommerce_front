import React, {  useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import axios from 'axios';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
import productsData from '../../fakeData/productsData'; // Assurez-vous que le chemin d'importation est correct


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);

   useEffect(() => {
        // Effectuer la requête GET pour obtenir les données du fichier products.json
        fetch('/products.JSON')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); // Ajoutez ce log pour vérifier les données
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Ajoutez ce log pour vérifier les erreurs
                setError('Une erreur est survenue lors de la récupération des données.');
            });
    }, []);
    
    const handleAddToCart = (product) => {
        const updatedCart = [...cart]; // Create a copy of the cart
        const checkAlreadyAdded = updatedCart.find(addedProduct => product.key === addedProduct.key);

        if (!checkAlreadyAdded) {
            product.quantity = 1;
            updatedCart.push(product); // Add the product to the copy
        } else {
            checkAlreadyAdded.quantity += 1;
        }

        setCart(updatedCart); // Update the cart state
        addToDb(product.key);
    }

    return (
          <div className="shop-container">
      <div className="product-container">
        {productsData.map(product => (
          <Product key={product.key} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
      {/* {error && <p className="error-message">{error}</p>} */}
    </div>
    );
};

export default Shop;
