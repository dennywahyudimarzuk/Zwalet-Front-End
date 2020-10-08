import React from "react";
import { Link } from "react-router-dom";

const Body = (props) => {
  return (
    <>
      <div className="d-flex flex-column h-100">
        <div className="p-2 mb-4 row">
          <div className="col-3">
            <img className src="" alt="" />
          </div>
          <Link
            to="/dashboard"
            className="nunito fw-400 fs-20 t-black pl-3 text-decoration-none"
            role="button"
          >
            Dashboard
          </Link>
        </div>
        <div className="p-2 mb-4 row">
          <div className="col-3">
            <img className src="" alt="" />
          </div>
          <Link
            to="/transfer"
            className="nunito fw-400 fs-20 t-black link pl-3 text-decoration-none"
            role="button"
          >
            Transfer
          </Link>
        </div>
        <div className="p-2 mb-4 row">
          <div className="col-3">
            <img className src="" alt="" />
          </div>
          <Link
            to="/topup"
            className="nunito fw-400 fs-20 t-black link pl-3 text-decoration-none"
            role="button"
          >
            Top Up
          </Link>
        </div>
        <div className="p-2 mb-4 row">
          <div className="col-3">
            <img className src="" alt="" />
          </div>
          <Link
            to="/profile"
            className="nunito fw-400 fs-20 t-black link pl-3 text-decoration-none"
            role="button"
          >
            Profie
          </Link>
        </div>
        <div className="p-2 mt-auto row">
          <div className="col-3">
            <img className src="" alt="" />
          </div>
          <Link
            to="/"
            className="nunito fw-400 fs-20 t-black link pl-3 text-decoration-none"
            role="button"
          >
            Log out
          </Link>
        </div>
      </div>
    </>
  );
};

export default Body;
