import "../../App.css";
import ErrorPage from "../ErrorPage";
import Footer from "../Footer";
import Header from "../Header";
import Landing from "../Landing";
import Login from "../Login";
import Signup from "../Signup";
import Welcome from "../Welcome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
