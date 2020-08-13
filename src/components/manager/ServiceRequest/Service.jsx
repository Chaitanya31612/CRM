import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidenav from "../Sidenav";

const ServiceRequest = ({ match }) => {
  console.log(match.params.id);
  const results = useSelector((state) => state.service);
  const services = results.filter((result) => result._id === match.params.id);

  return (
    <React.Fragment>
      <div className="dashboard">
        <div className="sidebar">
          <Sidenav />
        </div>
        <div className="main-content">
          <div className="header">
            <div className="title">Service Request</div>
            <Link to="/managerdashboard/servicerequest/add">
              <button type="button">
                Add <i className="material-icons">&#xe147;</i>
              </button>
            </Link>
          </div>
          <hr />
          <div className="content">
            {services.map((result) => (
              <div key={result._id} className="cards">
                <ul>
                  <li>
                    <b>Title:</b>
                    <p>{result.title}</p>
                  </li>
                  <li>
                    <b>Client</b>
                    <p>{result.client}</p>
                  </li>
                  <li>
                    <b>Manager</b>
                    <p>{result.manager}</p>
                  </li>
                  <li>
                    <b>Expected Closing</b>
                    <p>{result.expected_closing}</p>
                  </li>
                  <li>
                    <b>Priority</b>
                    <p>{result.priority}</p>
                  </li>
                  <li>
                    <b>Status</b>
                    <p>{result.status}</p>
                  </li>
                  <li>
                    <b>Expected Revenue</b>
                    <p>{result.expected_revenue}</p>
                  </li>
                  <li>
                    <b>Probability</b>
                    <p>{result.probability}</p>
                  </li>
                </ul>
                <div className="button-container">
                  <Link to={`/managerdashboard/servicerequest/${result._id}`}>
                    <button type="button">
                      Update
                      <i className="material-icons">&#xe3c9;</i>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceRequest;