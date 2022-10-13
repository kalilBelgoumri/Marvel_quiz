import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/index";
import { BrowserRouter } from "react-router-dom";
import Firebase, { FirebaseContext } from "./components/Firebase/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={Firebase}>
      <App />
    </FirebaseContext.Provider>
  </BrowserRouter>
);
