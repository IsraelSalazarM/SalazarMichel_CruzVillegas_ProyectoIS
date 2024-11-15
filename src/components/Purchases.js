import React, { useState } from 'react';
import './Purchases.css';

const Purchase = () => {
  const [products] = useState([
    { name: 'Producto A', price: 10.5 },
    { name: 'Producto B', price: 15.0 },
    { name: 'Producto C', price: 20.0 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter((item) => item.name !== productName));
  };

  const calculateTotal = () => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  const handlePayment = () => {
    const total = calculateTotal();
    alert(`Compra realizada. Total: $${total.toFixed(2)}`);
    setCart([]);
  };

  return (
    <div className="purchase-container">
      <h2>Venta</h2>
      <div className="product-list">
        <h3>Productos Disponibles</h3>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <div>{product.name}</div>
              <div>${product.price}</div>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
              >
                Agregar al Carrito
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <h3>Carrito de Compras</h3>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div>{item.name}</div>
                <div>{item.quantity}</div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.name)}
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>
        <div className="total">
          <h4>Total: ${calculateTotal().toFixed(2)}</h4>
        </div>
        <button className="pay-button" onClick={handlePayment}>
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default Purchase;
