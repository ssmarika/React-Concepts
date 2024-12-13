import { Button } from "@mui/material";
import "./button.style.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CustomButton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <section id="variant" className="button-section">
        <h1>Button Variant</h1>
        <Button variant="text">Send</Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Message</Button>
      </section>

      <section id="color" className="button-section">
        <h1>Button colour</h1>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="error" variant="contained">
          Error
        </Button>
        <Button color="info" variant="contained">
          info
        </Button>
        <Button color="inherit" variant="contained">
          inherit
        </Button>
        <Button color="warning" variant="contained">
          warning
        </Button>
      </section>

      <section className="button-section">
        <h1>Button Size</h1>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </section>

      <section className="button-section">
        <h1>Icon Button</h1>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Delete Product
        </Button>
        <Button variant="outlined" color="success" endIcon={<EditIcon />}>
          Edit Product
        </Button>
      </section>
    </div>
  );
};

export default CustomButton;
