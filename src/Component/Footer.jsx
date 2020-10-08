import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = (props) => {
  return (
    <>
      <Navbar className="bg-b ft-size justify-content-between">
        <div className="nunito fw-400 fs-15 t-white m-0 row">
          2020 ZWallet. All right reserved.
        </div>
        <div className="m-0 justify-content-between row">
          <div className="nunito fw-600 fs-15 t-white p-0 m-0 col">
            +62 5637 8882 9901
          </div>
          <div className="nunito fw-600 fs-15 t-white m-0 col">
            contact@zwallet.com
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Footer;
