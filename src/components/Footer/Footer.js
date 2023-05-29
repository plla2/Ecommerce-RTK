import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <footer className="footer py-5 bg-dark">
        <div className="container">
          <div className="footer-content text-white grid">
            <div className="footer-item text-center">
              <h6 className="fs-17 fw-6">
                안녕하세요 짱구의 잡화점입니다!! by plla2
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
