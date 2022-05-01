import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginService } from "../../service/authentication/loginService";
import signupService from "../../service/authentication/signupService";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH-TOKEN"));

  const navigate = useNavigate();
  const location = useLocation();

  const [authState, setAuthState] = useState({
    isLoggedIn: authToken ? true : false,
    authToken: authToken,
  });

  const loginHandler = async ({ email, password }) => {
    const { data, status } = await loginService({ email, password });
    if (status === 200) {
      localStorage.setItem("AUTH-TOKEN", JSON.stringify(data.encodedToken));
      setAuthState({
        isLoggedIn: true,
        authToken: JSON.stringify(data.encodedToken),
      });
      location.state ? navigate(location.state.from.pathname) : navigate("/");
    }
  };

  const signupHandler = async ({ firstname, lastname, email, password }) => {
    const { data, status } = await signupService({
      firstname,
      lastname,
      email,
      password,
    });
    if (status === 201) {
      localStorage.setItem("AUTH-TOKEN", JSON.stringify(data.encodedToken));
      setAuthState({
        isLoggedIn: true,
        authToken: JSON.stringify(data.encodedToken),
      });
      location.state ? navigate(location.state.from.pathname) : navigate("/");
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem("AUTH-TOKEN");
    setAuthState({ isLoggedIn: false, authToken: undefined });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        loginHandler,
        signupHandler,
        logOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
