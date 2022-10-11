import { useEffect, useState, useRef } from "react";

const Landing = () => {
  const [btn, setBtn] = useState(false);
  const refWolverine = useRef(null);

  console.log("btn", btn);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setBtn(true);
    }, 1000);
  }, []);

  const setLeftimg = () => {
    refWolverine.current.classList.add("leftImg");
  };
  const setLeaveLeftMouse = () => {
    refWolverine.current.classList.remove("leftImg");
  };
  const setRightImg = () => {
    refWolverine.current.classList.add("rightImg");
  };
  const setLeaveRightMouse = () => {
    refWolverine.current.classList.remove("rightImg");
  };

  const btnDisplay = btn && (
    <>
      <div className="leftBox">
        <button
          onMouseOver={setLeftimg}
          onMouseLeave={setLeaveLeftMouse}
          className="btn-welcome"
        >
          Inscription
        </button>
      </div>
      <div className="rightBox">
        <button
          onMouseOver={setRightImg}
          onMouseLeave={setLeaveRightMouse}
          className="btn-welcome"
        >
          Connexion
        </button>
      </div>
    </>
  );

  return (
    <main ref={refWolverine} className="welcomePage">
      {btnDisplay}
    </main>
  );
};

export default Landing;
