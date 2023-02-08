import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Subscribe from "./pages/Subscribe";
import Admin from "./pages/admin/Admin";
import Login from "./pages/admin/Login";
import PrivateRoute from "./utils/privateRoutes";
import Detalii from "./pages/Detalii";
import ChartPage from "./pages/admin/ChartPage";
import EmailPage from "./pages/admin/EmailPage";
import Template from "./pages/admin/Template";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detalii" element={<Detalii />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/admin-login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-chart" element={<ChartPage />} />
          <Route path="/admin-email" element={<EmailPage />} />
          <Route path="/admin-template-1" element={<Template />} />
          <Route path="/admin-template-2" element={<Template />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
