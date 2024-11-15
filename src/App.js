import logo from './img/Untitled Project.jpg'; 
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import ProviderList from './components/ProviderList';
import Reports from './components/Reports';
import Alerts from './components/Alerts';
import Purchases from './components/Purchases';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('productos');
  const userName = "Juan Pérez";

  const renderView = () => {
    switch (currentView) {
      case 'productos':
        return <ProductList />;
      case 'proveedores':
        return <ProviderList />;
      case 'reportes':
        return <Reports />;
      case 'alertas':
        return <Alerts />;
      case 'compras':
        return <Purchases />;
      default:
        return <ProductList />;
    }
  };

  return (
    <div className="app">
      <Navbar imagen1={logo} userName={userName} />
      <div className="content">
        {renderView()}
        <Sidebar setCurrentView={setCurrentView} />
      </div>
    </div>
  );
};

export default App;
