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

const RegistrationForm = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Registration Form
      </Typography>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          email: "",
          contact: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required().trim().max(50),
          lastName: Yup.string().required().trim().max(50),
          address: Yup.string().required().trim().max(250),
          email: Yup.string().required().trim().max(100).email(),
          contact: Yup.number().required(),
        })}
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
              <FormControl
                sx={{ display: "flex", flexDirection: "row", gap: 1 }}
              >
                <FormControl>
                  <TextField
                    label="First Name"
                    {...formik.getFieldProps("firstName")}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <FormHelperText error>
                      {formik.errors.firstName}
                    </FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl>
                  <TextField
                    label="Last Name"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <FormHelperText error>
                      {formik.errors.lastName}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </FormControl>

              <FormControl>
                <TextField
                  label="Address"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address ? (
                  <FormHelperText error>{formik.errors.address}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Email Address"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Contact Number"
                  {...formik.getFieldProps("contact")}
                />
                {formik.touched.contact && formik.errors.contact ? (
                  <FormHelperText error>{formik.errors.contact}</FormHelperText>
                ) : null}
              </FormControl>

              <Button variant="contained" type="submit" color="success">
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default RegistrationForm;
