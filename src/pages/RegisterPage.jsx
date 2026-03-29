// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importante para navegar sin recargar
import PrimaryButton from '../components/ui/PrimaryButton';
import '../styles/register-page.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
    // Limpiamos el error si el usuario empieza a escribir de nuevo
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    console.log('Enviando datos de registro al backend:', { 
      name: formData.name, 
      email: formData.email, 
      password: formData.password 
    });
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-logo">M</div>
        <h1 className="register-title">Únete a MiNegocio</h1>
        <p className="register-subtitle">Crea tu cuenta y empieza a gestionar tu inventario</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Ej. Juan Pérez" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              placeholder="tu@correo.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="••••••••" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required 
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          {/* Reutilizamos tu componente PrimaryButton */}
          <PrimaryButton text="Crear Cuenta prueba" type="submit" />
        </form>

        <div className="register-footer">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;