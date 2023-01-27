import ProduseComponent from "./ProduseComponent";

const images = [
  "1.png",
  "2.jpeg",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
];

const text1 = (
  <div>
    <p>
      În baza prescripției personalizate furnizăm lentile de contact (sferice,
      torice și progresive) de la producători de prestigiu.
    </p>
    <p>
      Lentila de contact este și un accesoriu cosmetic și în acest caz
      colorările pot fi combinate cu dioptriile.
    </p>
  </div>
);

const text2 = (
  <div>
    <p>
      La OptiDora înțelegem importanța unicității fiecărui client și din acest
      motiv nu facem compromisuri din punctul de vedere al calității.
    </p>
    <br />
    <p>
      Optometriștii noștri îți vor recomanda lentila perfect adaptată nevoii
      tale de vedere optimă. Iar oferta Interoptik – Rodenstock vine să
      satisfacă cele mai exigente pretenții.
    </p>
    <br />
    <p>
      Clienții noștri pot achiziționa de la OptiDora: <br />
      <br />
      <b>-</b> Lentile de ochelari monofocale, bifocale și progresive, sferice,
      cilindrice sau sfero-cilindrice;
      <br />
      <br />
      <b>-</b> Lentile de ochelari degresive pentru munca de birou;
      <br />
      <br />
      <b>-</b> Lentile de ochelari cu protecție pentru calculator; <br />
      <br />
      <b>-</b> Lentile de ochelari cu dioptrii combinate cu diverse variante de
      protecție cum ar fi colorările permanente, fotocromia, polarizarea.
    </p>
  </div>
);

const text3 = (
  <p>
    Comercializăm o gamă variată de accesorii pentru ochelari, precum tocuri,
    lavete, soluții de curățare, șnururi, lănțișoare dar și alte accesorii de
    tipul ocluzoare, șervețele dezinfectante pentru toaletarea ochiului etc.
  </p>
);

function Produse() {
  return (
    <div className="lg:w-4/5 mt-16">
      <div className="text-center lg:p-4">
        <h4 className="text-xl text-lime-600">PRODUSE</h4>
        <h2 className="text-4xl text-green-700 font-bold lg:text-5xl mb-4">
          Rame de ochelari
        </h2>
        <p>
          În optica noastră vei găsi în permanență o colecție extrem de variată
          de rame pentru ochelari de vedere. Vei avea astfel posibilitatea de a
          proba și alege dintre sute de modele pentru damă, bărbați și copii. Te
          vom încânta cu produse accesibile ca și preț dar și cu branduri de
          prestigiu.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:p-6">
        {images.map((image) => (
          <div key={image} className="p-4 flex w-11/12 lg:w-1/6">
            <img className="w-full h-full" src={`images/brandLogo/${image}`} />
          </div>
        ))}
      </div>
      <div className="lg:w-full flex justify-center">
        <p className="text-center text-gray-600 p-4 lg:w-3/4">
          Aboriginal ◆ Basic ◆ Bergman ◆ Bulget ◆ Caroline ◆ Cat ◆ Chantelle ◆
          Disney ◆ Flair ◆ Fitche ◆ Fresco ◆ Freigeist ◆ Furla ◆ Gucci ◆ Guess ◆
          Hogan ◆ Humphreys ◆ Jaguar ◆ Julia Backer ◆ Karen Millen ◆ La Femme ◆
          Lapo ◆ Laura Biagiotti ◆ Le Coq Sportif ◆ Luca ◆ Lulu Castagnette ◆
          Marc O’Polo ◆ Mango ◆ MCQ ◆ Montblanc ◆ Morel ◆ More & More ◆ Nano ◆
          Puma ◆ Reserve ◆ Rodenstock ◆ Saint Laurent ◆ Seiko ◆ Silhouette ◆ s.
          Oliver ◆ Spirit ◆ Stepper ◆ Ted Baker ◆ Titanflex ◆ Tom Miller ◆ Tonny
          ◆ WK+
        </p>
      </div>
      <div className="mt-6 lg:flex lg:items-start lg:justify-between">
        <ProduseComponent
          title="Lentile de contact"
          image="images/servicii1.jpg"
          text={text1}
        />
        <ProduseComponent
          title="Lentile aeriene"
          image="images/servicii3.jpg"
          text={text2}
        />
        <ProduseComponent
          title="Accesorii"
          image="images/servicii4.jpg"
          text={text3}
        />
      </div>
    </div>
  );
}

export default Produse;
