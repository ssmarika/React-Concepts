import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Animal = () => {
  const [firstName, setFirstName] = useState("Smarika");
  const [lastName, setLastName] = useState("Shrestha");

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 5 }}>
        <Typography variant="h2" gutterBottom>
          {firstName}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {lastName}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 5 }}>
        <TextField
          label="First Name..."
          color="success"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />

        <TextField
          label="Last Name..."
          color="success"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </Box>
    </Box>
  );
};

export default Animal;
