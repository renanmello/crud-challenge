import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import './index.css';
import { StyleProvider } from '@ant-design/cssinjs';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>

  </React.StrictMode>
);