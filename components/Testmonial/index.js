import React from "react";
import Slider from "react-slick";
import { Grid } from '@material-ui/core'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { Parallax } from "react-parallax";
import SectionTitle from "../Title";
import PresentToAllTwoTone from "@material-ui/icons/PresentToAllTwoTone";
import Slideshow from "@material-ui/icons/GradeRounded";
import AccessibilityTwoToneIcon from "@material-ui/icons/ControlPoint";
import AssignmentIndTwoToneIcon from "@material-ui/icons/Fireplace";
import CastForEducationTwoToneIcon from "@material-ui/icons/BusinessSharp";
import HomeWorkTwoToneIcon from "@material-ui/icons/GroupWorkSharp";


// const sliders = [
//     {
//         text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
//         images: '/images/testimonial/2.png',
//         title: 'Jhony Goaver',
//         subTitle: 'CEO of American BDS'
//     },
//     {
//         text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
//         images: '/images/testimonial/2.png',
//         title: 'Jhony Goaver',
//         subTitle: 'CEO of American BDS'
//     }
// ]
const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
const services = [
    {
        icon: <PresentToAllTwoTone />,
        title: "LOSS PREVENTION",
        id: 1,
    },
    {
        icon: <Slideshow />,
        title: "PROPERTY PROTECTION",
        id: 2,
    },
    {
        icon: <AccessibilityTwoToneIcon />,
        title: "CONTROL SYSTEMS",
        id: 3,
    },
    {
        icon: <AssignmentIndTwoToneIcon />,
        title: "FIRE PROTECTION",
        id: 4,
    },
    {
        icon: <CastForEducationTwoToneIcon />,
        title: 'BUSINESS PROTECTION',
        id: 5
    },
    {
        icon: <HomeWorkTwoToneIcon />,
        title: 'PHYSICAL GUARDING',
        id: 6
    },
];


const Testmonial = ({ className = '', title, subTitle }) => {
    return (
        <Parallax
            bgImage="/images/practice/1.jpg"
            bgImageAlt="the cat"
            contentClassName={`ourServiceArea ${className}`}
            strength={200}
        >
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle title={'SECURITY GUARD SERVICES BY BEST SECURITY COMPANY'} />
                </Grid>
                {services.map((service, index) => (
                    <Grid item xs={12} lg={4} sm={6} key={index}>
                        <Grid className="serviceWrap">
                            <Grid style={{ borderRadius: '2px' }} className="serviceIcon customSvgSize">{service.icon}</Grid>
                            <Grid className="serviceContent serviceContentCustom">
                                <h4>
                                    <a>{service.title}</a>
                                </h4>
                                <p>{service.content}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Parallax>
    )
}
export default Testmonial