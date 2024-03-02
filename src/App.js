// App.js
import React, { useState } from 'react';
import ProductCatalogue from './ProductCatalogue';
import ShoppingCart from './ShoppingCart';
import SignUpForm from './SignUpForm';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleSignUp = (userData) => {
    // Implement user registration logic
    setUser(userData);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <header>
        <h1>Shopping Cart App</h1>
      </header>
      <main>
        {user ? (
          <div>
            <p>Welcome, {user.name}!</p>
            <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        ) : (
          <SignUpForm onSignUp={handleSignUp} />
        )}
        <input
          type="text"
          placeholder="Search by category..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ProductCatalogue addToCart={addToCart} searchTerm={searchTerm} />
      </main>
    </div>
  );
};

export default App;