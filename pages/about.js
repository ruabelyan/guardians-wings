import React, { Fragment } from 'react'
import Head from 'next/head'
// components 
import Breadcumb from '../components/Breadcumb'
import Service from '../components/Service'
import About from '../components/About'
import ServiceArea from '../components/ServiceArea'
import Testmonial from "../components/Testmonial";
import TeamMember from '../components/TeamMember'
import CounterArea from '../components/CounterArea'
import BlogArea from '../components/BlogArea'
import NewsLetter from '../components/Newsletter'

const aboutText = ['Executive Event Services is proud to have been in business since 1988. This has allowed the company to gain extensive experience in managing the security, event staffing, and parking management at multiple large-scale special events and major venues throughout the country. Over the past 30+ years, EES has gained an unparalleled reputation for providing the best personalized service in the industry. This success has been achieved by providing superior supervision, requiring the proper credentials for all our personnel, and continually offering training courses for continued learning.'
]
const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'About us' }
]

const AboutPage = () => {
    return (
        <Fragment>
            <Head>
                <title>About us</title>
            </Head>
            <Breadcumb
                title="About Us"
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            {/* <Service className="bgColor" /> */}
            <About
                className="aboutAreaStyleTwo"
                title="History"
                // subTitle="We Are Expert"
                images="/images/about/1.jpg"
                videoId="XxVg_s8xAms"
                pragraphs={aboutText}
                changeOrder="changeOrder"
            />
            {/* <ServiceArea
                className="ourServiceAreaStyleTwo"
                title="PROFESSIONAL SERVICES TAILORED TO YOUR EVENT"
                // subTitle="Area Of Practice"
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
    )
}
export default AboutPage