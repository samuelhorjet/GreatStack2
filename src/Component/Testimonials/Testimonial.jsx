import React, { useRef, useState, useEffect } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef(null);
  const [tx, setTx] = useState(0);
  const maxTx = -50; // Prevent going beyond the third and fourth users

  const slideForward = () => {
    setTx((prevTx) => (prevTx > maxTx ? prevTx - 25 : prevTx));
  };

  const slideBackward = () => {
    setTx((prevTx) => (prevTx < 0 ? prevTx + 25 : prevTx));
  };

  useEffect(() => {
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  }, [tx]);

  return (
    <div className="testimonial">
      <img
        src={next_icon}
        alt="Next"
        className={`next-btn ${tx <= maxTx ? "disabled" : ""}`}
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="Back"
        className={`back-btn ${tx >= 0 ? "disabled" : ""}`}
        onClick={slideBackward}
      />
      <div className="slider">
        <ul
          ref={slider}
          style={{ transition: "transform 0.5s ease-in-out", display: "flex" }}
        >
          <li className="slide">
            <div className="user-info">
              <img src={user_1} alt="User 1" />
              <div>
                <h3>Emily Williams</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user_2} alt="User 2" />
              <div>
                <h3>William Jackson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user_3} alt="User 3" />
              <div>
                <h3>Emily Williams</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user_4} alt="User 4" />
              <div>
                <h3>William Jackson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
