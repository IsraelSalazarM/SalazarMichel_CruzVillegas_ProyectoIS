import React, { useState } from 'react';
import './ProviderList.css';

const ProviderList = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [newProvider, setNewProvider] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    products: [],
  });
  const [editedProvider, setEditedProvider] = useState(null); 
  const [providers, setProviders] = useState([
    {
      name: 'Proveedor A',
      address: 'Dirección A',
      email: 'proveedorA@email.com',
      phone: '123456789',
      products: ['Producto A', 'Producto B'],
    },
    {
      name: 'Proveedor B',
      address: 'Dirección B',
      email: 'proveedorB@email.com',
      phone: '987654321',
      products: ['Producto C', 'Producto D'],
    },
  ]);
  
  const availableProducts = [
    'Producto A',
    'Producto B',
    'Producto C',
    'Producto D',
    'Producto E',
    'Producto F',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProvider((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setNewProvider((prev) => ({
      ...prev,
      products: checked
        ? [...prev.products, value]
        : prev.products.filter((product) => product !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProviders((prevProviders) => [
      ...prevProviders,
      { ...newProvider },
    ]);
    setNewProvider({
      name: '',
      address: '',
      email: '',
      phone: '',
      products: [],
    });
    setIsFormVisible(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProvider((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedProviders = providers.map((provider) =>
      provider.name === editedProvider.name ? editedProvider : provider
    );
    setProviders(updatedProviders);
    setEditedProvider(null);
    setIsEditFormVisible(false);
  };

  const handleDelete = (providerName) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que quieres eliminar el proveedor "${providerName}"?`);
    if (confirmDelete) {
      setProviders(providers.filter((provider) => provider.name !== providerName));
    }
  };

  return (
    <div className="provider-list">
      <h2>Lista de Proveedores</h2>
      <button
        className="add-provider-button"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? 'Cancelar' : 'Agregar Proveedor'}
      </button>

      {isFormVisible && (
        <form className="provider-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre del Proveedor"
            value={newProvider.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={newProvider.address}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={newProvider.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={newProvider.phone}
            onChange={handleChange}
            required
          />

          <fieldset>
            <legend>Productos Proveídos</legend>
            {availableProducts.map((product) => (
              <label key={product} className="checkbox-label">
                <input
                  type="checkbox"
                  value={product}
                  checked={newProvider.products.includes(product)}
                  onChange={handleCheckboxChange}
                />
                {product}
              </label>
            ))}
          </fieldset>

          <button type="submit">Agregar</button>
        </form>
      )}

      {isEditFormVisible && editedProvider && (
        <form className="provider-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre del Proveedor"
            value={editedProvider.name}
            onChange={handleEditChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={editedProvider.address}
            onChange={handleEditChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={editedProvider.email}
            onChange={handleEditChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={editedProvider.phone}
            onChange={handleEditChange}
            required
          />

          <fieldset>
            <legend>Productos Proveídos</legend>
            {availableProducts.map((product) => (
              <label key={product} className="checkbox-label">
                <input
                  type="checkbox"
                  value={product}
                  checked={editedProvider.products.includes(product)}
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    setEditedProvider((prev) => ({
                      ...prev,
                      products: checked
                        ? [...prev.products, value]
                        : prev.products.filter((product) => product !== value),
                    }));
                  }}
                />
                {product}
              </label>
            ))}
          </fieldset>

          <button type="submit">Actualizar Proveedor</button>
          <button type="button" onClick={() => setIsEditFormVisible(false)}>
            Cancelar
          </button>
        </form>
      )}

      <div className="provider-table">
        <div className="provider-header">
          <div>Nombre</div>
          <div>Dirección</div>
          <div>Email</div>
          <div>Teléfono</div>
          <div>Productos</div>
          <div>Acciones</div>
        </div>
        {providers.map((provider, index) => (
          <div key={index} className="provider-item">
            <div>{provider.name}</div>
            <div>{provider.address}</div>
            <div>{provider.email}</div>
            <div>{provider.phone}</div>
            <div>{provider.products.join(', ')}</div>
            <div>
              <button
                className="edit-button"
                onClick={() => {
                  setEditedProvider(provider);
                  setIsEditFormVisible(true);
                }}
              >
                Editar
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(provider.name)}
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

export default ProviderList;
