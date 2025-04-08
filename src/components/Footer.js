import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Footer = () => {
  return (
    <footer className="container-fluid mt-3 col-xl-12 col-lg-12 col-sm-12 col-md-12 shadow p-4 bg-dark text-white text-center">
      <div className="row">
        <div className="col-12">
          <p>&#169; 2025 Decor Dream. All rights reserved.</p>
        </div>
        <div className="col-12">
          <a
            href="https://www.facebook.com/nguyenthang.it.fb/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm m-2"
          >
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a
            href="https://www.tiktok.com/@eriusmon?_t=ZS-8ukjwdNKybx&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm m-2"
          >
            <i className="bi bi-tiktok"></i> TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
