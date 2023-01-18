import { useRef, useState } from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import InfoIcon from "@mui/icons-material/Info";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import toastOptions from "../utils/toastOptions";

function SubscribeForm() {
  const [user, setUser] = useState({});
  const toastId = useRef(null);

  const onChangeHandler = (fieldName, value) => {
    setUser({ ...user, [fieldName]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const response = await res.json();
      console.log(response);
      if (response.success === false) {
        if (response.message.includes("required")) {
          if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error(
              "Toate campurile sunt obligatorii!",
              toastOptions
            );
          }
        } else if (response.message.includes("fill")) {
          if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error(
              "Adresa de email invalida!",
              toastOptions
            );
          }
        } else if (response.message.includes("abonata")) {
          if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error(response.message, toastOptions);
          }
        }
      } else {
        toast.success("Te-ai abonat cu succes!", toastOptions);
        setUser({});
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <form
      className="w-10/12 h-5/6 flex flex-col justify-around items-center lg:w-3/5"
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <div
        className="flex flex-col text-sm
       justify-center items-center text-center p-2 lg:w-3/5"
      >
        <InfoIcon color="info" />
        <p>
          Te rog introdu numele si adresa de email pentru a fi la curent cu
          noile oferte si reduceri Optidora!
        </p>
      </div>
      <TextField
        name="nume"
        label="Nume"
        variant="outlined"
        value={user.nume || ""}
        onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
      />
      <TextField
        name="prenume"
        label="Prenume"
        variant="outlined"
        value={user.prenume || ""}
        onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
      />
      <TextField
        type="email"
        name="email"
        label="Email"
        variant="outlined"
        value={user.email || ""}
        onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
      />
      <Button variant="contained" endIcon={<SendIcon />} type="submit">
        Abonează-te
      </Button>
      <ToastContainer limit={1} />
    </form>
  );
}

export default SubscribeForm;
