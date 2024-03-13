import React, { useState, useEffect } from "react";
import "./styles/Loading.css";
import { BarLoader } from "react-spinners";
import dashlogo from "../images/dashlogo.png";

function Loading() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      
        <div className="loading__div">
          <div className="loading__flex">
            <img src={dashlogo} alt="Logo" />
            {windowWidth > 400? (
            <BarLoader
              color="#E688A6"
              height="10px"
              width="300px"
              speedMultiplier="1.5"
            />
            ): (
              <BarLoader
              color="#E688A6"
              height="10px"
              width="200px"
              speedMultiplier="1.5"
            />
            )
          }
          </div>
        </div>
      
    </>
  );
}

export default Loading;
