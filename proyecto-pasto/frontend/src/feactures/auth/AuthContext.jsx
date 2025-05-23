import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const AuthContext = createContext();

// Hook para usar el contexto fácilmente
export const useAuth = () => useContext(AuthContext);

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  // Puedes inicializar el usuario desde localStorage si lo guardas allí tras login
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Función para iniciar sesión (ejemplo)
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};