import React, { useState, useEffect } from "react";
import btop from "../assets/img/svg/top.svg";

const BTT = () => {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 800) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div>
      <button
        id="btn"
        onClick={() => top()}
        style={{ zIndex: "99" }}
        className={
          backToTop
            ? "btn d-block position-fixed end-0 bottom-0 mb-2 me-2"
            : "btn d-none position-fixed end-0 bottom-0 mb-2 me-2"
        }
      >
        <img className="btt_size" src={btop} alt="btt" />
      </button>
    </div>
  );
};
export default BTT;
