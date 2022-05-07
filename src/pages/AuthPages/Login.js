import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EmailInput, PasswordInput } from "../../components/inputs";
import { useAuth } from "../../context/AuthContext/AuthContext";

import "../pages.css";

function Login() {
  const savedLoginInfo = JSON.parse(localStorage.getItem("SAVED-LOGIN-INFO"));

  const [loginForm, setLoginForm] = useState({
    email: savedLoginInfo ? savedLoginInfo.email : "",
    password: savedLoginInfo ? savedLoginInfo.password : "",
    rememberUser: savedLoginInfo ? true : false,
  });

  const { loginHandler } = useAuth();

  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    rememberUser: false,
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  const loginAccount = ({ email, password, rememberUser }) => {
    if (rememberUser) {
      localStorage.setItem(
        "SAVED-LOGIN-INFO",
        JSON.stringify({ email: email, password: password })
      );
    }
    loginHandler({ email, password });
  };

  return (
    <>
      <div className="flex-row flex-center login__main">
        <div className="card-vertical p-m login__card card-shadow ">
          <div className="card-body text-md">
            <h1 className="card-title text-lg m-m font-extrabold text-center">
              Login
            </h1>
            <div className="form-container ">
              <EmailInput
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    email: e.target.value,
                  })
                }
              />
              <PasswordInput
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    password: e.target.value,
                  })
                }
                displayName="Password:"
                name="password"
              />

              <label>
                <input
                  type="checkbox"
                  name="rememberUser"
                  checked={loginForm.rememberUser}
                  onChange={() =>
                    setLoginForm({
                      ...loginForm,
                      rememberUser: !loginForm.rememberUser,
                    })
                  }
                />
                <span className="text-md">Remember me</span>
              </label>

              <Link className="text-md no-link" to="">
                Forgot your Password?
              </Link>
              <button
                className="button-primary button text-md text-center"
                onClick={() => loginAccount(loginForm)}
              >
                Login
              </button>
              <button
                className="button-secondary button text-md text-center"
                onClick={() => loginAccount(guestUser)}
              >
                Login as Guest
              </button>

              <Link
                className="text-center text-md button link-btn button-outline-primary"
                to="../signup"
              >
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
