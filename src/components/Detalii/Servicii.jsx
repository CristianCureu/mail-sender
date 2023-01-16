import ServiciiComponent from "./ServiciiComponent";

const text1 = `Cabinetul de oftalmologie dispune de dotare tehnică de ultimă generație: autokeratorefractometru computerizat, foropter, biomicroscop, ecograf, biometru, fundus camera, tomograf în coerență optică, pahimetru, topograf cornean.
În cadrul cabinetului de oftalmologie se efectuează atât consultații primare (prescripție ochelari și lentile de contact), cât și consultații pentru pentru o gamă variată de afecțiuni precum cataractă, glaucom, afecțiuni retiniene.
De asemenea, se oferă consultații în regim de urgență pentru patologii acute.
Prezența alături de noi a doamnei medic primar oftalmolog Veronica Făt aduce un plus de valoare ofertei noastre de servicii.`;

const text2 = `Prescrierea ochelarilor și a lentilelor de contact se realizează în baza unor măsurători amănunțite, utilizând echipamente speciale și corelând rezultatele astfel obținute cu vârsta și starea de sănătate a ochilor.
Solicită o consultație optometrică computerizată iar optometriștii noștri te vor surprinde prin rigurozitatea abordării și prin acuratețea prescripției!
Mai mult, acest serviciu este oferit fără costuri în cazul achiziției ochelarilor din optica noastră`;

const text3 = `Prescrierea ochelarilor și a lentilelor de contact se realizează în baza unor măsurători amănunțite, utilizând echipamente speciale și corelând rezultatele astfel obținute cu vârsta și starea de sănătate a ochilor.
Solicită o consultație optometrică computerizată iar optometriștii noștri te vor surprinde prin rigurozitatea abordării și prin acuratețea prescripției!
Mai mult, acest serviciu este oferit fără costuri în cazul achiziției ochelarilor din optica noastră`;

const text4 = `Aparatura utilizată contribuie semnificativ la performanța serviciilor noastre. 
Indiferent de tipul de serviciu furnizat – consult oftalmologic, investigații oftalmologice, consult optometric computerizat pentru determinarea dioptriilor sau montajul ochelarilor 
– utilizăm echipamente realizate de producători de prestigiu pentru domeniul oftalmologiei și opticii medicale cum sunt Rodenstock,
 Nidek, Optovue, Huvitz, Plusoptix.`;

function Servicii() {
  return (
    <div className="lg:w-3/4">
      <div className="mt-8 mb-4 text-center">
        <h4 className="text-xl text-lime-600">OPTIDORA</h4>
        <h2 className="text-4xl text-green-700 font-bold lg:text-5xl">
          Servicii
        </h2>
      </div>
      <ServiciiComponent
        image="images/servicii1.jpg"
        title="Consultații oftalmologice"
        text={text1}
      />
      <ServiciiComponent
        image="images/servicii2.jpg"
        title="Consultații optometrice computerizate"
        text={text2}
        imgPosition="right"
      />
      <ServiciiComponent
        image="images/servicii3.jpg"
        title="Montaj lentile"
        text={text3}
      />
      <ServiciiComponent
        image="images/servicii4.jpg"
        title="Aparatura"
        text={text4}
        imgPosition="right"
      />
    </div>
  );
}

export default Servicii;
