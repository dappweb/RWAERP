import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WarehouseBusinessPage from './pages/WarehouseBusiness';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
const isWarehouse = window.location.pathname.startsWith('/warehouse');
const Page = isWarehouse ? WarehouseBusinessPage : App;
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
