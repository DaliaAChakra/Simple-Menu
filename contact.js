import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div>
      <div className="top">
        <button>Call Manager</button>
        <button>Call Waiter</button>
      </div>
      <div className="body">
        <h2>Contact Us</h2>
        <ul>
          <li>Dalia Abou Shakra</li>
          <li>Shadi Abou Karroum</li>
          <li>salam Abou Shakra</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
