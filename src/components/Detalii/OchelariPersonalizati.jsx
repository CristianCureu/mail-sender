import OchelariPersonalizatiComponent from "./OchelariPersonalizatiComponent";

function OchelariPersonalizati() {
  return (
    <div className="text-center flex items-center flex-col w-full">
      <h2 className="text-4xl text-green-700 font-bold lg:text-5xl my-8">
        Ochelari personalizați
      </h2>
      <h3 className="text-2xl mb-6 px-6 text-gray-800">
        Lentile personalizate datorită măsurării revoluționare a ochiului
        folosind scanerul DNEye®
      </h3>
      <div className="text-sm w-4/5 text-gray-600">
        <p>
          În baza parteneriatului cu firma RODENSTOCK,
          <br /> Optica OptiDora oferă clienților posibilitatea realizării de
          ochelari personalizați.
        </p>
        <p className="p-4">
          Cu performanța de înaltă precizie furnizată de DNEye® Scanner de la
          Rodenstock, peste 7000 de puncte de măsurare de pe suprafața ochiului
          sunt transferate în lentila individualizată. În acest fel, lentila
          este perfect individualizată iar vederea este cea mai bună din toate
          timpurile.
        </p>
        <p>
          Experimentează testul de vedere revoluționar cu ajutorul DNEye®
          Scanner de la Rodenstock. Singura modalitate de a experimenta o vedere
          perfectă.
        </p>
      </div>
      <h3 className="mt-6 px-6 text-2xl text-gray-800">
        Lentilele optimizate cu DNEye® îți oferă următoarele avantaje
      </h3>
      <div className="lg:flex w-4/5 lg:justify-between">
        <OchelariPersonalizatiComponent
          image="images/vedere_cu_contrast_mai_inalt.jpeg"
          title="Vedere cu contrast înalt"
          text="Vedere excelentă având un contrast mai înalt ca niciodată"
        />
        <OchelariPersonalizatiComponent
          image="images/vedere_mai_sigura_ca_niciodata.jpeg"
          title="Vedere mai sigură"
          text="Vedere excelentă pe timpul nopții"
        />
        <OchelariPersonalizatiComponent
          image="images/vedere_mai_naturala_ca_niciodata.jpeg"
          title="Vedere naturală"
          text="Vedere naturală, având câmpuri vizuale largi"
        />
        <OchelariPersonalizatiComponent
          image="images/vedere_mai_colorata_ca_niciodata.jpeg"
          title="Vedere colorată"
          text="Experiență vizuală naturală"
        />
      </div>
    </div>
  );
}

export default OchelariPersonalizati;
