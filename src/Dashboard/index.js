import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const response = await axios.get("http://localhost:8000/profile/5");
    this.setState({ data: response.data.data });
  }

  render() {
    return (
      <>
        <div className="d-flex h-100 align-items-start flex-column">
          <div className="p-2 px-4 w-100 bg-b radius25 shadow mx-0 row">
            <div className="col">
              {this.state.data.map((item) => {
                return (
                  <div className="d-flex flex-column row">
                    <div className="p-2 nunito t-white">Balance</div>
                    <div className="p-2 nunito t-white fs-40 fw-700">
                      Rp.{item.balance}
                    </div>
                    <div className="p-2 nunito t-white">
                      {item.phone}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-3">
              <div className="d-flex flex-column row">
                <div className="btn p-2 col">
                  <Link
                    to="/transfer"
                    role="button"
                    className="btn btn-primary bg-button radius10 p-3"
                  >
                    <img src="icon/arrow-up.png" /> Transfer
                  </Link>
                </div>
                <div className="btn p-2 col">
                  <Link
                    to="/topup"
                    role="button"
                    className="btn btn-primary bg-button radius10 p-3"
                  >
                    <img src="icon/plus.png" /> Top up
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 w-100 h-100 mt-4 mx-0 row">
            <div className="radius25 bg-w shadow mr-4 col-7">
              <div className="d-flex flex-column">
                <div className="p-2 row">
                  <div className="col">
                    <div className="d-flex flex-column">
                      <div className="p-2">
                        <img src="icon/arrowin.png" alt="" />
                      </div>
                      <div className="p-2">Income</div>
                      <div className="p-2">Rp2.120.000</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex flex-column">
                      <div className="p-2">
                        <img src="icon/arrowout.png" alt="" />
                      </div>
                      <div className="p-2">Expense</div>
                      <div className="p-2">Rp1.560.000</div>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="col d-flex flex-column align-items-center">
                    <h5 className="mt-5">+Rp65.000</h5>
                    <canvas id="canvas" className="-auto"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="radius25 bg-w shadow p-3 col">
              <div className="d-flex flex-column h-100 mx-0">
                <div className="p-2 row mb-5">
                  <div className="col">Transaction History</div>
                  <div className="col-3">
                    <Link to="" className="btn-link" role="button">
                      See all
                    </Link>
                  </div>
                </div>
                <div className="p-2 row">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-4">
                        <img src="icon/man1.png" alt="" />
                      </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="col">Samuel Suhi</div>
                          <div className="w-100"></div>
                          <div className="col">Transfer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row">
                      <div className="col">+Rp50.000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
