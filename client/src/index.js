import React from 'react';
import ReactDOM from 'react-dom/client';
import DataProvider from '../src/components/Context/DataContext';
import './index.css';
import App from './routes/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <DataProvider>
    <App />
    </DataProvider>
  </React.StrictMode>
  
);
