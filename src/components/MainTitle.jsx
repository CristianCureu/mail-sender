import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

const buttonStyle = {
  padding: "0.5rem 1rem",
  color: "white",
  letterSpacing: "0.5px",
  border: "1px solid white",
};

function MainTitle() {
  return (
    <div
      className="h-full pb-8 absolute text-white 
      flex flex-col items-center justify-around z-10
      lg:w-3/4"
    >
      <div className="h-1/4 flex flex-col items-center justify-around">
        <div className="overflow-hidden">
          <m.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-bold text-5xl lg:text-7xl"
          >
            OptiDora
          </m.h1>
        </div>
        <div className="overflow-hidden">
          <m.h3
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="font-bold text-xl lg:text-2xl"
          >
            ARE GRIJĂ DE OCHII TĂI
          </m.h3>
        </div>
      </div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center justify-around h-2/4 lg:scale-110"
      >
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
          <Link to="/subscribe" className="hidden md:flex">
            <Button
              variant="contained"
              color="success"
              startIcon={<NotificationsActiveIcon />}
              sx={buttonStyle}
              className="btn-main"
            >
              Abonează-te
            </Button>
          </Link>
      </m.div>
      <div
        className="hidden md:flex flex-col items-center text-center justify-around h-1/5
        lg:text-xl"
      >
        <div className="overflow-hidden">
          <m.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            Ai experimentat OptiDora?
          </m.p>
        </div>
        <div className="overflow-hidden">
          <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          >
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
          </m.div>
        </div>
      </div>
    </div>
  );
}

export default MainTitle;
