import axios from "axios";

const loginService = async ({ email, password }) => {
  try {
    const response = await axios.post("/api/auth/login", { email, password });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export { loginService };
