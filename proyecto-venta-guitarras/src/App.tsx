import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Formulario from './pages/Formulario';
import Usuarios from './pages/Usuarios';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      <Routes>
        {/* Ruta inicial: Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/usuarios" element={<Usuarios />} />
        {/* Rutas privadas */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
