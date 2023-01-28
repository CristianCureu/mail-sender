import CalitateaOpti from "../components/Detalii/CalitateaOpti";
import Despre from "../components/Detalii/Despre";
import Experienta from "../components/Detalii/Experienta";
import Footer from "../components/Detalii/Footer";
import Map from "../components/Detalii/Map";
import OchelariPersonalizati from "../components/Detalii/OchelariPersonalizati";
import Produse from "../components/Detalii/Produse";
import Servicii from "../components/Detalii/Servicii";
import "./pages.css";
import { motion as m } from "framer-motion";
import ContactForm from "../components/ContactForm";

function Detalii() {
  return (
    <m.div className="detalii">
      <Despre />
      <Servicii />
      <Produse />
      <Experienta />
      <OchelariPersonalizati />
      <CalitateaOpti />
      <ContactForm />
      <Map />
      <Footer />
    </m.div>
  );
}

export default Detalii;
