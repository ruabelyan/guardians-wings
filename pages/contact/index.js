import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import Head from 'next/head'
import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import Form from '../../components/Form'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Contact', },
]

const Contact = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact us</title>
            </Head>
            <Breadcumb
                className="breadcumbArea"
                title="Contact"
                breadcumbMenu={breadcumbMenu} 
                background="/images/breadcumb/1.jpg" 
            />
  
            <Grid className="contactusPageArea">
                <Grid container spacing={4} className="container">
                    <Grid item md={7} xs={12}>
                        <Grid className="contactUsInfo">
                            <h3>Our Contacts</h3>
                            <p>Guardian Wings, we're here to serve you, be it online, over the phone, or in person. Call or email us with any questions, or use the form at the bottom of the page to contact us directly
                                </p>
                            {/* <h4>Address</h4>
                            <span>245 King Street, Touterie Victoria 8520 Australia</span> */}
                            <h4>Phone</h4>
                            <span>626.342.6733</span>
                            <h4>Email</h4>
                            <span>guardianwingsps@gmail.com</span>
                        </Grid>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Grid className="contactUSForm">
                            <h3>Quick Contact Form</h3>
                            <Form
                                addressInfo={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* <NewsLetter /> */}
        </Fragment>
    )
}
export default Contact