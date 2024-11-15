import React, { useState } from 'react';
import './Reports.css'
const Reports = () => {
  const [reportType, setReportType] = useState('');
  const [date, setDate] = useState('');
  const [format, setFormat] = useState('');

  return (
    <div className="reports">
      <h2>Generar Reportes</h2>
      <div className="filters">
        <label>
          Tipo de Reporte:
          <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="compras">Reporte de Compras</option>
            <option value="ventas">Reporte de Ventas</option>
            <option value="inventario">Reporte de Inventario</option>
          </select>
        </label>
        <label>
          Seleccionar Fecha:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Formato:
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
          </select>
        </label>
      </div>
      <button>Descargar Reporte</button>
      <button>Imprimir Reporte</button>
    </div>
  );
};

export default Reports;
