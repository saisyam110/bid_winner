import React, { useState } from "react";
import { ImArrowLeft } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { TbArrowBigRightFilled } from "react-icons/tb";
import ModalComponent from "../components/ModalComponent";
import { Button } from "react-bootstrap";
import assembyData from "../Data/assembyData";
import "./Category.css";

const Assemble = () => {
  const [modalShow, setModalShow] = useState(false);
  // const [modal1Show, setModal1Show] = useState(false);
  // const [modal2Show, setModal2Show] = useState(false);
  // const [modal3Show, setModal3Show] = useState(false);
  // const [modal4Show, setModal4Show] = useState(false);
  // const [modal5Show, setModal5Show] = useState(false);
  // const [modal6Show, setModal6Show] = useState(false);
  // const [modal7Show, setModal7Show] = useState(false);
  // const [modal8Show, setModal8Show] = useState(false);
  // const [modal9Show, setModal9Show] = useState(false);

  return (
    <>
      <div>
        <div className=" py-5 d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <Link to="/sub-categories">
              <ImArrowLeft className="fs-3 text-dark" />
            </Link>

            <h4>Assemblies</h4>
          </div>
          <div>
            <div className="input-group-append search_bar">
              <span
                className="input-group-text ps-3 pe-5 rounded w-100 text-secondary"
                id="search-icon"
              >
                <FontAwesomeIcon icon={faSearch} className="pe-3" />
                Search Assemblies
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 ps-4 pe-1 rounded mt-2">
          <div className=" row text-secondary py-4">
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
          {assembyData.map((el) => (
            <div key={el.id}>
              <div className="row pt-4 pb-4">
                <div className="col-2">{el.id}</div>
                <div className="col-7">{el.name}</div>
                <div className="col-3">
                  <div className="d-flex align-items-center gap-1">
                    <span>{el.type}</span>
                    <div>
                      <Button variant="" onClick={() => setModalShow(true)}>
                        <span className="bg-success rounded-circle px-2 pb-1  text-white">
                          +
                        </span>
                      </Button>
                    </div>
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
      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
      {/* <ModalComponent show={modal1Show} onHide={() => setModal1Show(false)} />
      <ModalComponent show={modal2Show} onHide={() => setModal2Show(false)} />
      <ModalComponent show={modal3Show} onHide={() => setModal3Show(false)} />
      <ModalComponent show={modal4Show} onHide={() => setModal4Show(false)} />
      <ModalComponent show={modal5Show} onHide={() => setModal5Show(false)} />
      <ModalComponent show={modal6Show} onHide={() => setModal6Show(false)} />
      <ModalComponent show={modal7Show} onHide={() => setModal7Show(false)} />
      <ModalComponent show={modal8Show} onHide={() => setModal8Show(false)} />
      <ModalComponent show={modal9Show} onHide={() => setModal9Show(false)} /> */}
    </>
  );
};

export default Assemble;
