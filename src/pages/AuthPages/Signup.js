import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EmailInput, PasswordInput } from "../../components/inputs";

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

  useEffect(() => {
    document.title = "Signup";
  }, []);

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
    const { email, password, acceptTAndC } = signupForm;
    console.log(signupForm);
    if (email !== "" && password !== "" && acceptTAndC) {
      // signupHandler({ firstname, lastname, email, password });
    }
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
                Firstname:
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
                Lastname:
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
            />

            <PasswordInput
              value={signupForm.consfirmPassword}
              onChange={(e) => updateSignupForm(e)}
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
