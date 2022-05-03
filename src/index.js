import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContext } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
);
