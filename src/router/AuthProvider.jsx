import { useEffect, useState, createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("Token");

  useEffect(() => {
    const checkUserAuth = async () => {
      if (token) {
        token === "admin" ? navigate("/AD") : navigate("/");
      } else navigate("/");
      setIsLoading(false);
    };

    checkUserAuth();
  }, [token, navigate]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("Token", userData.token);
    localStorage.setItem("Role", userData.role);
  };

  const value = useMemo(() => ({ user, login }), [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
