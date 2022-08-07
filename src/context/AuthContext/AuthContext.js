import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginService } from "../../service/authentication/loginService";
import signupService from "../../service/authentication/signupService";
import { toast } from "react-hot-toast";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH-TOKEN"));
  const userInfo = JSON.parse(localStorage.getItem("USER-INFO"));

  const navigate = useNavigate();
  const location = useLocation();

  const [authState, setAuthState] = useState({
    isLoggedIn: authToken ? true : false,
    authToken: authToken,
    userInfo: userInfo,
  });

  const loginHandler = async ({ email, password }) => {
    try {
      const { data, status } = await loginService({ email, password });
      if (status === 200) {
        localStorage.setItem("AUTH-TOKEN", JSON.stringify(data.encodedToken));
        localStorage.setItem("USER-INFO", JSON.stringify(data.foundUser));
        setAuthState({
          isLoggedIn: true,
          authToken: JSON.stringify(data.encodedToken),
          userInfo: data.foundUser,
        });
        location.state ? navigate(location.state.from.pathname) : navigate("/");
        toast.success("User Logged in.");
      }
    } catch {
      toast.error("Username or password is incorrect", {
        position: "top-center",
      });
    }
  };

  const signupHandler = async ({ firstname, lastname, email, password }) => {
    try {
      const { data, status } = await signupService({
        firstname,
        lastname,
        email,
        password,
      });
      if (status === 201) {
        localStorage.setItem("AUTH-TOKEN", JSON.stringify(data.encodedToken));
        localStorage.setItem("USER-INFO", JSON.stringify(data.createdUser));
        setAuthState({
          isLoggedIn: true,
          authToken: JSON.stringify(data.encodedToken),
          userInfo: data.createdUser,
        });
        location.state ? navigate(location.state.from.pathname) : navigate("/");
        toast.success("User Signed up.");
      }
    } catch {
      toast.error("Signup failed", {
        position: "top-center",
      });
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem("AUTH-TOKEN");
    setAuthState({ isLoggedIn: false, authToken: undefined });
    navigate("/");
    toast.success("User Logged out.");
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
