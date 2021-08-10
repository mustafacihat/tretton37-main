import React from "react";
import { useState, useEffect } from "react";
import fetchEmployees from "../../services/fetchEmployees";
import { NinjaCard } from "./NinjaCard";
import { toast } from "react-toastify";
import "./meet-us.css";
import ToolsArea from "./ToolsArea";

const MeetUsPage = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeNameFilter, setEmployeeNameFilter] = useState("");
  const [officeFilter, setOfficeFilter] = useState("");

  useEffect(() => {
    fetchEmployees(employeeNameFilter, officeFilter).then((data) =>
      setEmployees(data)
    );
  }, [employeeNameFilter, officeFilter]);

  const callBackForName = (childData) => {
    setEmployeeNameFilter(childData);
  };

  const callBackForOffice = (childData) => {
    setOfficeFilter(childData);
  };

  return (
    <>
      <ToolsArea
        callBackForName={callBackForName}
        callBackForOffice={callBackForOffice}
      />
      <div className="meet-us">
        <div className="grid">
          {employees.map((e, index) => {
            return (
              <NinjaCard
                key={index}
                name={e.name}
                office={e.office}
                gitHub={e.gitHub}
                linkedIn={e.linkedIn}
                twitter={e.twitter}
                imgUrl={e.imgUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MeetUsPage;
