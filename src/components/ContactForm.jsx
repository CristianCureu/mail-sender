import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_71qhnzr",
        "template_quxylo3",
        form.current,
        "tTs9ej2E8L6S5iz_T"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setSent(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="h-screen w-full lg:w-1/3 flex flex-col items-center justify-evenly px-4 pb-6">
      {sent ? (
        <div className="h-screen w-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-2xl pb-2 lg:text-3xl">Mulțumim!</h2>
          <p className="text-lg p-4">Mesajul tău a fost trimis cu succes,</p>
          <p className="text-lg">Vei primi un răspuns în cel mai scurt timp!</p>
        </div>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
          className="h-screen w-full flex flex-col items-center justify-evenly px-4 pb-6"
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
              name="from_name"
              type="text"
              placeholder="Nume"
            />
          </div>
          <div className="w-4/6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline"
              name="from_email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="w-4/6">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline"
              name="from_phone"
              type="text"
              placeholder="Telefon"
            />
          </div>
          <div className="w-4/6">
            <textarea
              className="shadow appearance-none border rounded w-full h-32 py-3 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              type="text"
              placeholder="Mesaj"
            />
          </div>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Trimite mesaj
          </Button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
