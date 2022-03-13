import React from 'react';
import LeftSide from '../LiftSide/LeftSide';
import Links from '../RightSide/Links/Links';
import Toggle from '../RightSide/ToggleBtn/Toggle';
import style from './Nav.module.css'

export default function Nav() {
    return (
        <>
            <nav className={ `navbar navbar-expand-lg navbar-light fixed-top w-100 ${ style.navBg }` }>
                <div className="container">
                    <LeftSide />
                    <Toggle />
                    <Links />
                </div>
            </nav>
        </>
    )
}
