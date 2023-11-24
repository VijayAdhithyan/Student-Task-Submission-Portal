import { Link } from "react-router-dom";

const StaffLogin = () => {
  return (
    <div className="login-session">
      <h1>Staff Login Page</h1>
      <form className="login-form">
        <div className="inp">
          <label htmlFor="">E-Mail ID</label>
          <input type="text" placeholder="mail Id" />
        </div>
        <div className="inp">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-btn">Login</button>
        <br />
        <Link to='/auth/signup/staff' className="signup-btn">
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default StaffLogin;
