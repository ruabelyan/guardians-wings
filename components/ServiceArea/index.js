import React from "react";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { Parallax } from "react-parallax";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import AccessibilityTwoToneIcon from "@material-ui/icons/AccessibilityTwoTone";
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";
import HomeWorkTwoToneIcon from "@material-ui/icons/HomeWorkTwoTone";
import CastForEducationTwoToneIcon from "@material-ui/icons/CastForEducationTwoTone";
import SectionTitle from "../Title";

const services = [
  {
    icon: <PeopleAltTwoToneIcon />,
    title: "Armed security services",
    content: (
      <>
        Armed security guards are highly trained individuals working in a role
        of immense responsibility. Many are current or ex-military/law
        enforcement officers:
      </>
    ),
    id: 1,
  },
  {
    icon: <PermIdentityTwoToneIcon />,
    title: "Unarmed security services",
    content:
      "Are you unsure if armed or unarmed security guards are right for your business? We know that deciding on a security service is a big decision.  ",
    id: 2,
  },
  {
    icon: <AccessibilityTwoToneIcon />,
    //change to the text
    title: "Mobile Patrol security",
    content:
      "Whether you need to secure an office building, a mall, or a warehouse, you can depend on our mobile patrol units to patrol the premises on foot and with vehicle securing sites",
    id: 3,
  },
  {
    icon: <AssignmentIndTwoToneIcon />,
    title: "Bodyguard services",
    content:
      "If you’re a VIP, executive, celebrity, rapper, artist, politician, banker or just looking for personal protection and are looking to hire a bodyguard, Fast Guardian wings security offers the expertise.",
    id: 4,
  },
  // {
  //     icon: <CastForEducationTwoToneIcon />,
  //     title: 'Patrol Division',
  //     content: 'he uniformed Patrol Division is the most highly visible component of the department. Working 24 hours a day, seven days a week, the Patrol Division represents the bulk of the department’s staffing.',
  //     id: 5
  // },
  // {
  //     icon: <HomeWorkTwoToneIcon />,
  //     title: 'Real Estate Law',
  //     content: 'It is a long established fact that a reader will be distracted by the readable content of ',
  //     id: 6
  // },
];

const ServiceArea = ({ className = "", title, subTitle }) => {
  return (
    <Parallax
      bgImage="/images/practice/1.jpg"
      bgImageAlt="the cat"
      contentClassName={`ourServiceArea ${className}`}
      strength={200}
    >
      <Grid container spacing={4} className="container">
        <Grid item xs={12}>
          <SectionTitle title={title} subTitle={subTitle} />
        </Grid>
        {services.map((service, index) => (
          <Grid item xs={12} lg={4} sm={6} key={index}>
            <Grid className="serviceWrap">
              <Grid className="serviceIcon">{service.icon}</Grid>
              <Grid className="serviceContent">
                <h3>
                  <a>{service.title}</a>
                </h3>
                <p>{service.content}</p>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Parallax>
  );
};
export default ServiceArea;
