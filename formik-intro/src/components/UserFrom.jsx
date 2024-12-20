import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const UserFrom = () => {
  return (
    <Box>
      <Typography variant="h3">User Form</Typography>

      <Formik
        initialValues={{ name: "", age: 1, address: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is required")
            .trim()
            .max(55, "Cannot be more than 55 character"),
          age: Yup.number().required("Age is required").max(120).positive(),
          address: Yup.string()
            .required("Address is required")
            .trim()
            .max(250, "Cannot be more than 250 character"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                border: "1px solid black",
                padding: "1rem",
                minWidth: "400px",
              }}
            >
              {/* form control is a div */}
              <FormControl>
                <TextField
                  label="Name"
                  {...formik.getFieldProps("name")}
                ></TextField>

                {/* to show error message */}
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Age"
                  {...formik.getFieldProps("age")}
                ></TextField>

                {/* to show error message */}
                {formik.touched.name && formik.errors.age ? (
                  <FormHelperText error>{formik.errors.age}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Address"
                  {...formik.getFieldProps("address")}
                ></TextField>

                {/* to show error message */}
                {formik.touched.name && formik.errors.address ? (
                  <FormHelperText error>{formik.errors.address}</FormHelperText>
                ) : null}
              </FormControl>

              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default UserFrom;
