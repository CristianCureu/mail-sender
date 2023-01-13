import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Subscribe from "./pages/Subscribe";
import Admin from "./pages/admin/Admin";
import Login from "./pages/admin/Login";
import PrivateRoute from "./utils/privateRoutes";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/admin-login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
