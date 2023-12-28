import React from "react";

import { RiArrowGoBackFill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
const Sidebar = () => {
  return (
    <>
      <div className=" text-center">
        <div>
          <div className="bg-primary pt-4  text-white mb-0 ">
            <RiArrowGoBackFill className="fs-4" />
            <p className="pb-1 m-0">Back to Jobs</p>
          </div>
          <div className="bg-white py-3 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>Notes</p>
          </div>
          <div className=" py-3 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>Take off</p>
          </div>
        </div>
        <div>
          <div className="bg-white pb-2 pt-4 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>Extension</p>
            <div className="container">
              <hr />
            </div>
          </div>
          <div className="bg-white py-3 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>IncLb</p>
            <div className="container ">
              <hr />
            </div>
          </div>
          <div className="bg-white py-3 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>Lbfac</p>
            <div className="container ">
              <hr />
            </div>
          </div>
          <div className="bg-white py-3 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>Lbfsc</p>
            <div className="container ">
              <hr />
            </div>
          </div>
          <div className="bg-white py-2 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>IndLb</p>
            <div className="container ">
              <hr />
            </div>
          </div>
          <div className="bg-white py-3 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>Sbcon</p>
            <div className="container">
              <hr />
            </div>
          </div>
          <div className="bg-white py-3 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>Gen Exp</p>
            <div className="container ">
              <hr />
            </div>
          </div>
          <div className="bg-white py-3 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>Qt Mat</p>
            <div className="container ">
              <hr />
            </div>
          </div>
          <div className="bg-white py-3 mt-n1  ">
            <CgNotes className="fs-3" />
            <p>Brk Dwn</p>
            <div className="container pt-2">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
