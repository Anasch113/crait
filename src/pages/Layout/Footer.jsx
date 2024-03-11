import { Link } from "react-router-dom";
import "./styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Support from "./Support";
function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? <Support setOpen={setOpen}/> : ""}
      <div className="support__button" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faComments} />
      </div>
      <footer>
        <div className="footer__container">
          <div className="footer__top">
            <div className="footer__column-1">
              <div>
                <h3 className="footer__title">PRODUCTS</h3>
                <div className="footer__des__div">
                  <p className="footer__des">YouCoin AI</p>
                  <p className="footer__des">YouCoin Engine</p>
                  <p className="footer__des">YouCoin AI Platform</p>
                  <p className="footer__des">YouCoin Conversion</p>
                </div>
              </div>
              <div>
                <h3 className="footer__title">GOVERMENT</h3>
                <div className="footer__des__div">
                  <p className="footer__des">Defense</p>
                  <p className="footer__des">Federal</p>
                  <p className="footer__des">Public Sector</p>
                </div>
              </div>
            </div>
            <div className="footer__column-2">
              <h3 className="footer__title">SOLUTIONS</h3>
              <div className="footer__des__div">
                <p className="footer__des">Retail & eCommerce</p>
                <p className="footer__des">Defense</p>
                <p className="footer__des">Logistics</p>
                <p className="footer__des">Autonomous Vehicles</p>
                <p className="footer__des">Robotics</p>
                <p className="footer__des">AR/VR</p>
                <p className="footer__des">Content & Language</p>
                <p className="footer__des">Generative AI Data Engine</p>
              </div>
            </div>
            <div className="footer__column-3">
              <h3 className="footer__title">COMPANY</h3>
              <div className="footer__des__div">
                <p className="footer__des">About</p>
                <p className="footer__des">Pricing</p>
                <p className="footer__des">Careers</p>
                <p className="footer__des">Security</p>
                <p className="footer__des">Terms</p>
                <p className="footer__des">Privacy</p>
              </div>
            </div>
            <div className="footer__column-4">
              <h3 className="footer__title">RESOURCES</h3>
              <div className="footer__des__div">
                <p className="footer__des">Blog</p>
                <p className="footer__des">Customers</p>
                <p className="footer__des">Events</p>
                <p className="footer__des">Open Datasets</p>
                <p className="footer__des">Interviews</p>
                <p className="footer__des">Documentation</p>
                <p className="footer__des">Guides</p>
                <p className="footer__des">Community</p>
                <p className="footer__des">AI Readiness Report 2023</p>
              </div>
            </div>
            <div className="footer__column-5">
              <h3 className="footer__title">GUIDES</h3>
              <div className="footer__des__div">
                <p className="footer__des">Data Labeling</p>
                <p className="footer__des">ML Model Training</p>
                <p className="footer__des">Diffusion Models</p>
                <p className="footer__des">Guide to AI for eCommerce</p>
                <p className="footer__des">Computer Vision</p>
                <p className="footer__des">Large Language Models</p>
              </div>
            </div>
            <div className="footer__column-6">
              <h3 className="footer__title">CONTACT</h3>
              <div className="footer__des__div">
                <p className="footer__des">sales@youcoin.com</p>
                <p className="footer__des">support@youcoin.com</p>
                <p className="footer__des">careers@youcoin.com</p>
                <p className="footer__des">press@youcoin.com</p>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom__text">
              <p>Copyright © 2024 YouCoin, Inc. All rights reserved.</p>
              <p>
                <Link to="/Terms" className="footer__terms">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link to="/Terms" className="footer__terms">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
