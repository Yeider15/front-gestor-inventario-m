import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      {/* Redirigimos la raíz (/) directamente al login por ahora */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* Nuestra nueva vista de Login */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;