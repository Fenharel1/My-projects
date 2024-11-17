import axios from "axios";
import toast from "react-hot-toast";

const authApi = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: { "Content-Type": "application/json" },
});

const basicCall = async (callback) => {
  try {
    const response = await callback();
    return response.data;
  } catch (e) {
    if (e.response.status != 400) {
      toast.error(e.response.data.description);
    }
    return { errors: e.response.data };
  }
};

const authService = {
  login: async (email, password) => {
    return basicCall(() => authApi.post("/auth/login", { email, password }));
  },
  register: async (registerForm) => {
    return basicCall(() => authApi.post("/auth/register", registerForm));
  },
  validUserData: async (dataForm) => {
    return basicCall(() => authApi.post("/auth/validate-user",dataForm))
  }
};

export { authService };
