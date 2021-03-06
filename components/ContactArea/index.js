import React from "react";
import Form from "../Form";
import { Parallax } from "react-parallax";
import { Grid } from "@material-ui/core";
const ContactArea = ({ className = "" }) => {
  return (
    <Parallax
      bgImage="/images/contact/1.jpg"
      bgImageAlt="the cat"
      contentClassName={`contactArea ${className}`}
      strength={200}
    >
      <Grid container spacing={4} className="container">
        <Grid item lg={5} xs={12}>
          <Grid className="contactInfo">
            <span>For Our Honorabe Clients</span>
            <h2>Free Consulting</h2>
            <h6>Call us 24/7 at (626) 342-6733 or fill out the form.</h6>
          </Grid>
        </Grid>
        <Grid item lg={7} xs={12}>
          <Form />
        </Grid>
      </Grid>
    </Parallax>
  );
};
export default ContactArea;
