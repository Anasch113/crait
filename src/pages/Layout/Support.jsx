import React from 'react'
import "./styles/Support.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Support({setOpen}) {
  return (
    <div className="support" id="support">
          <div className="support__top">
            <div></div>
            <p className="support__title">Support Center</p>
            <FontAwesomeIcon
              icon={faXmark}
              className="support__close"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="support__middle">
            <p>Content</p>
            <div className="support__grid">
            
            </div>
          </div>
        </div>
  )
}

export default Support