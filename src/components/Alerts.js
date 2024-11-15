import React from 'react';
import './Alerts.css';

const Alerts = () => {
  return (
    <div className="alerts">
      <h2>Alertas</h2>
      
      <div className="alert">
        <span className="alert-date">Fecha y Hora: 2024-11-07 14:35</span>
        <span className="alert-description">Descripción: ALERTA DE STOCK BAJO - 10 UNIDADES DE COCA COLA DE 3L</span>
        <button className="mark-read">Marcar como leído</button>
        <button className="delete-alert">Eliminar</button>
      </div>

      
    </div>
  );
};

export default Alerts;
