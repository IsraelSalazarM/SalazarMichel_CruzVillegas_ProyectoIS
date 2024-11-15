import React, { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    brand: '',
    content: '',
    price: '',
    stock: '',
    minStock: '',
  });
  const [editedProduct, setEditedProduct] = useState(null); 
  const [products, setProducts] = useState([
    {
      name: 'Producto A',
      brand: 'Marca A',
      content: '500g',
      price: 10.5,
      stock: 50,
      minStock: 10,
    },
    {
      name: 'Producto B',
      brand: 'Marca B',
      content: '1L',
      price: 15.0,
      stock: 30,
      minStock: 5,
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setNewProduct({
      name: '',
      brand: '',
      content: '',
      price: '',
      stock: '',
      minStock: '',
    });
    setIsFormVisible(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((product) =>
      product.name === editedProduct.name ? editedProduct : product
    );
    setProducts(updatedProducts);
    setEditedProduct(null);
    setIsEditFormVisible(false);
  };

  const handleDelete = (productName) => {
    const confirmDelete = window.confirm(
      `¿Estás seguro de que quieres eliminar el producto "${productName}"?`
    );
    if (confirmDelete) {
      setProducts(products.filter((product) => product.name !== productName));
    }
  };

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <button
        className="add-product-button"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? 'Cancelar' : 'Agregar Producto'}
      </button>

      {isFormVisible && (
        <form className="product-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre del Producto"
            value={newProduct.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Marca"
            value={newProduct.brand}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="content"
            placeholder="Contenido"
            value={newProduct.content}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="minStock"
            placeholder="Stock Mínimo"
            value={newProduct.minStock}
            onChange={handleChange}
            required
          />
          <button type="submit">Agregar</button>
        </form>
      )}

      {isEditFormVisible && editedProduct && (
        <form className="product-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre del Producto"
            value={editedProduct.name}
            onChange={handleEditChange}
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Marca"
            value={editedProduct.brand}
            onChange={handleEditChange}
            required
          />
          <input
            type="text"
            name="content"
            placeholder="Contenido"
            value={editedProduct.content}
            onChange={handleEditChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={editedProduct.price}
            onChange={handleEditChange}
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={editedProduct.stock}
            onChange={handleEditChange}
            required
          />
          <input
            type="number"
            name="minStock"
            placeholder="Stock Mínimo"
            value={editedProduct.minStock}
            onChange={handleEditChange}
            required
          />
          <button type="submit">Actualizar Producto</button>
          <button type="button" onClick={() => setIsEditFormVisible(false)}>
            Cancelar
          </button>
        </form>
      )}

      <div className="product-table">
        <div className="product-header">
          <div>Nombre</div>
          <div>Marca</div>
          <div>Contenido</div>
          <div>Precio</div>
          <div>Stock</div>
          <div>Stock Mínimo</div>
          <div>Acciones</div>
        </div>
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <div>{product.name}</div>
            <div>{product.brand}</div>
            <div>{product.content}</div>
            <div>${product.price}</div>
            <div>{product.stock}</div>
            <div>{product.minStock}</div>
            <div>
              <button
                className="edit-button"
                onClick={() => {
                  setEditedProduct(product);
                  setIsEditFormVisible(true);
                }}
              >
                Editar
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(product.name)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

