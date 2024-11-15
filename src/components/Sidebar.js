import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setCurrentView }) => {
  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => setCurrentView('productos')}>Productos</button>
      <button className="sidebar-button" onClick={() => setCurrentView('proveedores')}>Proveedores</button>
      <button className="sidebar-button" onClick={() => setCurrentView('reportes')}>Reportes</button>
      <button className="sidebar-button" onClick={() => setCurrentView('alertas')}>Alertas</button>
      <button className="sidebar-button" onClick={() => setCurrentView('compras')}>Compras</button>
    </div>
  );
};

export default Sidebar;

