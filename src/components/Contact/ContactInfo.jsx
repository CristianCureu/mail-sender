function ContactInfo() {
  return (
    <div
      className="absolute h-full flex flex-col items-center justify-evenly
    w-5/6 text-white lg:w-2/5"
    >
      <div
        className="h-16 w-full text-2xl flex flex-col items-center justify-center rounded-md
       bg-[#0000004a] lg:p-10 lg:text-4xl lg:w-3/5"
      >
        Contact
      </div>
      <div
        className="h-1/4 w-full flex flex-col items-center justify-evenly text-center rounded-md bg-[#0000004a]
      p-1 lg:text-2xl"
      >
        <h4>Adresa</h4>
        <p className="text-xl">Baia Mare, Strada Vasile Alecsandri nr. 89, Maramureș</p>
      </div>
      <div
        className="h-1/4 w-full flex flex-col items-center justify-evenly rounded-md bg-[#0000004a]
      p-1 lg:text-2xl"
      >
        <h4>Telefon</h4>
        <a href="tel:0362-120.112" className="text-sky-500 text-xl">
          0362-120.112
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
