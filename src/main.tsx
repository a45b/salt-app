import React from 'react';
import ReactDOM from 'react-dom/client';
import { SaltProvider } from "@salt-ds/core";
import "@salt-ds/theme/index.css";
import App from './App.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SaltProvider>
      <App />
    </SaltProvider>
  </React.StrictMode>,
)
