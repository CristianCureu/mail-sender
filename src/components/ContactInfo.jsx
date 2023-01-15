function ContactInfo() {
  return (
    <div
      className="absolute h-full flex flex-col items-center justify-evenly
    w-5/6 text-white lg:w-2/5"
    >
      <div
        className="h-14 w-full text-2xl flex flex-col items-center justify-center 
        rounded-sm bg-[#0000004a] lg:p-10 lg:text-4xl lg:w-3/5"
      >
        Contact
      </div>
      <div
        className="h-1/4 w-full flex flex-col justify-evenly
        rounded-sm bg-[#0000004a] p-6 lg:text-2xl"
      >
        <h4 className="text-lg">Adresa:</h4>
        <p className="text-xl">
          Baia Mare, Strada Vasile Alecsandri nr. 89, Maramureș
        </p>
      </div>
      <div
        className="h-1/4 w-full flex flex-col justify-evenly 
        rounded-sm bg-[#0000004a] p-6 lg:text-2xl"
      >
        <h4 className="text-lg">Telefon:</h4>
        <a href="tel:0362-120.112" className="text-sky-400 text-2xl">
          0362-120.112
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
