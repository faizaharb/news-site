import React from 'react';
import style from './Toggle.module.css'

export default function Toggle() {
    return (
        <>
            <button className={ `navbar-toggler ${ style.btnShadow }` } type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars text-white"></span>
            </button>
        </>
    )
}
