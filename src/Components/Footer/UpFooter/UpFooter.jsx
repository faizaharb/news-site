import React from 'react';
import LeftSide from '../../Navbar/LiftSide/LeftSide';
import style from './UpFooter.module.css';

export default function UpFooter() {
    return (
        <>
            <div className={ `text-white ${ style.bgStyleColor } py-5` }>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-4">
                            <div className="aboutSite">
                                <LeftSide />
                                <p className='py-3 lh-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni earum reprehenderit sapiente sit ut natus voluptatibus totam minima corporis cumque expedita eum, quos nam soluta.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="categorey">
                                <h4 className='text-capitalize'>categories</h4>
                                <hr className='my-3' />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact">
                                <h4 className='text-capitalize'>contact us</h4>
                                <hr className='my-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
