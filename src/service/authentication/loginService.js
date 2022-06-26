import axios from "axios";

const loginService = async ({ email, password }) => {
  try {
    console.log(email, password);
    const response = await axios.post("/api/auth/login", { email, password });

    return response;
  } catch (err) {
    console.log(err);
    alert("Login email or password incorrect");
  }
};

export { loginService };
