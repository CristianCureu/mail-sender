import { motion as m } from "framer-motion";

function ProduseComponent({ title, image, text }) {
  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:w-1/3 overflow-hidden mb-12 lg:m-6">
      <h2 className="lg:text-4xl text-green-800 font-bold text-3xl lg:mb-4 lg:mt-4 text-center">
        {title}
      </h2>
      <m.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className=" lg:p-0 mb-2"
      >
        <img
          src={image}
          alt="image"
          className="w-full h-full rounded-md"
        />
      </m.div>
      <m.div
        initial={{ x: "100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="border-2 border-l-lime-600 border-r-0 border-t-0 border-b-0 pl-2 mt-1"
      >
        {text}
      </m.div>
    </div>
  );
}

export default ProduseComponent;
