import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, FormikConsumer } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginForm = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Login Form
      </Typography>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required()
            .trim()
            .email("It ia not a valid email"),
          password: Yup.string().required().max(64).min(8),
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
              <FormControl>
                <TextField label="email" {...formik.getFieldProps("email")} />

                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                />

                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
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

export default LoginForm;
