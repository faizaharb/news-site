import React from 'react';
import style from './DownFooter.module.css';

export default function DownFooter() {
    return (
        <>
            <div className={ `${ style.bgStyling } text-white py-2` }>
                <div className="container">
                    <div className="row">
                        <p className={ `${ style.deleteMargin } text-capitalize text-center` }>copyright &copy; 2022</p>
                    </div>
                </div>
            </div>
        </>
    )
}
