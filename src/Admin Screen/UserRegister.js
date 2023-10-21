import React, { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Typography,
} from "@mui/material";
import ActivationPaymentDetails from "./ActivationPaymentDetails ";

const UserRegister = () => {
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
    cnic: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserRegister({ ...userRegister, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userRegister);
  };

  return (
    <Container maxWidth="sm" className="mt-4">
      <Typography variant="h4" align="center" gutterBottom>
        <b> User Registration</b>
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={userRegister.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={userRegister.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={userRegister.password}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="cnic"
          label="CNIC"
          variant="outlined"
          type="text"
          name="cnic"
          value={userRegister.cnic}
          onChange={handleChange}
          margin="normal"
          maxLength="15"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="user-type-label">User Type</InputLabel>
          <Select
            labelId="user-type-label"
            id="user-type"
            name="type"
            value={userRegister.type}
            onChange={handleChange}
            label="User Type"
          >
            <MenuItem value={"Admin"}>Admin</MenuItem>
            <MenuItem value={"Student"}>Student</MenuItem>
            <MenuItem value={"Teacher"}>Teacher</MenuItem>
            <MenuItem value={"Institute"}>Institute</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>
      <div className="my-5">
        <ActivationPaymentDetails />
      </div>
    </Container>
  );
};

export default UserRegister;
