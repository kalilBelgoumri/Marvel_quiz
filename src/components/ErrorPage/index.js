import React from "react";
import image from "../../images/batman.png";

const ErrorPage = () => {
  const styleError = {
    textAlign: "center",
    marginTop: 20,
  };

  const styleErrorImg = {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  };

  return (
    <div className="quiz-bg">
      <div className="container">
        <h2 style={styleError}>Oups, cette pas n'existe pas</h2>
        <div style={styleErrorImg}>
          <img src={image} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
