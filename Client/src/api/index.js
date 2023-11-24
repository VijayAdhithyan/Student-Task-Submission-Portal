import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const fetchUserDetail = (userId) =>
  API.get("/user/getCurrentUser", userId);

export const studentSignup = (authData) =>
  API.post("/user/signup/student", authData);
export const staffSignup = (authData) =>
  API.post("/user/signup/staff", authData);
export const studentLogin = (authData) =>
  API.post("/user/login/student", authData);
export const staffLogin = (authData) => API.post("/user/login/staff", authData);
