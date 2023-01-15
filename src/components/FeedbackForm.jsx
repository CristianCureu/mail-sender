import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastOptions from "../utils/toastOptions";

function FeedbackForm() {
  const [feedback, setFeedback] = useState({});
  const toastId = useRef(null);

  const onChangeHandler = (fieldName, value) => {
    setFeedback({ ...feedback, [fieldName]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      });
      const response = await res.json();
      if (response.success === false) {
        if (response.message.includes("required")) {
          if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error(
              "Toate campurile sunt obligatorii!",
              toastOptions
            );
          }
        } else if (response.message.includes("email")) {
          if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error(
              "Adresa de email invalida!",
              toastOptions
            );
          }
        }
      } else {
        toast.success("Feedback trimis cu succes!", toastOptions);
        setFeedback({});
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="feedback-form flex flex-col items-center justify-between
      h-full w-full"
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <div className="h-2/6 flex flex-col justify-between scale-75">
        <TextField
          name="nume"
          label="Nume"
          variant="outlined"
          value={feedback.nume || ""}
          onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
        />
        <TextField
          name="prenume"
          label="Prenume"
          variant="outlined"
          value={feedback.prenume || ""}
          onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          value={feedback.email || ""}
          onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
        />
      </div>
      <div
        className="flex flex-col items-center text-center justify-between 
      h-3/6 border"
      >
        <div className="flex flex-col justify-center items-center">
          <FormLabel id="first">Ofera o nota consultului Optidora</FormLabel>
          <RadioGroup
            row
            aria-labelledby="first"
            name="q1"
            value={feedback.q1 || ""}
            onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />
          </RadioGroup>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FormLabel id="second">
            Cat de multumit ati fost de personalul Optidora?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="second"
            name="q2"
            value={feedback.q2 || ""}
            onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />
          </RadioGroup>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FormLabel id="third">
            Ati opta din nou pentru un consult la Optidora?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="third"
            name="q3"
            value={feedback.q3 || ""}
            onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
          >
            <FormControlLabel value="nu" control={<Radio />} label="Nu" />
            <FormControlLabel value="da" control={<Radio />} label="Da" />
          </RadioGroup>
        </div>
      </div>
      <Button variant="contained" type="submit">
        Trimite
      </Button>
      <ToastContainer limit={1} />
    </form>
  );
}

export default FeedbackForm;
