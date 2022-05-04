import React from "react";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const footerLinks = [
  {
    title: "Navigation",
    menus: [
      { name: "Home", route: "/" },
      { name: "About", route: "/about" },
      { name: "Services", route: "/services" },
      { name: "Contact", route: "/contact" },
    ],
  },
  {
    title: "Services",
    menus: [
      { name: "Armed security services", route: "/" },
      { name: "Unarmed security services", route: "/" },
      { name: "Bodyguard services", route: "/" },
      { name: "Patrol Division services", route: "/" },
    ],
  },
  {
    title: "Contact Us",
    menus: [
      { name: "Phone: 626.342.6733" },
      { name: "Email: guardianwingsps@gmail.com" },
    ],
  },
];

const FooterArea = () => {
  return (
    <footer className="footerArea">
      <Grid className="footerTopArea">
        <Grid container spacing={3} className="container">
          <Grid item lg={3} sm={6} xs={12}>
            <Grid className="footerLogo">
              <Link href="/">
                <a>
                  <img
                    style={{ objectFit: "contain" }}
                    src="/images/logo/logo4.png"
                    alt="logo"
                  />
                </a>
              </Link>
              {/* <p>
                Octavian continue to be one of the most innovative and
                progressive security-led businesses in the world.
              </p> */}
            </Grid>
          </Grid>
          {footerLinks.map((menu, i) => (
            <Grid key={i} item lg={3} sm={6} xs={12}>
              <div className="footerWrap">
                <h3>{menu.title}</h3>
                <ul>
                  {menu.menus.map((item, i) => (
                    <li key={i}>
                      {item.route ? (
                        <Link href={item.route}>
                          <a>{item.name}</a>
                        </Link>
                      ) : (
                        `${item.name}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid className="footerBottomArea">
        <Grid container spacing={3} className="container">
          <Grid item md={8} sm={10} xs={12}>
            {/* <span>Privacy Policy | © 2020 Barristar. All rights reserved</span> */}
            <span>Copyright © 2022 CA State License - 10087</span>
          </Grid>
          {/* <Grid item md={4} sm={2} xs={12}>
            <ul className="socialListFooter">
              <li>
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
          </Grid> */}
        </Grid>
      </Grid>
    </footer>
  );
};
export default FooterArea;
