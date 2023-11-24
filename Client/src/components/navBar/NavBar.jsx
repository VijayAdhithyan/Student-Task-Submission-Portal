import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

const navBar = () => {
  return (
    <div className="nav-session">
      <div className="logo-session">
        <img src={Logo} alt="" className="logo" />
        <div className="logo-name">
          <p>Students Task</p>
          <p>Submission Portal</p>
        </div>
      </div>
      <ul className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/auth/login/student" className="nav-link">
            Student Login
          </Link>
          <Link to="/auth/login/staff" className="nav-link">
            Staff Login
          </Link>
      </ul>
      <div className="nav-btn">
        <Link to="/contact" className="nav-link">
          Contact us
        </Link>
        {/* <p></p> */}
      </div>
    </div>
  );
};

export default navBar;
