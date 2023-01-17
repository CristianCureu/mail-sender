import { motion as m } from "framer-motion";

function Despre() {
  return (
    <div className="w-full mb-4 mt-4 lg:w-3/4 lg:mb-10 lg:mt-10 overflow-hidden">
      <m.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8"
      >
        <h2
          className="mb-3 text-lime-600 text-lg font-bold
        border-2 border-l-lime-600 border-r-0 border-t-0 border-b-0 pl-2
        lg:mb-6 lg:text-2xl"
        >
          DESPRE NOI
        </h2>
        <m.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, delay:0.25, ease: "easeOut" }}
          className="border-2 border-l-lime-600 border-r-0 border-t-0 border-b-0 pl-2
        lg:text-lg"
        >
          <p className="pb-2">
            Înființată în anul 2014, Optica OptiDora a însemnat de la bun
            început servicii de oftalmologie și optică medicală realizate cu
            pasiune, dedicație și profesionalism, cu o strădanie zilnică de a fi
            mai buni decât am fost ieri.
          </p>
          <p className="pb-2">
            Încă de la începutul activității ne-am bucurat de parteneriatul cu
            medicul primar oftalmolog Veronica Făt care asigură în cadrul
            locației noastre consultații oftalmologice la un înalt nivel de
            profesionalism.
          </p>
          <p className="pb-2">
            Echipa este completată de optometriști care asigură consultațiile
            optometrice, consilierea clienților în alegerea ramelor și
            lentilelor dar și montajul acestora.
          </p>
          <p>
            Clienții noștri beneficiază de consultații și investigații
            oftalmologice de mare acuratețe, de consultații optometrice
            computerizate gratuite, de acces la un număr impresionant de modele
            și branduri de rame de ochelari, de lentile aeriene accesibile ca și
            pret dar și personalizate din gama Interoptik și Rodenstock.
          </p>
        </m.div>
      </m.div>
      <div className="lg:flex lg:justify-between overflow-hidden">
        <m.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-2/4 mb-6 p-2"
        >
          <img src="images/despre-img.jpeg" className="w-full h-full" />
        </m.div>
        <m.div
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-2/5 lg:flex lg:flex-col lg:justify-center"
        >
          <h2
            className=" text-lime-600 text-lg font-bold
            border-2 border-l-lime-600 border-r-0 border-t-0 border-b-0 pl-2 lg:text-2xl"
          >
            OPTIDORA
          </h2>
          <h2 className="lg:text-4xl text-green-800 font-bold text-3xl pb-4 pt-4 lg:mb-4 lg:mt-4">
            Pasiune, dedicație și profesionalism
          </h2>
          <p
            className="border-2 border-l-lime-600 border-r-0 border-t-0 border-b-0 pl-2
            lg:text-lg"
          >
            Clienții noștri beneficiază de consultații și investigații
            oftalmologice de mare acuratețe, de consultații optometrice
            computerizate gratuite, de acces la un număr impresionant de modele
            și branduri de rame de ochelari, de lentile aeriene accesibile ca și
            pret dar și personalizate din gama Interoptik și Rodenstock.
          </p>
        </m.div>
      </div>
    </div>
  );
}

export default Despre;
