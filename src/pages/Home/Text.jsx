import React from "react";
import "./styles/Text.css";
import dark from "./images/ex.jpg";
import { Link } from "react-router-dom";
function Text() {
  return (
    <>
      <section id="text" className="text-section">
        <div className="text__content">
          <div>
            <p>Automate</p>
          </div>
          <h2>
            Create. Automate. Dominate <br />
            <span>AI-driven innovation</span>
          </h2>
        </div>
        <div className="text-ex">
          <div className="text-tweets">
            <div className="text-tweet">
              <img src={dark} alt="Craift Tweet" className="text-tweet-img" />
              <div className="text-tweet-info">
                <div className="text-tweet-name">@Craift</div>
                <div className="text-tweet-des">
                  Craift uses an LLM to automate tweets, replies, and retweets.
                </div>
              </div>
            </div>

            <div className="text-tweet2">
              <img src={dark} alt="Craift Tweet" className="text-tweet-img" />
              <div className="text-tweet-info">
                <div className="text-tweet-name">@Craift</div>
                <div className="text-tweet-des">
                  Create smarter AI, automated Twitter accounts effortlessly.
                </div>
              </div>
            </div>

            <div className="text-tweet">
              <img src={dark} alt="Craift Tweet" className="text-tweet-img" />
              <div className="text-tweet-info">
                <div className="text-tweet-name">@Craift</div>
                <div className="text-tweet-des">
                  Craift is an LLM-powered platform designed for simplicity.
                </div>
              </div>
            </div>
          </div>

          <div className="text-tweet-text">
            <h3 className="text-tweet-title">
              Generate <span>Automated </span> <br /> Interactions
            </h3>
            <p className="text-tweet-description">
              Maximize your potential with Crait's LLM-powered automation for
              creating smarter Twitter accounts. Crait streamlines the process,
              allowing you to deploy intelligent, efficient, and secure
              automated accounts that amplify your reach and engagement.
            </p>
            <Link to="/dashboard" className="text-button">
              Automate Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Text;
