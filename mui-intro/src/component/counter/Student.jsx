import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Student = () => {
  const [student, setStudent] = useState({
    name: "Smarika",
    age: "22",
  });
  return (
    <Box>
      <Typography gutterBottom variant="h3">
        Name:{student.name}
      </Typography>
      <Typography gutterBottom variant="h3">
        Age:{student.age}
      </Typography>
      <TextField
        label="Name"
        onChange={(e) => {
          const name = e.target.value;
          setStudent({ ...student, name: name });
        }}
      />
      <TextField
        label="Age"
        type="number"
        onChange={(e) => {
          const age = e.target.value;
          setStudent({ ...student, age: age });
        }}
      />
    </Box>
  );
};

export default Student;
