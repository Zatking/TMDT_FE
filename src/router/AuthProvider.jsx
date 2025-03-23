import { useEffect, useState, createContext, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const role = localStorage.getItem("Role");
    const lastPath = localStorage.getItem("lastPath");
    if (!role && !lastPath) {
      navigate("/", { replace: true });
    } else if (role === "admin") {
      const lastPath = localStorage.getItem("lastPath") || "/AD";
      if (!lastPath.startsWith("/AD")) {
        navigate("/AD", { replace: true });
      } else {
        navigate(lastPath, { replace: true });
      }
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("lastPath", location.pathname);
  }, [location.pathname]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("Token", userData.token);
    localStorage.setItem("Role", userData.role);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("Token");
    localStorage.removeItem("Role");
    localStorage.removeItem("lastPath");
    navigate("/", { replace: true });
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
