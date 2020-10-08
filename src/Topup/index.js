import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Topup extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const response = await axios.get("http://localhost:8000/topup");
    this.setState({ data: response.data.data });
  }

  render() {
    return (
      <>
        <div className="d-flex bg-w h-100 shadow radius25 flex-column">
          <h5 className="m-4">How to Top up</h5>
          {this.state.data.map((item) => {
            return (
              <div className="d-flex mx-4 py-3 my-2 radius10 shadow">
                <div className="mx-3 align-self-center font-weight-bold t-blue fs-20 ninito">
                  {item.idTopup}
                </div>
                <div className="align-self-center text-dark fs-15 nunito">
                  {item.stepTopup}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Topup;
