import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { fbGet } from "../Config/firebaseMethod";
import { useParams, Link } from "react-router-dom";

export default function InstituteDetails() {
  const [formList, setFormList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = useParams();

  useEffect(() => {
    // Fetch form data for the specific shortName from Firebase.
    fbGet("Form", undefined)
      .then((forms) => {
        setFormList(forms);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching form data. Please try again later.");
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="m-2">
      <h2 className="text-center">Form Details</h2>

      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      {formList.map(
        (form, index) =>
          form.numOfCampus == id.id && (
            <div
              className="card text-center"
              key={index}
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">Form Logo</h5>
                <img
                  src={form.logoImage}
                  alt="Form Logo"
                  className="card-logo"
                />
                <h6 className="card-subtitle mb-2 text-muted">
                  <strong>Name:</strong> {form.instituteName}
                </h6>
                <p className="card-text">
                  <strong>Location:</strong> {form.location}
                </p>
                <p className="card-text">
                  <strong>Address:</strong> {form.address}
                </p>
                <p className="card-text">
                  <strong>Contact:</strong> {form.contact}
                </p>
                <p className="card-text">
                  <strong>Owner Contact:</strong> {form.ownerContact}
                </p>
                <p className="card-text">
                  <strong>User Type:</strong> {form.userType}
                </p>
                <p className="card-text">
                  <strong>Institute Type:</strong> {form.instituteType}
                </p>
                <Link to="/institute-list">
                  <Button variant="contained">Back to List</Button>
                </Link>
              </div>
            </div>
          )
      )}
    </div>
  );
}
