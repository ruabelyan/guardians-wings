import React from 'react'
import { Parallax } from 'react-parallax';
import { Grid } from '@material-ui/core'
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';

const services = [
    {
        icon: <PersonOutlineTwoToneIcon />,
        // subtitle: 'Book Your',
        title: 'GUARD SECURITY SERVICES',
        text: 'Whether you need Armed or Unarmed Security Officers for a small business or major corporation, we can meet all your security needs.'
    },
    {
        icon: <HourglassFullTwoToneIcon />,
        // subtitle: 'OUR SECURITY OFFICERS',
        title: 'OUR SECURITY OFFICERS',
        text: 'Our Security Officers are trained and licensed and meet all state requirements set by the California Bureau of Security.'
    },
    {
        icon: <PeopleAltTwoToneIcon />,
        // subtitle: 'You Can Easily',
        title: 'MANAGEMENT TEAM',
        text: 'Our management team works directly with each client to provide a custom-tailored security program to meet all requirements.'
    },
]
const Service = ({ className = '' }) => {
    return (
        <Parallax
            bgImage="/images/services/1.jpg"
            bgImageAlt="the cat"
            contentClassName={`serviceArea ${className}`}
            strength={200}>
            <Grid container spacing={4} className="container">
                {services.map((service, i) => (
                    <Grid item md={4} sm={6} xs={12} key={i}>
                        <Grid className="serviceItem">
                            <Grid className="serviceIcon">
                                {service.icon}
                            </Grid>
                            <Grid className="serviceText">
                                <span>{service.subtitle}</span>
                                <h4>{service.title}</h4>
                            </Grid>
                            <Grid className="serviceTexts">
                                {service.text}

                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Parallax>
    )
}
export default Service