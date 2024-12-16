import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

// hooks=> react functions which has specific task
// example => useState, useEffect, useRef, useCallback, useMemo
// third-party hooks => redux => useSelector, useDispatch
// router => useNavigate

// ? event
// ? onClick, onChange, onPress, onSubmit, onScroll

//useState is a function that returns a array of size 2
// the first element of the array holds the value while the second element is the function that changes the state of that value

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <Box>
      <Typography gutterBottom variant="h3">
        This is a counter app.
      </Typography>
      <Typography gutterBottom variant="h3">
        Counter:{count}
      </Typography>
      <section style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        <Button
          color="success"
          variant="outlined"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase Count
        </Button>

        <Button
          color="error"
          variant="outlined"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease Count
        </Button>

        <Button
          color="error"
          variant="outlined"
          onClick={() => {
            setCount(0);
          }}
        >
          Clear Count
        </Button>
      </section>
    </Box>
  );
};

export default Counter;
