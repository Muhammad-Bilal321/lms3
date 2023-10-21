import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { fbAdd } from "../Config/firebaseMethod";

const InstituteForm = () => {
  const [formData, setFormData] = useState({
    instituteName: "",
    shortName: "",
    numOfCampus: 1,
    campusDetails: [],
    logoImage: null,
    userType: "Admin",
    instituteType: "School",
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const addCampus = () => {
    setFormData({
      ...formData,
      numOfCampus: formData.numOfCampus + 1,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      logoImage: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure the 'campusDetails' array contains the current campus data.
    const updatedCampusDetails = [...formData.campusDetails];
    updatedCampusDetails.push({
      location: formData.location,
      address: formData.address,
      contact: formData.contact,
      ownerContact: formData.ownerContact,
      ownerEmail: formData.ownerEmail,
      userType: formData.userType,
      instituteType: formData.instituteType,
    });

    setFormData({
      ...formData,
      campusDetails: updatedCampusDetails,
      location: "",
      address: "",
      contact: "",
      ownerContact: "",
      ownerEmail: "",
    });

    // You can now send the 'formData' to Firebase using fbAdd.
    // Make sure 'Form' in your Firebase structure accepts this kind of data.
    fbAdd("Form", formData)
      .then((res) => {
        console.log("Data sent successfully", res);
      })
      .catch((err) => {
        console.error("Error sending data", err);
      });
  };

  return (
    <form className="container text-center" onSubmit={handleSubmit}>
      <TextField
        label="Institute Name"
        fullWidth
        value={formData.instituteName}
        onChange={(e) => handleInputChange("instituteName", e.target.value)}
        margin="normal"
      />
      <InputLabel htmlFor="logoImageInput" style={{ cursor: "pointer" }}>
        <img
          src={
            formData.logoImage ? URL.createObjectURL(formData.logoImage) : "#"
          }
          alt=""
          className="w-50 my-4"
        />
        Click to choose an image
      </InputLabel>
      <TextField
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="logoImageInput"
      />
      <TextField
        label="Short Name"
        fullWidth
        value={formData.shortName}
        onChange={(e) => handleInputChange("shortName", e.target.value)}
        margin="normal"
      />
      <TextField
        label="Number of Campuses"
        type="number"
        fullWidth
        value={formData.numOfCampus}
        margin="normal"
        disabled
      />

      {/* Campus Details */}
      <div>
        <TextField
          label="Location"
          fullWidth
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          margin="normal"
        />
        <TextField
          label="Address"
          fullWidth
          value={formData.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
          margin="normal"
        />
        <TextField
          label="Contact"
          fullWidth
          value={formData.contact}
          onChange={(e) => handleInputChange("contact", e.target.value)}
          margin="normal"
        />
        <TextField
          label="Owner Contact"
          fullWidth
          value={formData.ownerContact}
          onChange={(e) => handleInputChange("ownerContact", e.target.value)}
          margin="normal"
        />
        <TextField
          label="Owner Email"
          fullWidth
          value={formData.ownerEmail}
          onChange={(e) => handleInputChange("ownerEmail", e.target.value)}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>User Type</InputLabel>
          <Select
            value={formData.userType}
            onChange={(e) => handleInputChange("userType", e.target.value)}
          >
            <MenuItem value="Teacher">Teacher</MenuItem>
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Institute Type</InputLabel>
          <Select
            value={formData.instituteType}
            onChange={(e) => handleInputChange("instituteType", e.target.value)}
          >
            <MenuItem value="School">School</MenuItem>
            <MenuItem value="College">College</MenuItem>
            <MenuItem value="University">University</MenuItem>
            <MenuItem value="Institute">Institute</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Button
        variant="outlined"
        color="primary"
        className="w-25 m-2"
        type="submit"
        onClick={addCampus}
      >
        Add Campus
      </Button>
    </form>
  );
};

export default InstituteForm;
