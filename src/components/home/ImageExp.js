import { Button } from 'antd';
import { Card } from 'antd';
import React from 'react'
import Water from "../../images/water.jpg"

const { Meta } = Card;

export const ImageExp = () => {
    return (
        <div>
            <div>
                <img className='img-fluid' src={Water} alt='water Image'></img>
                <div className="text-center oliveGreen  p-4">
                    <h6 className=' text-white pb-2'>hhdhksh hiuhashd ashi hsiah hci sichsicishc ich uihcius cuishch chs csuichs cihsichiusc chciuhscis cisc suchsc sihc ciushc sc sichwchihc sshcsidc wichuhc schsich wichsjhcsdc sduicgiusc s ciushciuds c suc ihcuidhc wuichsdc s cs cisjc uidhci chisddhcc iushicu jsbckbc ui</h6>
                    <Button
                        type="primary"
                        size="large"
                        className="bg-white border border-none hover-none text-black"
                    // disabled={!cart.length}
                    >Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
}
