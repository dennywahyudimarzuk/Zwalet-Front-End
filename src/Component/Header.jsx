import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Navbar className="bg-w radius25 shadow hd-size">
        <Navbar.Brand className="nunito fw-700 fs-30 t-blue">
          Zwallet
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className="d-flex align-items-center">
            <img src="" />
            <div className="mx-3">
              <div className="nunito fw-700 fs-20 t-black">Robert Chandler</div>
              <div className="nunito fw-400 fs-15 t-black">+89 5379 9111 34</div>
            </div>
            <Link to="/">
              <img src="" />
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
