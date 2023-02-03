import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.scss';
import 'normalize.css';
import 'animate.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
