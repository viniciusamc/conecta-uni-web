import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home/index.jsx';
import { Router } from 'react-router-dom';
import { Routes } from './routes/index.jsx';
import { AuthProvider } from './service/auth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <Routes />
        </AuthProvider>
    </React.StrictMode>,
);
