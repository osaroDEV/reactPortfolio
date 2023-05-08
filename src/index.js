import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Blog from './components/Blog';
import { AppContext } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppContext>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>
      </AppContext>
    </React.StrictMode>
  </BrowserRouter>
);
