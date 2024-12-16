import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFullName } from "../../utils/function";

const Person = () => {
  const [firstName, setFirstName] = useState("Siddhant");
  const [lastName, setLastName] = useState("Shrestha");
  const [collegeName, setCollegeName] = useState("KEC");

  return (
    <Box>
      <Typography> Name:{getFullName(firstName, lastName)}</Typography>
      <Typography>College:{collegeName}</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          setFirstName("Saugat");
          setLastName("Neupane");
        }}
      >
        Change Name
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          //both the functions are executed at once
          // ! concept of auto batching
          setFirstName("Siddhant");
          setLastName("Shrestha");
        }}
      >
        Reset Name
      </Button>
    </Box>
  );
};

export default Person;
