import React, { Fragment } from 'react'
import Head from 'next/head'
// components 
import Breadcumb from '../../components/Breadcumb'
import Service from '../../components/Service'
import ServiceArea from '../../components/ServiceArea'
import Testmonial from "../../components/Testmonial";
import PricingTable from "../../components/PricingTable";
import NewsLetter from '../../components/Newsletter'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Services area' }
]

const Services = () => {
    return (
        <Fragment>
            <Head>
                <title>Services</title>
            </Head>
            {/* <Breadcumb
                title="PROFESSIONAL SERVICES TAILORED TO YOUR EVENT"
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            /> */}
            {/* <Service className="bgColor" /> */}
            {/* <ServiceArea
                className="ourServiceAreaStyleThree bgFFF"
                title="Armed Security Guards"
                subTitle="Area Of Services"
            /> */}
             <ServiceArea
                className="ourServiceAreaStyleTwo"
                title="PROFESSIONAL SERVICES TAILORED TO YOUR EVENT"
                // subTitle="Area Of Services"
            />
            {/* <PricingTable
                title="Pricing Table"
                subTitle="Our Pricing Plan"
            /> */}
            {/* <Testmonial
                className="pt100"
            /> */}
            {/* <NewsLetter /> */}
        </Fragment>
    )
}
export default Services