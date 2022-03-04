import React, { Fragment } from 'react'
import Head from 'next/head'
// components 
import HeroSlider from '../components/HeroSlider'
import Service from '../components/Service'
import About from '../components/About'
import ServiceArea from '../components/ServiceArea'
import Portfolio from '../components/Portfolio'
import Testmonial from "../components/Testmonial";
import ContactArea from '../components/ContactArea'
import TeamMember from '../components/TeamMember'
import CounterArea from '../components/CounterArea'
import BlogArea from '../components/BlogArea'
import NewsLetter from '../components/Newsletter'

const aboutText = ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at', ' Our management team has a strong background in law enforcement, business management, specialized event security consulting and designing customized access control plans. Our philosophy of striving for continual excellence has given us the opportunity to build strong relationships with operators of major venues including baseball, football, basketball, soccer, colleges, universities, and many different convention centers. We have also played an integral role in the planning and development for the security, access control programs, and traffic management for many different special events including music festivals, professional golf, tennis, surfing, cycling, marathons, action sports, trade shows and conventions. Each one of our clients will substantiate the fundamental qualities of honesty and moral integrity that are constant and essential to the operating philosophy of Executive Event Services.'
]

const portfolio = [
    {
        image: '/images/studies/1.jpg',
        title: 'General Service',
        subtitle: 'Corporate',
        id: 1
    },
    {
        image: '/images/studies/2.jpg',
        title: 'Personal Issue',
        subtitle: 'General',
        id: 2
    },
    {
        image: '/images/studies/3.jpg',
        title: 'Business Accounting',
        subtitle: 'Business',
        id: 3
    },
    {
        image: '/images/studies/4.jpg',
        title: 'Accounting issue',
        subtitle: 'Criminal',
        id: 4
    },
    {
        image: '/images/studies/5.jpg',
        title: 'Business Accounting',
        subtitle: 'Family Issue',
        id: 5
    }
]
const HomePageTwo = () => {
    return (
        <Fragment>
            <Head>
                <title>Home page two</title>
            </Head>
            <HeroSlider
                className="heroSliderAreaStyleTwo" />
            <Service className="serviceAreaStyleTwo" />
            <About
                className="aboutAreaStyleTwo"
                title="Why You Need Us"
                subTitle="We Are Expert"
                images="/images/about/1.jpg"
                videoId="XxVg_s8xAms"
                pragraphs={aboutText}
                changeOrder="changeOrder"
            />
            <ServiceArea
                className="ourServiceAreaStyleTwo"
                title="How Can We Help You"
                subTitle="Area Of Practice"
            />
            {/* <Portfolio
                title="Our Resent Case Studies"
                subTitle="Here Our Best Work"
                portfolioItem={portfolio}
            /> */}
            <Testmonial />
            <ContactArea />
            <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                slider={true}
            />
            {/* <CounterArea /> */}
            {/* <BlogArea
                className="blogArea"
                title="Latest News"
                subTitle="From Our Blog
                "
            /> */}
            {/* <NewsLetter /> */}
        </Fragment>
    )
}
export default HomePageTwo