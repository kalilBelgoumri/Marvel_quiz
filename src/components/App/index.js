import "../../App.css";
import ErrorPage from "../ErrorPage";
import Footer from "../Footer";
import Header from "../Header";
import Landing from "../Landing";
import Login from "../Login";
import Signup from "../Signup";
import Welcome from "../Welcome";

function App() {
  return (
    <div>
      <Header />
      <Login />
      <ErrorPage />
      <Signup />
      <Welcome />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
