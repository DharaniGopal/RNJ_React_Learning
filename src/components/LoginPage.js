import React from "react";
// import { Formik } from "formik";
import { useFormik } from "formik";
import Body from "./Body";
import { Link } from "react-router";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid Email Address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be atleast 8 characters";
  }
  return errors;
};
const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // alert("Successfully Signed Up!");
      <Link to="/Body">
        <Body />
      </Link>;
    },
  });

  console.log(formik.values);

  return (
    <div className="login-page">
      <div className="login-submit">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <span>{formik.errors.password}</span>
          ) : null}
          <button type="submit" name="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
