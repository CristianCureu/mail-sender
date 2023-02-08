import "./navbar.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackIcon from '@mui/icons-material/Feedback';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <m.nav>
      <div className="logo" onClick={() => navigate("/")}>
        <img src="images/logo.png" />
      </div>
      <ul className={navActive ? "nav-active" : ""}>
        <div className="link">
          <Link to="/" className={location.pathname === "/" ? "" : "hover"}>
            Acasă
          </Link>
          {location.pathname === "/" ? (
            <m.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              className="active"
            ></m.span>
          ) : (
            ""
          )}
        </div>
        <div className="link">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "" : "hover"}
          >
            Contact
          </Link>
          {location.pathname === "/contact" ? (
            <m.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              className="active"
            ></m.span>
          ) : (
            ""
          )}
        </div>
      </ul>
      <div
        className={navActive ? "burger toggle" : "burger"}
        onClick={() => setNavActive(!navActive)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </m.nav>
  );
}

export default Navbar;
