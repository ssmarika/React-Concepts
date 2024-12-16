import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const Actor = () => {
  const [hero, setHero] = useState([
    {
      id: 1,
      name: "Rajesh Hamal",
    },
    {
      id: 2,
      name: "Nikil Uprety",
    },
    {
      id: 3,
      name: "Biraj Bhatta",
    },
  ]);
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Hero list
        {hero.map((item, index, array) => {
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
                  const newArray = hero.filter((item, index, array) => {
                    return item.id !== itemId;
                  });
                  setHero(newArray);
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

export default Actor;
