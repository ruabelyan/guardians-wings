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

const aboutText = ['Octavian continue to be one of the most innovative and progressive security-led businesses in the world, with our broad spectrum of services helping organisations to better manage their security solutions.We have also diversified into facilities management functions, as we see these as exciting growth areas for our business that offer great synergy to our clients’ operational requirements. Our success underpins our determination to continuously improve our services and ensure even greater flexibility and quality assurance for our clients. Whatever the issues you face, we will find solutions, working as your reliable partner.'
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


const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Home page</title>
            </Head>
            <HeroSlider />
            {/* <Service className="bgColor" /> */}
            <About
                title="About Us"
                images="/images/about/2.jpg"
                signature="/images/about/1.png"
                pragraphs={aboutText}
            />
            <ServiceArea
                title="How Can We Help You"
                subTitle="Area Of Practice"
                className="bgWhite"
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
                title="Latest News"
                subTitle="From Our Blog"
            /> */}
            {/* <NewsLetter /> */}
        </Fragment>
    )
}
export default Home