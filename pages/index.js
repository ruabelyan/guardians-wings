import React, { Fragment } from "react";
import Head from "next/head";

// components
import HeroSlider from "../components/HeroSlider";
import Service from "../components/Service";
import About from "../components/About";
import ServiceArea from "../components/ServiceArea";
import Portfolio from "../components/Portfolio";
import Testmonial from "../components/Testmonial";
import ContactArea from "../components/ContactArea";
import TeamMember from "../components/TeamMember";
import CounterArea from "../components/CounterArea";
import BlogArea from "../components/BlogArea";
import NewsLetter from "../components/Newsletter";

const aboutText = [
  "Our Los Angeles based company provides security guard services throughout Southern California with highly trained, trustworthy, and licensed security guards. Our professional security guards are licensed by the California Bureau of Security and Investigative Services (BSIS). Performing security services, we strive for growth through our training, experience, and investments in people. We provide our clients with a variety of security services at different locations, for example, on construction sites, hotels, hospitals, nursing homes, parking lots, gated communities, stores, shopping malls, and industrial facilities. It is our pleasure to partner up with clients who are looking for high quality Security Services.",
];

const portfolio = [
  {
    image: "/images/studies/1.jpg",
    title: "General Service",
    subtitle: "Corporate",
    id: 1,
  },
  {
    image: "/images/studies/2.jpg",
    title: "Personal Issue",
    subtitle: "General",
    id: 2,
  },
  {
    image: "/images/studies/3.jpg",
    title: "Business Accounting",
    subtitle: "Business",
    id: 3,
  },
  {
    image: "/images/studies/4.jpg",
    title: "Accounting issue",
    subtitle: "Criminal",
    id: 4,
  },
  {
    image: "/images/studies/5.jpg",
    title: "Business Accounting",
    subtitle: "Family Issue",
    id: 5,
  },
];

const Home = () => {
  return (
    <Fragment>
      <Head>
        <meta
          property="og:title"
          content="Guardian Wings Security"
          key="title"
        />
        <title>Home page</title>
      </Head>
      <HeroSlider />
      <Service className="bgColor" />
      <About
        title="WELCOME TO Guardian Wings Security!"
        images="/images/about/2.jpg"
        // signature="/images/about/1.png"
        pragraphs={aboutText}
      />
      <ServiceArea
        title="TOP LEVEL OF PROTECTION"
        subTitle="THE MOST WIDELY RECOGNIZED AND RESPECTED ORGANIZATION"
        className="bgWhite"
      />
      {/* <Portfolio
                title="Our Resent Case Studies"
                subTitle="Here Our Best Work"
                portfolioItem={portfolio}
            /> */}
      <TeamMember
        title="Gallery "
        // subTitle="Meet Our Experts"
        slider={true}
      />
      <Testmonial className="bgWhite" />
      <ContactArea />

      {/* <CounterArea />
            <BlogArea
                title="Latest News"
                subTitle="From Our Blog"
            /> */}
      {/* <NewsLetter /> */}
    </Fragment>
  );
};
export default Home;
