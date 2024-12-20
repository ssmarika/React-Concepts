import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const Person1 = () => {
  const [person, setPerson] = useState([
    {
      id: 1,
      name: "Smarika",
    },
    {
      id: 2,
      name: "Smriti",
    },
    {
      id: 3,
      name: "Suyasha",
    },
  ]);
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Person list
        {person.map((item, index, array) => {
          return (
            <Stack key="item.id" direction="row" gap={10} sx={{ margin: 2 }}>
              <Typography key="item.id" variant="h5" gutterBottom>
                {item.name}
              </Typography>

              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  const itemId = item.id;
                  const newArray = person.filter((item, index, array) => {
                    return item.id !== itemId;
                  });
                  setPerson(newArray);
                }}
              >
                Delete
              </Button>
            </Stack>
          );
        })}
      </Typography>
    </Box>
  );
};

export default Person1;
