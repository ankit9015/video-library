import axios from "axios";

const signupService = async ({ firstname, lastname, email, password }) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      firstname,
      lastname,
      email,
      password,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export default signupService;
