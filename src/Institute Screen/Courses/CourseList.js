import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { fbGet } from "../../Config/firebaseMethod";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    fbGet("CourseForm")
      .then((courses) => {
        setCourseList(courses);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching courses. Please try again later.");
        setLoading(false);
      });
  }, []);
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="m-2">
      <h2 className="text-center">Course List</h2>
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      {courseList.map((course, index) => (
        <div
          className="card text-center"
          key={index}
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">{course.name}</h5>
         
            <p className="card-text">
              <strong>Fee:</strong> {course.fee}
            </p>
            <p className="card-text">
              <strong>Duration:</strong> {course.duration}
            </p>
            <Button variant="contained" onClick={handleClick}>
              More Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
