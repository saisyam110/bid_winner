import React from "react";

import logo from "../img/logo_bd.jpg";
import profile from "../img/profile.avif";
import Badge from "react-bootstrap/Badge";
import { FaCaretDown } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

import "./Navbar.css";
const NavBar = () => {
  return (
    <div className="nav text-white py-3">
      <div className="container-fluid row">
        <div className="col-lg-12 col-xl-3">
          <div className="d-flex justify-content-center gap-2">
            <img src={logo} alt="logo" width="50px" />
            <h3 className="fw-bold border border-white p-1">BID WINNER</h3>
          </div>
        </div>
        <div className="col-md-12 col-lg-8 col-xl-6 ">
          <div className="row nav_list">
            <div className="col-sm-4 col-md-2 ">
              <span>Dashboard</span>
            </div>
            <div className="col-sm-4 col-md-2 ">
              <span>Jobs</span>
            </div>
            <div className="col-sm-4 col-md-2 ">
              <span>Calendar</span>
            </div>
            <div className="col-sm-4 col-md-2 ">
              <span>CostCatalog</span>
            </div>
            <div className="col-sm-4 col-md-2 ">
              <span>Database</span>
            </div>
            <div className="col-sm-4 col-md-2 ">
              <span>Tutorials</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-xl-3 nav_badge">
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex  align-items-center border border-top-5 rounded ps-4 pe-4 border-opacity-50">
              <div>
                <p className="fs-5 mb-0 pb-0">Jane Cooper</p>
                <small>janecooper@gmail.com</small>
              </div>

              <img
                src={profile}
                alt="profile"
                width="40px"
                height="40px"
                className="rounded-circle"
              />
              <FaCaretDown className="fs-4 ps-2" />
            </div>
            <div className="position-relative">
              <FiBell className="bell fw-bold" />
              <Badge
                bg="danger"
                className="badge position-absolute top-0 end-0"
              >
                <small>1</small>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
