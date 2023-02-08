import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastOptions from "../../utils/toastOptions";

function LoginForm() {
  const [user, setUser] = useState({});
  const toastId = useRef(null);
  const navigate = useNavigate();

  const onChangeHandler = (fieldName, value) => {
    setUser({ ...user, [fieldName]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const response = await res.json();
      if (response.success === false) {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error(response.message, toastOptions);
        }
      } else {
        setUser({});
        localStorage.setItem("token", response.token);
        navigate("/admin");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      className="flex flex-col h-2/3 items-center justify-between"
      onSubmit={handleLogin}
    >
      <TextField
        name="username"
        autoComplete="off"
        label="Username"
        variant="outlined"
        onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
      />
      <TextField
        name="password"
        autoComplete="off"
        label="Password"
        type="password"
        variant="outlined"
        onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
      <ToastContainer limit={1} />
    </form>
  );
}

export default LoginForm;
