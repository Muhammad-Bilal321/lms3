import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { fbGet } from "../Config/firebaseMethod";
import { useNavigate, useParams } from "react-router-dom";

const InstituteList = () => {
  const [formList, setFormList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    fbGet("Form")
      .then((forms) => {
        setFormList(forms);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching courses. Please try again later.");
        setLoading(false);
      });
  }, []);
  const handleClick = (numOfCampus) => {
    navigate(`/institute-details/${numOfCampus}`);
  };

  return (
    <div className="m-2">
      <h2 className="text-center">Form List</h2>
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      {formList.map((form, index) => (
        <div
          className="card text-center"
          key={index}
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">{form.logoImage}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <strong>Name:</strong> {form.shortName}
            </h6>
            <p className="card-text">
              <strong>Location:</strong> {form.location}
            </p>
            <p className="card-text">
              <strong>Contact:</strong> {form.contact}
            </p>
            <Button
              variant="contained"
              onClick={() => handleClick(form.numOfCampus)}
            >
              More Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstituteList;
