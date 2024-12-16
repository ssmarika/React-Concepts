import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("Red");

  return (
    <Box>
      <Typography gutterBottom variant="h4">
        Color: {color}
      </Typography>

      <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            setColor("Red");
          }}
        >
          Red
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setColor("Blue");
          }}
        >
          Blue
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setColor("Green");
          }}
        >
          Green
        </Button>
      </section>
    </Box>
  );
};

export default Color;
