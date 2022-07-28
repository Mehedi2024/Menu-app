import React from "react";

const Catagories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("all");
        }}
      >
        all
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("breakfast");
        }}
      >
        Breakfast
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("lunch");
        }}
      >
        lunch
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("shakes");
        }}
      >
        shakes
      </button>
    </div>
  );
};

export default Catagories;
