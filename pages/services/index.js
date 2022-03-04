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
    { name: 'Practice area' }
]

const Practice = () => {
    return (
        <Fragment>
            <Head>
                <title>Practice</title>
            </Head>
            <Breadcumb
                title="PROFESSIONAL SERVICES TAILORED TO YOUR EVENT"
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            {/* <Service className="bgColor" /> */}
            {/* <ServiceArea
                className="ourServiceAreaStyleThree bgFFF"
                title="Armed Security Guards"
                subTitle="Area Of Practice"
            /> */}
             <ServiceArea
                className="ourServiceAreaStyleTwo"
                title="PROFESSIONAL SERVICES TAILORED TO YOUR EVENT"
                // subTitle="Area Of Practice"
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
export default Practice