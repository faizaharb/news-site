import React from 'react';
import All from '../All/All';
import Business from '../Business/Business';
import Entertainment from '../Entertainment/Entertainment';
import FooterSec from '../Footer/FooterSec/FooterSec';
import General from '../General/General';
import Health from '../Health/Health';
import Science from '../Science/Science';
import Sports from '../Sports/Sports';
import Technology from '../Technology/Technology';



export default function Home() {

    return (
        <>
            <All />
            <Business />
            <Entertainment />
            <Health />
            <Science />
            <Sports />
            <Technology />
            <General />
            <FooterSec />
        </>
    )
}
