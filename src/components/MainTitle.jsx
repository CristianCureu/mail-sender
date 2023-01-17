import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link } from "react-router-dom";

const buttonStyle = {
  padding: "0.5rem 1rem",
  color: "white",
  letterSpacing: "0.5px",
  border: "1px solid white",
};

function MainTitle() {
  return (
    <div
      className="h-full pb-8 p-2 absolute text-white 
      flex flex-col items-center justify-around
      lg:w-3/4"
    >
      <div className="h-1/5 flex flex-col items-center justify-around">
        <h1 className="font-bold text-5xl lg:text-7xl">OptiDora</h1>
        <h3 className="font-bold text-xl lg:text-2xl">
          ARE GRIJĂ DE OCHII TĂI
        </h3>
      </div>
      <div className="flex flex-col items-center justify-between h-2/6 lg:scale-110">
        <Link to="/detalii">
          <Button sx={buttonStyle} startIcon={<InfoIcon />}>
            Detalii
          </Button>
        </Link>
        <Link to="/contact">
          <Button sx={buttonStyle} startIcon={<ContactMailIcon />}>
            Contactează-ne
          </Button>
        </Link>
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
      </div>
      <div
        className="flex flex-col items-center text-center justify-around h-1/5
      lg:text-xl"
      >
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
  );
}

export default MainTitle;
