import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledSubsc } from "./sub-style";

const SubscribeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState("");

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    localStorage.setItem("Email", JSON.stringify(values));

    setIsSubmitted(true);

    resetForm();
  };

  const validation = Yup.object().shape({
    email: Yup.string().test("Validate Email", (value) => {
      const check =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return check.test(String(value).toLowerCase());
    }),
  });

  return (
    <StyledSubsc>
      {isSubmitted ? (
        <div className="subMsg">
          <h5>Thank you for subscribing!</h5>
        </div>
      ) : (
        <Formik
          initialValues={{ email: "" }}
          validation={validation}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-sub">
                <MailOutlineIcon />
                <Field
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter your email"
                  required="email"
                />
                {/* <ErrorMessage name="email" component="div" /> */}

                <button type="submit" disabled={isSubmitting}>
                  <ArrowForwardIcon />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </StyledSubsc>
  );
};

export default SubscribeForm;
