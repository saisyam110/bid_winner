import React from "react";
import { ImArrowLeft } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { TbArrowBigRightFilled } from "react-icons/tb";
import "./Category.css";
import subData from "../Data/subData";

const SubCategories = () => {
  return (
    <>
      <div>
        <div className=" pt-5 pb-4 d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <Link to="/">
              <ImArrowLeft className="fs-3 text-dark" />
            </Link>

            <h4>Sub Categories</h4>
          </div>
          <div>
            <div className="input-group-append search_bar">
              <span
                className="input-group-text ps-3 pe-5 rounded w-100 text-secondary"
                id="search-icon"
              >
                <FontAwesomeIcon icon={faSearch} className="pe-3" />
                Search Sub Categories
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 ps-4 pe-1 rounded mt-2">
          <div className="row text-secondary">
            <div className="col-2">
              <small>SlNo</small>
            </div>
            <div className="col-7">
              <small>Name</small>
            </div>
            <div className="col-3">
              <small>Type</small>
            </div>
          </div>
          {subData.map((el) => (
            <div key={el.id}>
              <div className="row pt-4 pb-3">
                <div className="col-2">{el.id}</div>
                <div className="col-7">{el.name}</div>
                <div className="col-3">
                  <div className="d-flex align-items-center gap-1">
                    <span>{el.type}</span>
                    <Link to="/assemble">
                      <TbArrowBigRightFilled className="text-primary fs-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubCategories;
