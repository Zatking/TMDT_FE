import { createContext, useState } from "react";
export const AuthContext = createContext();

const ProtectedRouter = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("Token", userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("Token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default ProtectedRouter;
