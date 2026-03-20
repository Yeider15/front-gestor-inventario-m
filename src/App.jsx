import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      {/* Redirigimos la raíz (/) directamente al login por ahora */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* Nuestra nueva vista de Login */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;