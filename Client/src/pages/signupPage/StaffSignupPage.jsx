import { Link } from "react-router-dom";


const StaffSignupPage = () => {
  return (
    <div className="login-session">
      <h1>Staff Sign up Page</h1>
      <form className="login-form">
        <div className="inp">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="name" />
        </div>
        <div className="inp">
          <label htmlFor="">E-Mail ID</label>
          <input type="text" placeholder="mail Id" />
        </div>
        <div className="inp">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <button
          to="/auth/signup/staff"
          className="signup-btn"
          style={{ marginBottom: "30px" }}
        >
          Sign up
        </button>
        <br />
        <Link to="/auth/login/staff" className="login-btn">
          Login
        </Link>
      </form>
    </div>
  );
}

export default StaffSignupPage
