import React from "react";
import { Grid, Button, Hidden } from "@material-ui/core";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
const HeaderTop = (props) => {
  return (
    <Grid className={props.className}>
      <Grid
        container
        alignItems="center"
        className="container headerTopMainWrapper"
      >
        <Grid item sm={6} md={5} lg={5} xs={12}>
          <ul className="d-flex accountLoginArea">
            <li>
              <RoomOutlinedIcon /> California
            </li>
          </ul>
        </Grid>
        <Grid item sm={6} md={4} lg={5} xs={12}>
          <ul className="headerContact">
            <li>
              <PhoneOutlinedIcon />
              <a className='contact-telephone' href='tel:626.342.6733' title="Call us">Call Us: 626.342.6733</a>
              
            </li>
            <li>
              <QueryBuilderOutlinedIcon />
              24/7/365
            </li>
          </ul>
        </Grid>
        <Hidden smDown>
          <Grid item lg={2} md={3} xs={12} className="text-right">
            <Button
              className="btnStyle btnOutlined btnRadius"
              component="a"
              href="#"
            >
              Free Consultation
            </Button>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};
export default HeaderTop;
