import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar01 from './components/Navbar01.jsx';
import SobrePasto from './feactures/pasto/SobrePasto.jsx';
import CarnivalDays from './feactures/carnaval/CarnivalDays.jsx';
import SobreCarnaval from './feactures/carnaval/SobreCarnaval.jsx';
import Home from './feactures/pasto/Home.jsx';
import Footer02 from './components/Footer02.jsx';
import ListaEventos from './feactures/eventos/ListaEventos.jsx';
import ListaEventos2 from './feactures/eventos/ListaEventos2.jsx';
import ListaEventos3 from './feactures/eventos/ListaEventos3.jsx';
import ListaEventos4 from './feactures/eventos/ListaEventos4.jsx';
import ListaEventos5 from './feactures/eventos/ListaEventos5.jsx';
import ListaEventos6 from './feactures/eventos/ListaEventos6.jsx';
import Login from './feactures/auth/login.jsx';
import Register from './feactures/auth/Register.jsx';
import CoordinadorDashboard from './feactures/auth/CoordinadorDashboard.jsx';
import Comentarios from './components/Comentarios.jsx';
import './assets/style/appStyle01.css';
import './assets/style/StyleCarnaval.css'; 

import { AuthProvider } from './feactures/auth/AuthContext.jsx'; // <-- Importa el AuthProvider
import ProtectedRoute from './feactures/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar01 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-pasto" element={<SobrePasto />} />
          <Route path="/carnival-days" element={<CarnivalDays />} />
          <Route path="/sobre-carnaval" element={<SobreCarnaval />} />
          <Route path="/listaeventos" element={<ListaEventos />} />  
          <Route path="/listaeventos2" element={<ListaEventos2 />} />  
          <Route path="/listaeventos3" element={<ListaEventos3 />} />  
          <Route path="/listaeventos4" element={<ListaEventos4 />} />  
          <Route path="/listaeventos5" element={<ListaEventos5 />} />  
          <Route path="/listaeventos6" element={<ListaEventos6 />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard-coordinador"
            element={
              <ProtectedRoute requiredRole="admin">
                <CoordinadorDashboard />
              </ProtectedRoute>
            }
          />
        <Route path="/Comentarios" element={<Comentarios />} />
        </Routes>
        <Footer02 />
      </Router>
    </AuthProvider>
  );
}

export default App;

