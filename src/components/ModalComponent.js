import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgColorPicker } from "react-icons/cg";
import "./Modal.css";

function ModalComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title className=" modalhead">
          Add Assembly to the Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row ">
            <div className="col-7">
              <div className="">
                <div className="row">
                  <div className="col-5">
                    <div className="container text-secondary">
                      <small>Assembly Name</small>
                    </div>
                  </div>
                  <div className="col-7 fw-bold">
                    <span>2X4" Drop-In T-Bar(1/2" Flex)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6 text-secondary ">
              <div className="container">
                <span className="pe-2">Count</span>
                <input
                  type="number"
                  placeholder="1250"
                  className="border border-secondery rounded py-1"
                />
              </div>
            </div>
            <div className="col-6 text-secondary">
              <div className="container">
                <span className="pe-2">Length in M</span>
                <input
                  type="number"
                  placeholder="1250"
                  className="border border-secondery rounded py-1"
                />
              </div>
            </div>
          </div>
          <div className="container pt-3 ">
            <span className="text-secondary">Assembly Description</span>
            <div>
              <div className=" modalgray px-2">
                <div className="row  text-secondary">
                  <div className="col-1">
                    <small>Sl No</small>
                  </div>
                  <div className="col-4">
                    <small>Description</small>
                  </div>
                  <div className="col-2">
                    <small>Quantity</small>
                  </div>
                  <div className="col-1">
                    <small>Fct 1</small>
                  </div>
                  <div className="col-1">
                    <small>Fct 2</small>
                  </div>
                  <div className="col-3">
                    <small>Catalog Number</small>
                  </div>
                </div>
                <div className="row py-2  px-2">
                  <div className="col-1">
                    <span>1</span>
                  </div>
                  <div className="col-4">
                    <span>4X1 1/2" SQ Box 1/2"KO</span>
                  </div>
                  <div className="col-2">
                    <span>2</span>
                  </div>
                  <div className="col-1">
                    <span>2</span>
                  </div>
                  <div className="col-1">
                    <span>2</span>
                  </div>
                  <div className="col-3 d-flex justify-content-between">
                    <span>32321AA15</span>
                    <CgColorPicker />
                  </div>
                </div>
                <hr />
                <div className="row py-2  px-2">
                  <div className="col-1">
                    <span>2</span>
                  </div>
                  <div className="col-4">
                    <span>4" SQ Blank Cover</span>
                  </div>
                  <div className="col-2">
                    <span>3</span>
                  </div>
                  <div className="col-1">
                    <span>3</span>
                  </div>
                  <div className="col-1">
                    <span>3</span>
                  </div>
                  <div className="col-3 d-flex justify-content-between">
                    <span>455641JJH</span>
                    <CgColorPicker />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-center gap-2 ftbtn">
          <Button
            className="bg-white text-primary closeBtn"
            onClick={props.onHide}
          >
            Close
          </Button>
          <Button className="closeBtn" onClick={props.onHide}>
            Add
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
