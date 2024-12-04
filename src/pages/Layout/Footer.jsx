import { Link } from "react-router-dom";
import "./styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Footer({ setArrowStyle, resetArrowStyle }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer>
        <div className="footer__container">
          <div className="footer__bottom">
            <div className="footer__bottom__text">
              <p>@Craift</p>
              <p>
                <Link to="/documentation" className="footer__terms">
                  Documentation
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
