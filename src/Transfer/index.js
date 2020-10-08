import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Transfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.onSearch = this.onSearch.bind(this);
  }
 
  async componentDidMount() {
    const response = await axios.get("http://localhost:8000/search");
    this.setState({ data: response.data.data });
  }

  async onSearch(e) {
    const response = await axios.get("http://localhost:8000/search", {
      params: { q: e.target.value },
    });
    this.setState({ data: response.data.data });
    console.log(this.state.data);
  }

  render() {
    return (
      <>
        <div className="d-flex bg-w h-100 shadow radius25 flex-column">
          <div className="m-4 fw-700 fs-20 t-black">Search Receiver</div>
          <div className="px-4 my-3 d-flex flex-column">
            <img className="ml-3" src="" alt="" />
            <input
              className="form-control nunito fw-400 fs-15 radius10 search-bar"
              type="text"
              placeholder="Search receiver here"
              onChange={this.onSearch}
            />
          </div>
          {this.state.data.map((item) => {
            return (
              <div className="d-flex mx-4 py-3 my-2 radius10 shadow">
                <div className="col-1">
                  <img className="ml-3" src="" alt="" />
                </div>
                <div className="col">
                  <div className="d-flex flex-row mb-2">
                    <Link
                      to="/input-amount-bank"
                      className="btn p-0 nunito fw-700 fs-15 t-black "
                      role="button"
                    >
                      {item.firstname}
                    </Link>
                  </div>
                  <div className="d-flex flex-row nunito fw-400 fs-15 t-grey">
                    {item.phone}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Transfer;
