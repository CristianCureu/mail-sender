import Background from "../components/Background/Background";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import "./pages.css";

function Contact() {
  return (
    <div className="flex flex-col items-center">
      <div className="contact">
        <Background />
        <ContactInfo />
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
