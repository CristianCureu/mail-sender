import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link } from "react-router-dom";
import "./background.css";

const buttonStyle = {
  border: "2px solid white",
  borderTopLeftRadius: "0",
  borderTopRightRadius: "1.5rem",
  borderBottomLeftRadius: "1.5rem",
  borderBottomRightRadius: "1.5rem",
  color: "white",
  padding: "1rem 2rem",
  fontSize: "1rem",
  letterSpacing: "1px",
};

function Background() {
  return (
    <div className="background">
      <div className="background-image">
        <img src="images/background.png" />
      </div>
      <div className="title">
        <h1>OptiDora</h1>
        <h3>ARE GRIJĂ DE OCHII TĂI</h3>
        <div className="buttons">
          <Button sx={buttonStyle} startIcon={<InfoIcon />}>
            Detalii
          </Button>
          <Link to="/contact">
            <Button sx={buttonStyle} startIcon={<ContactMailIcon />}>
              Contactează-ne
            </Button>
          </Link>
        </div>
        <Link to="/subscribe">
          <Button
            variant="contained"
            color="success"
            endIcon={<NotificationsActiveIcon />}
            sx={buttonStyle}
            className="btn-main"
          >
            Abonează-te
          </Button>
        </Link>
        <div className="title-feedback">
          <p>Ai experimentat OptiDora?</p>
          <div>
            Lasă-ne un
            <Link to="/feedback">
              <Button
                variant="contained"
                color="success"
                sx={{ margin: "0 0.5rem" }}
              >
                feedback
              </Button>
            </Link>
            pentru a îmbunătății experiența noastră cu clienții
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
