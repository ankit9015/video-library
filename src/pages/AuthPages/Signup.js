import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EmailInput, PasswordInput } from "../../components/inputs";
import { useAuth } from "../../context/AuthContext/AuthContext";
import toast from "react-hot-toast";

import "../pages.css";

function Signup() {
  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTAndC: false,
  });

  const dummyInfo = {
    firstname: "Ankit",
    lastname: "Joshi",
    email: "ankitj@gmail.com",
    password: "ankit123",
    confirmPassword: "ankit123",
    acceptTAndC: true,
  };

  const { signupHandler } = useAuth();

  useEffect(() => {
    document.title = "Signup";
  }, []);

  const wrongDataToast = (msg) => {
    toast.error(msg, {
      position: "top-center",
    });
  };

  const updateSignupForm = (e) => {
    e.target.name === "acceptTAndC"
      ? setSignupForm({
          ...signupForm,
          acceptTAndC: !signupForm.acceptTAndC,
        })
      : setSignupForm({
          ...signupForm,
          [e.target.name]: e.target.value,
        });
  };

  const createAccount = () => {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      acceptTAndC,
    } = signupForm;
    if (firstname === "" || lastname === "") {
      wrongDataToast("Name cannot be empty");
      return;
    }
    if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      wrongDataToast("Enter valid email address");
      return;
    }
    if (!password) {
      wrongDataToast("Password is empty");
      return;
    }
    if (password !== confirmPassword) {
      wrongDataToast("Write matching passwords");
      return;
    }
    if (!acceptTAndC) {
      wrongDataToast("Accept Terms and Conditions");
      return;
    }
    signupHandler({ firstname, lastname, email, password });
  };

  return (
    <div className="flex-row flex-center signup__main">
      <div className="card-vertical signup__card card-shadow">
        <div className="card-body text-md">
          <h1 className="card-title text-lg m-m font-extrabold text-center">
            Signup
          </h1>
          <div className="form-container ">
            <label className="flex-column">
              <span className="text-md socketui-label label-required">
                First name:
              </span>
              <input
                className="socketui-input email-input text-md"
                type="text"
                name="firstname"
                placeholder="Ankit"
                required
                value={signupForm.firstname}
                onChange={(e) => updateSignupForm(e)}
              />
            </label>
            <label className="flex-column">
              <span className="text-md socketui-label label-required">
                Last name:
              </span>
              <input
                className="socketui-input email-input text-md"
                type="text"
                name="lastname"
                placeholder="Joshi"
                required
                value={signupForm.lastname}
                onChange={(e) => updateSignupForm(e)}
              />
            </label>

            <EmailInput
              value={signupForm.email}
              onChange={(e) => updateSignupForm(e)}
            />
            <PasswordInput
              value={signupForm.password}
              onChange={(e) => updateSignupForm(e)}
              displayName="Password:"
              name="password"
            />

            <PasswordInput
              value={signupForm.confirmPassword}
              onChange={(e) => updateSignupForm(e)}
              displayName="Confirm Password:"
              name="confirmPassword"
            />

            <label>
              <input
                type="checkbox"
                name="acceptTAndC"
                checked={signupForm.acceptTAndC}
                onChange={(e) => updateSignupForm(e)}
              />
              <span className="text-md">
                I accept all the Terms and Conditions
              </span>
            </label>

            <button
              className="button-primary button text-md text-center"
              onClick={() => createAccount()}
            >
              Create new account
            </button>
            <button
              className="button button-outline-secondary text-md"
              onClick={() => setSignupForm(dummyInfo)}
            >
              Fill Dummy data
            </button>
            <Link
              className="text-center text-md button link-btn button-outline-secondary"
              to="../login"
            >
              Already have an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
