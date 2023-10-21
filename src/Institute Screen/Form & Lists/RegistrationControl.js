import React, { useState } from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

const RegistrationControl = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div>
      <h2>Registration Control</h2>
      <List component="nav">
        <ListItemButton onClick={toggleForm}>
          <ListItemText primary="Form open/close" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Courses" />
        </ListItemButton>
      </List>
      {isFormOpen && (
        <div>{/* Include the form component here when it's open */}</div>
      )}
    </div>
  );
};

export default RegistrationControl;
