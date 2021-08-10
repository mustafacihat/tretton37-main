import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import fetchEmployees from "../../services/fetchEmployees";
import "./tools-area.css";

const ToolsArea = (props) => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");

  const handleNameChange = (event) => {
    let nameFilter = event.target.value;
    setName(nameFilter);
    props.callBackForName(nameFilter);
  };

  const handleOfficeChange = (event) => {
    let officeFilter = event.target.value;
    setOffice(officeFilter);
    props.callBackForOffice(officeFilter);
  };

  return (
    <>
      <div className="area grid-filter">
      <div className="filter-by-name-card">
          <h4>Filter by Name</h4>
          <input
            type="text"
            name="filter-by-name"
            placeholder="Search Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="filter-by-name-card" onChange={handleOfficeChange}>
          <h4>Filter by Office</h4>
          <input type="radio" value="" name="filter-by-office" defaultChecked />
          All
          <input type="radio" value="Borlänge" name="filter-by-office" />
          Borlänge
          <input type="radio" value="Lund" name="filter-by-office" />
          Lund
          <input type="radio" value="Helsingborg" name="filter-by-office" />
          Helsingborg
          <input type="radio" value="Stockholm" name="filter-by-office" />
          Stockholm
        </div>
      </div>
    </>
  );
};

export default ToolsArea;
