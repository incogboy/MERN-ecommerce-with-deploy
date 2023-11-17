import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi'

const Contact = () => {
    return (
        <Layout title={'Contact Us'}>
            <div className='row contactus'>
                <div className='col-md-6'>
                    <img src='/images/contactus.jpeg' alt='contactus' style={{ width: '100%' }} />
                </div>
                <div className='col-md-4'>
                    <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
                    <p className='text-justify mt-2'> any query and info about product feel free to call anytime we 24x7 available</p>
                    <p className='mt-3'><BiMailSend /> : incogboy@gmail.com</p>
                    <p className='mt-3'><BiPhoneCall /> : +62-856-9398-7919</p>
                    <p className='mt-3'><BiSupport /> : +21-21-634-8727</p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact