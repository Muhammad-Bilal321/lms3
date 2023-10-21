import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

const StudentsList = () => {
  // Fetch the list of students from your data source
  const students = [
    /* List of students goes here */
  ];

  return (
    <div>
      <h2>Students List</h2>
      <List>
        {students.map((student, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText
                primary={student.name}
                secondary={`Father: ${student.fatherName}, Course: ${student.course}`}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default StudentsList;
