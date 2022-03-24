import React from 'react';
import LeftSide from '../../Navbar/LiftSide/LeftSide';
import style from './UpFooter.module.css';
import Categories from '../../Category/Categories';
import Contact from '../../Contact/Contact';

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
                            <Categories />
                        </div>
                        <div className="col-md-4">
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
