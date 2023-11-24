import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import StudentLogin from "./pages/loginPage/StudentLogin";
import StaffLogin from "./pages/loginPage/StaffLogin";
import StudentSignupPage from "./pages/signupPage/StudentSignupPage";
import StaffSignupPage from "./pages/signupPage/StaffSignupPage";
import StudentPage from "./pages/students/StudentPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login/student" element={<StudentLogin />} />
      <Route path="/auth/login/staff" element={<StaffLogin />} />
      <Route path="/auth/signup/student" element={<StudentSignupPage />} />
      <Route path="/auth/signup/staff" element={<StaffSignupPage />} />
      <Route path="/student/page" element={<StudentPage />} />
    </Routes>
  );
};

export default AllRoutes;
