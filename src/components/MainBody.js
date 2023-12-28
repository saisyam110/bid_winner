import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { GoArrowDown } from "react-icons/go";
import { FaCaretRight } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import "./MainBody.css";
const MainBody = () => {
  return (
    <>
      <div className="p-5 custom_main">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Job</h3>
          <div className="d-flex gap-4 align-items-center ">
            <small className="fs-5 text-secondary">Quote Status</small>
            <div className=" acceptedBar rounded-pill">
              <small className="py-0 my-n1">Accepted</small>
              <AiFillCaretDown />
            </div>
          </div>
        </div>
        <div className="bg-white my-3 ps-2 pe-0 py-4 rounded">
          <div className="row py-1 ">
            <div className="col-2">
              <div>
                <span className="text-secondary ">Job Name</span>
              </div>
              <div className="mt-3">
                <span className="text-secondary ">Job Number</span>
              </div>
              <div className="mt-3">
                <span className="text-secondary ">Unit</span>
              </div>
              <div className="mt-3">
                <span className="text-secondary ">Difficulty Level</span>
              </div>
            </div>
            <div className="col-8">
              <div>
                <span className="fs-5 ">Text Project 1</span>
              </div>
              <div className="mt-2">
                <span className="fs-6 ">#ABV3265413</span>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="border rounded-pill w-lg-25 mainbtn1  py-1 mt-2">
                    <span className="px-1 border rounded-pill bg-primary text-white mainbtn1 py-1">
                      Metric
                    </span>
                    <span className="ps-1">US</span>
                  </div>
                </div>
              </div>

              <div>
                <select
                  name=""
                  id=""
                  className="w-50 border border-secondary-subtle rounded fw-bold mt-2 p-1"
                >
                  <option value="0">High</option>
                </select>
              </div>
            </div>
            <div className="col-2">
              <div>
                <button className="bg-primary text-white py-1 w-50 rounded border-0 mainbtn">
                  Job Details
                </button>
              </div>
              <div className="mt-4">
                <button className="bg-primary text-white py-1 w-50 rounded border-0 mainbtn">
                  Button 2
                </button>
              </div>
              <div className="mt-3">
                <button className="bg-white text-primary py-1 w-50 rounded border-0 mainbtn">
                  Button 3
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-5">
              <div className="input-group-append ">
                <span
                  className="input-group-text ps-3 pe-5 rounded w-100 text-secondary"
                  id="search-icon"
                >
                  <FontAwesomeIcon icon={faSearch} className="pe-3" />
                  Search Projects
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-8 ">
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <span className="option_name">Sort by</span>
                    <select
                      name=""
                      id=""
                      className="w-50 border border-secondary-subtle rounded text-center mt-2 p-1 option_name"
                    >
                      <option value="0" className="">
                        Name
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-4">
                  <div className="bg-white text-primary border border-secondary-subtle text-center  mt-2 p-1 rounded">
                    <span className=" pe-1 option_name">Import</span>
                    <GoArrowDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white py-4">
          <div className="row text-secondary">
            <div className="col-1"></div>
            <div className="col-1">
              <span>SlNo</span>
            </div>
            <div className="col-5">
              <span>Assembly Name</span>
            </div>
            <div className="col-2">
              <span>Length</span>
            </div>
            <div className="col-2">
              <span>Quantity</span>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row pt-3 pb-2">
            <div className="col-1 text-center">
              <FaCaretRight />
            </div>
            <div className="col-1">
              <span>1</span>
            </div>
            <div className="col-5">
              <span>2" X 4" Drop-in T-Bar (1/2" Flex) </span>
            </div>
            <div className="col-2 text-primary">
              <span>100 M</span>
            </div>
            <div className="col-2 text-primary">
              <span>-</span>
            </div>
            <div className="col-1 text-primary">
              <MdDelete />
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="row pt-3 pb-2">
            <div className="col-1 text-center">
              <FaCaretRight />
            </div>
            <div className="col-1">
              <span>2</span>
            </div>
            <div className="col-5">
              <span>1" X 4" Surface Fluor Fixt </span>
            </div>
            <div className="col-2 text-primary">
              <span>-</span>
            </div>
            <div className="col-2 text-primary">
              <span>120</span>
            </div>
            <div className="col-1 text-primary">
              <MdDelete />
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="row pt-3 pb-2">
            <div className="col-1 text-center">
              <FaCaretRight />
            </div>
            <div className="col-1">
              <span>3</span>
            </div>
            <div className="col-5">
              <span>1/ 2" EMT DC SS Connector </span>
            </div>
            <div className="col-2 text-primary">
              <span>-</span>
            </div>
            <div className="col-2 text-primary">
              <span>270</span>
            </div>
            <div className="col-1 text-primary">
              <MdDelete />
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="row pt-3 pb-2">
            <div className="col-1 text-center">
              <FaCaretRight />
            </div>
            <div className="col-1">
              <span>4</span>
            </div>
            <div className="col-5">
              <span>2" X 4" Drop-in T-Bar (1" Flex) </span>
            </div>
            <div className="col-2 text-primary">
              <span>1200 M</span>
            </div>
            <div className="col-2 text-primary">
              <span>-</span>
            </div>
            <div className="col-1 text-primary">
              <MdDelete />
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="row pt-3 pb-2">
            <div className="col-1 text-center">
              <FaCaretRight />
            </div>
            <div className="col-1">
              <span>5</span>
            </div>
            <div className="col-5">
              <span>3" EMT DC SS Connector </span>
            </div>
            <div className="col-2 text-primary">
              <span>-</span>
            </div>
            <div className="col-2 text-primary">
              <span>500</span>
            </div>
            <div className="col-1 text-primary">
              <MdDelete />
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="row pt-3 pb-2">
            <div className="col-1 text-center">
              <FaCaretRight />
            </div>
            <div className="col-1">
              <span>6</span>
            </div>
            <div className="col-5">
              <span>2" X 6" Surface Fluor Fist </span>
            </div>
            <div className="col-2 text-primary">
              <span>-</span>
            </div>
            <div className="col-2 text-primary">
              <span>1200</span>
            </div>
            <div className="col-1 text-primary">
              <MdDelete />
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
