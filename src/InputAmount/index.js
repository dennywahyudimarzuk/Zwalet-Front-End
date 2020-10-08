import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class InputAmount extends Component {
  render() {
    return (
      <>
        <div className="d-flex bg-w h-100 shadow radius25 flex-column">
          <div className="m-4 nunito fw-700 fs-20 t-black">Transfer Money</div>
          <div className="d-flex mx-4 py-3 my-2 radius10 shadow">
            <div className="col-1">
              <img className="ml-3" src="" alt="" />
            </div>
            <div className="col">
              <div className="d-flex flex-row nunito fw-700 fs-15 mb-2">Samuel Suhi</div>
              <div className="d-flex flex-row nunito fw-400 fs-15 t-grey">
                08908988686
              </div>
            </div>
          </div>
          <div className="d-flex flex-row mx-4 mb-4 py-3 my-2">
            <p>
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <p className="text-white">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
          </div>
          <div className="d-flex justify-content-center mx-4 py-3 my-2">
            <input
              className="form-control fw-700 input text-center nunito t-blue"
              type="text"
              placeholder="0.00"
            ></input>
          </div>
          <div className="text-center mx-4 py-3 my-2">Rp.120.000 Avaible</div>
          <div className="d-flex justify-content-center mx-4 py-3 my-2">
            <input
              class="form-control a col-5"
              type="text"
              placeholder="Add some notes"
            ></input>
          </div>
          <div className="d-flex justify-content-end mx-4 py-3 px-5 my-2">
            <Link to="/confirmation" role="button" className="btn btn-lg bg-b fs-15 fw-700 t-white radius10">
              Continue
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default InputAmount;
