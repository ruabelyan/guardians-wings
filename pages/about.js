import React, { Fragment } from "react";
import Head from "next/head";
// components
import Breadcumb from "../components/Breadcumb";
import Service from "../components/Service";
import About from "../components/About";
import ServiceArea from "../components/ServiceArea";
import Testmonial from "../components/Testmonial";
import TeamMember from "../components/TeamMember";
import CounterArea from "../components/CounterArea";
import BlogArea from "../components/BlogArea";
import NewsLetter from "../components/Newsletter";

const aboutText = [
  "Our Los Angeles based company provides security guard services throughout Southern California with highly trained, trustworthy, and licensed security guards. Our professional security guards are licensed by the California Bureau of Security and Investigative Services (BSIS). Performing security services, we strive for growth through our training, experience, and investments in people. We provide our clients with a variety of security services at different locations, for example, on construction sites, hotels, hospitals, nursing homes, parking lots, gated communities, stores, shopping malls, and industrial facilities. It is our pleasure to partner up with clients who are looking for high quality Security Services.",
];
const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "About us" }];

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <meta
          property="og:title"
          content="Armed security services"
          key="title"
        />
        <title>About us</title>
      </Head>
      <Breadcumb
        title="About Us"
        breadcumbMenu={breadcumbMenu}
        background="/images/breadcumb/1.jpg"
      />
      {/* <Service className="bgColor" /> */}
      <About
        className="aboutAreaStyleTwo"
        title="WELCOME TO Guardian Wings Security!"
        // subTitle="We Are Expert"
        images="/images/about/1.jpg"
        videoId="XxVg_s8xAms"
        pragraphs={aboutText}
        changeOrder="changeOrder"
      />
      {/* <ServiceArea
                className="ourServiceAreaStyleTwo"
                title="PROFESSIONAL SERVICES TAILORED TO YOUR EVENT"
                // subTitle="Area Of Services"
            /> */}
      {/* <Testmonial /> */}
      {/* <CounterArea
                fullWidth={true}
                className="counterAreaStyleTwo"
            /> */}
      {/* <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                slider={true}
            /> */}
      {/* <BlogArea className="blogArea"
                title="Latest News"
                subTitle="From Our Blog"
            /> */}
      {/* {/* <NewsLetter /> */}
    </Fragment>
  );
};
export default AboutPage;
