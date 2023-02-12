import React from "react";
import "./AccContainer.scss";
import Accordian from "../Accordian/Accordian";
import questions from "../../data";

const AccContainer = () => {
  return (
    <div className="accContainer">
      <h2>Explore options near me</h2>
      {questions.map((question) => (
        <Accordian question={question} key={question.id} />
      ))}
    </div>
  );
};

export default AccContainer;