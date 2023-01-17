import { motion as m } from "framer-motion";

function ServiciiComponent({ image, title, text, imgPosition }) {
  return (
    <div
      className={
        imgPosition === "right"
          ? "lg:flex lg:justify-evenly overflow-hidden flex-row-reverse"
          : "lg:flex lg:justify-evenly overflow-hidden"
      }
    >
      <m.div
        initial={imgPosition === "right" ? { x: "100%" } : { x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:w-2/4 mt-10 p-2"
      >
        <img src={image} className="w-full h-full rounded-md lg:w-11/12" />
      </m.div>
      <m.div
        initial={imgPosition === "right" ? { x: "-100%" } : { x: "100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:w-2/5 lg:flex lg:flex-col lg:justify-center"
      >
        <h2 className="lg:text-4xl text-green-800 font-bold text-3xl pb-2 pt-1 lg:mb-4 lg:mt-4">
          {title}
        </h2>
        <p
          className="border-2 border-l-lime-600 border-r-0 border-t-0 border-b-0 pl-2
        lg:text-lg"
        >
          {text}
        </p>
      </m.div>
    </div>
  );
}

export default ServiciiComponent;
