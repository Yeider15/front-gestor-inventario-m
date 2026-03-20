import React, { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import '../styles/login-page.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando datos al backend:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">M</div>
        <h1 className="login-title">MiNegocio</h1>
        <p className="login-subtitle">Gestiona tu inventario y finanzas</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              placeholder="tu@correo.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>

          {/* Renderizando el botón desde ui/ */}
          <PrimaryButton text="Iniciar Sesión" type="submit" />
        </form>

        <div className="login-footer">
          ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;