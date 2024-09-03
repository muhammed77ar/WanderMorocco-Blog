import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  ithXSRFToken:true,
  headers: {
    "Content-Type": ["application/json", "multipart/form-data"],
    "Accept": "application/json",

  },
});

// Request Interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    if (response?.status === 401) {
      window.localStorage.removeItem("access_token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
