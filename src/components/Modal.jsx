import React from "react";

const Modal = (props) => {
  const arr = [
    "company",
    "position",
    "role",
    "level",
    "postedAt",
    "contract",
    "location",
    "languages",
  ];
  return (
    <div className="modal-container">
      {arr.map((item, index) => {
        return (
          <div key={index}>
            <h2>Input {item}</h2>
            <input
              onChange={(event) => props.addNewDataValue(event, index)}
              type="text"
            ></input>
          </div>
        );
      })}
      <br></br>
      <div className="modal-Btncontainer">
        <button className="cancel" onClick={props.hideModal}>
          X
        </button>
        <button className="apply" onClick={props.addInputData}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Modal;
