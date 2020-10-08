import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Confirmation extends Component {
  render() {
    return (
      <>
        <div className="d-flex bg-w h-100 shadow radius25 flex-column">
          <div className="m-4 nunito fw-700 fs-15 t-black">Transfer To</div>
          <div className="d-flex mx-4 py-3 my-2 radius10 shadow">
            <div className="col-1">
              <img className="ml-3" src="" alt="" />
            </div>
            <div className="col">
              <div className="d-flex flex-row nunito fw-700 fs-15 mb-2">
                Samuel Suhi
              </div>
              <div className="d-flex flex-row nunito fw-400 fs-15 t-grey">
                08908988686
              </div>
            </div>
          </div>
          <div className="m-4 nunito fw-700 fs-15 t-black">Transfer To</div>
          <div className="d-flex mx-4 py-3 my-2 radius10 shadow">
            <div className="col">
              <div className="d-flex flex-row nunito fw-400 fs-15 t-grey mb-2">
                Amount
              </div>
              <div className="d-flex flex-row nunito fw-700 fs-15">0</div>
            </div>
          </div>
          <div className="d-flex mx-4 py-3 my-2 radius10 shadow">
            <div className="col">
              <div className="d-flex flex-row nunito fw-400 fs-15 t-grey mb-2">
                Balanced left
              </div>
              <div className="d-flex flex-row nunito fw-700 fs-15">0</div>
            </div>
          </div>
          <div className="d-flex mx-4 py-3 my-2 radius10 shadow">
            <div className="col">
              <div className="d-flex flex-row nunito fw-400 fs-15 t-grey mb-2">
                Data & Time
              </div>
              <div className="d-flex flex-row nunito fw-700 fs-15">
                00-00-0000
              </div>
            </div>
          </div>
          <div className="d-flex mx-4 py-3 my-2 radius10 shadow">
            <div className="col">
              <div className="d-flex flex-row nunito fw-400 fs-15 t-grey mb-2">
                Notes
              </div>
              <div className="d-flex flex-row nunito fw-700 fs-15">blank</div>
            </div>
          </div>
          <div className="d-flex justify-content-end mx-4 py-3 my-2">
            <button
              type="button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              className="btn btn-lg bg-b fs-15 fw-700 t-white radius10"
            >
              Continue
            </button>
          </div>
        </div>

        {/* popup */}
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Confirmation;
