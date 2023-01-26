import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function ContactForm() {
  return (
    <form
      autoComplete="off"
      className="h-screen w-full lg:w-1/3 flex flex-col items-center justify-evenly px-4 pb-6"
    >
      <div>
        <p className="text-center mb-2">
          Dorești să ne contactezi prin email?
        </p>
        <p className="text-center">
          Completează formularul si trimite-ne un mesaj!
        </p>
      </div>
      <div className="w-4/6">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline"
          id="nume"
          type="text"
          placeholder="Nume"
        />
      </div>
      <div className="w-4/6">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="w-4/6">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline"
          id="telefon"
          type="text"
          placeholder="Telefon"
        />
      </div>
      <div className="w-4/6">
        <textarea
          className="shadow appearance-none border rounded w-full h-32 py-3 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline"
          id="mesaj"
          type="text"
          placeholder="Mesaj"
        />
      </div>
      <Button variant="contained" endIcon={<SendIcon />}>
        Trimite mesaj
      </Button>
    </form>
  );
}

export default ContactForm;
