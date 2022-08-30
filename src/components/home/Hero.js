import { Button, Card } from 'antd';
import React, { useState } from 'react'

import { DownloadOutlined } from '@ant-design/icons';

const { Meta } = Card;




const Hero = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className=''>

            <div >
                <div className="jumbotron jumbotron2 jumbotron-fluid">
                    <div className='container'>
                        <div className='row '>
                            <div className="pt-5 col-12 col-md-7">
                                <p className="heroText ml-96 ml-md-auto">We Find <spam className="textGreen ">Best <br></br>Water </spam>for You.</p>
                                <h6 className="">This is a modified jumbotron that occupies the entire horizontal <br></br> space of its parent jumbotron that occupies the.</h6>
                                <div className='pt-2'>
                                    <Button
                                        type="primary"
                                        size="large"
                                        className="oliveGreen border border-none hover-none"
                                        icon={<DownloadOutlined />}
                                    // disabled={!cart.length}

                                    >
                                        Proceed to Checkout
                                    </Button>
                                 
                                </div>
                            </div>
                            <div className='col-5 hidden d-none d-md-block'>
                                <div className='d-flex'>
                                    <div
                                        hoverable
                                        style={{ width: 120 }}
                                        className="p-1"

                                    >
                                        <img alt="example" src="https://images.unsplash.com/photo-1631201553014-776760c89381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGVyJTIwYm90dGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                        <div><h5>sdsdsdsd</h5><p className='text-dark'>sdsdsdsd</p></div>
                                    </div>
                                    <div className='pt-5 d-flex'>
                                        <div
                                            hoverable
                                            style={{ width: 120 }}
                                            className="ml-5 mt-5 p-1"

                                        >
                                            <img alt="example" src="https://images.unsplash.com/photo-1631201553014-776760c89381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGVyJTIwYm90dGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                            <div><h5>sdsdsdsd</h5><p className='text-dark'>sdsdsdsd</p></div>
                                        </div>
                                        <div
                                            hoverable
                                            style={{ width: 120 }}
                                            className="ml-5 p-1"
                                        >
                                            <img alt="example" src="https://images.unsplash.com/photo-1631201553014-776760c89381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGVyJTIwYm90dGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                            <div><h5>sdsdsdsd</h5><p className='text-dark'>sdsdsdsd</p></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >

    )
}

export default Hero