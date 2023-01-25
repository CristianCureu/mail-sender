import { motion as m } from "framer-motion";

function Footer() {
  return (
    <footer className="p-8 pt-0 w-screen h-72 bg-neutral-800">
      <div className="overflow-hidden">
        <m.h2
          initial={{ y: "-100%" }}
          whileInView={{ y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sky-400 text-3xl"
        >
          Contact
        </m.h2>
      </div>
      <m.div className="text-slate-50 mt-4 text-lg">
        <m.div className="overflow-hidden">
          <m.p
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
          >
            <b>Adresă: </b>Baia Mare, Strada Vasile Alecsandri nr.89, Maramureș
          </m.p>
        </m.div>
        <m.div className="overflow-hidden">
          <m.p
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            className="pb-6 pt-6"
          >
            <b>Telefon: </b>
            <a href="tel:0362-120.112">0362-120.112</a>
          </m.p>
        </m.div>
        <m.div className="overflow-hidden">
          <m.p
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            transition={{ duration: 0.4, delay: 0.75, ease: "easeOut" }}
          >
            <b>Email: </b>
            <a href="mailto:contact@optidora.ro">contact@optidora.ro</a>
          </m.p>
        </m.div>
      </m.div>
    </footer>
  );
}

export default Footer;
