import React from "react";
import "../styles/Contactstyles.css";
function refreshPage() {
  window.location.reload(true);
}
const Contact = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="body" id="Contact">
      <div className="test_container">
        <div className="contact-box">
          <div className="right">
            <h2>Contact </h2>
            <input
              type="text"
              className="field"
              placeholder="Your Name"
            ></input>
            <input
              type="text"
              className="field"
              placeholder="Your Email"
            ></input>
            <input type="text" className="field" placeholder="Phone"></input>
            <textarea placeholder="Message" class="field"></textarea>
            <button class="btn" onClick={refreshPage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
