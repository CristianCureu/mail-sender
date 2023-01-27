import { motion as m } from "framer-motion";

function ContactInfo() {
  return (
    <div
      className="absolute h-full pb-10 flex flex-col items-center justify-evenly
    w-5/6 text-white lg:w-2/5"
    >
      <div
        className="p-4 w-full text-2xl flex flex-col items-center justify-center 
        rounded-sm bg-[#0000004a] lg:text-4xl lg:w-3/5"
      >
        <div className="overflow-hidden">
          <m.h2
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Contact
          </m.h2>
        </div>
      </div>
      <div
        className="h-1/3 w-full flex flex-col justify-evenly
        rounded-sm bg-[#0000004a] p-6 lg:text-2xl"
      >
        <div className="overflow-hidden">
          <m.h4
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="text-lg"
          >
            Adresa:
          </m.h4>
        </div>
        <div className="overflow-hidden">
          <m.p
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            className="text-xl"
          >
            Baia Mare, Strada Vasile Alecsandri nr. 89, Maramureș
          </m.p>
        </div>
      </div>
      <div
        className="h-1/3 w-full flex flex-col justify-evenly 
        rounded-sm bg-[#0000004a] p-6 lg:text-2xl"
      >
        <div className="overflow-hidden">
          <m.h4
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="text-lg"
          >
            Telefon:
          </m.h4>
        </div>
        <div className="overflow-hidden">
          <m.p
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            className="text-sky-400 text-2xl"
          >
            <a href="tel:0362-120.112">0362-120.112</a>
          </m.p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
