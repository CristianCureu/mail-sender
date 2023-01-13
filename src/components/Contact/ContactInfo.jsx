import "./contact.css";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info-left">
        <div className="info-left info-left-title">Contact</div>
        <div className="info-left">
          <h4>Adresa</h4>
          <p>Baia Mare, Strada Vasile Alecsandri nr. 89, Maramureș</p>
        </div>
        <div className="info-left">
          <h4>Telefon</h4>
          <a href="tel:0362-120.112">0362-120.112</a>
        </div>
      </div>
      <div className="contact-info-right">
        <p>
          Înființată în anul 2014, Optica OptiDora a însemnat de la bun început
          servicii de oftalmologie și optică medicală realizate cu pasiune,
          dedicație și profesionalism, cu o strădanie zilnică de a fi mai buni
          decât am fost ieri.
        </p>
        <p>
          Încă de la începutul activității ne-am bucurat de parteneriatul cu
          medicul primar oftalmolog Veronica Făt care asigură în cadrul locației
          noastre consultații oftalmologice la un înalt nivel de profesionalism.
        </p>
        <p>
          Echipa este completată de optometriști care asigură consultațiile
          optometrice, consilierea clienților în alegerea ramelor și lentilelor
          dar și montajul acestora.
        </p>
        <p>
          Clienții noștri beneficiază de consultații și investigații
          oftalmologice de mare acuratețe, de consultații optometrice
          computerizate gratuite, de acces la un număr impresionant de modele și
          branduri de rame de ochelari, de lentile aeriene accesibile ca și pret
          dar și personalizate din gama Interoptik și Rodenstock.
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
