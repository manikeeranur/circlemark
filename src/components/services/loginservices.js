import axios from "axios";

const API_BASE_URL = "https://circlemark.in/AdminService/api";
const Login_API_KEY = "7413aea-5e6f-4e2f-b198-f6407413fb3b";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const handleLogin = async (data) => {
  try {
    const response = await apiClient.post("/UserLogin/Vailduser", data, {
      headers: {
        "x-api-key": Login_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error during login API call:", error);
    throw error;
  }
};

export const handleLogout = (navigate) => {
  localStorage.removeItem("userId");
  localStorage.removeItem("roleId");
  localStorage.removeItem("name");
  navigate("/signin");
};

export const formattedDate = (date) => {
  return date.toISOString().replace("T", " ").substring(0, 23);
};
