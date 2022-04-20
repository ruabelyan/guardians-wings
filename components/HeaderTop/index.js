import React from "react";
import { Grid, Button, Hidden } from "@material-ui/core";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const HeaderTop = (props) => {
  return (
    <Grid className={props.className}>
      <Grid
        container
        alignItems="center"
        className="container headerTopMainWrapper"
      >
        <Grid item sm={6} md={5} lg={3} xs={12}>
          <ul className="d-flex accountLoginArea">
            <li style={{ marginRight: "35px" }}>
              <RoomOutlinedIcon /> California
            </li>
            <li>
              <span style={{ marginRight: "5px", minWidth: "65px" }}>
                Follow us
              </span>
              <a
                target="_blank"
                href="https://www.facebook.com/Guardian-Wings-Security-106671495301660/?ref=pages_you_manage"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/guardianwings.security?utm_medium=copy_link"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </Grid>

        <Grid item sm={6} md={4} lg={7} xs={12}>
          <ul className="headerContact">
            <li>
              <PhoneOutlinedIcon />
              <a
                className="contact-telephone"
                href="tel:(626) 342-6733"
                title="Call us"
              >
                Call Us: (626) 342-6733
              </a>
            </li>
            <li>
              <QueryBuilderOutlinedIcon />
              24/7/365
            </li>
          </ul>
        </Grid>
        <Hidden smDown>
          <Grid item lg={2} md={3} xs={12} className="text-right">
            <Link href="/contact">
              <Button className="btnStyle btnOutlined btnRadius" component="a">
                Free Consultation
              </Button>
            </Link>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};
export default HeaderTop;
