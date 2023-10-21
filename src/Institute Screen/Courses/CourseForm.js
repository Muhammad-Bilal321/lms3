import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { fbAdd } from "../../Config/firebaseMethod";
const CourseForm = () => {
  const [course, setCourse] = useState({
    name: "",
    duration: "",
    fee: "",
    teacher: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    fbAdd("CourseForm",course ).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    console.log(course);
  };

  return (
    <div className="text-center">
      <h2>Course Form</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Course Name"
          variant="outlined"
          className="w-50 my-4"
          name="name"
          value={course.name}
          onChange={handleChange}
        />
        <TextField
          label="Duration"
          variant="outlined"
          className="w-50 my-4"
          name="duration"
          value={course.duration}
          onChange={handleChange}
        />
        <TextField
          label="Fee"
          variant="outlined"
          className="w-50 my-4"
          name="fee"
          value={course.fee}
          onChange={handleChange}
        />
        <TextField
          label="Teacher"
          variant="outlined"
          className="w-50 my-4"
          name="teacher"
          value={course.teacher}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CourseForm;
