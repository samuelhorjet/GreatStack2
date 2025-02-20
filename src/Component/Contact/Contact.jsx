import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzdkagv");

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Feel free to reach out through our contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Mail Icon" />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={phone_icon} alt="Phone Icon" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="Location Icon" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your Mobile Number"
            required
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="btn dark-btn"
          >
            Submit Now <img src={white_arrow} alt="Arrow Icon" />
          </button>

          {/* Success Message Below the Button */}
          {state.succeeded && (
            <p className="success-message">Message sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
