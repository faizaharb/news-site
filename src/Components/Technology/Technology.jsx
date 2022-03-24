import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FooterSec from '../Footer/FooterSec/FooterSec';
import style from './Technology.module.css';

export default function Technology() {

    let [ technology, sethealth ] = useState( [] );

    async function healthNews() {
        let { data } = await axios.get( 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=46d104877a794fbea2c04f5565cc4a62' );
        sethealth( data.articles );
    }

    useEffect( () => {
        healthNews();
    }, [] );

    return (
        <>
            <section id='business' className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className={ `${ style.secTitle }` }>
                                <h2 className='text-capitalize fs-2 fw-bolder text-danger'>technology news</h2>
                                <p className='pb-1 text-primary'>Don't miss and stay up-to-date</p>
                            </div>
                            <div className="row my-4">
                                { technology.map( ( technologyNew, index ) => <div className='col-md-4' key={ index }>
                                    <img src={ technologyNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                    <p>{ technologyNew.title }</p>
                                </div>
                                ) }
                            </div>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </section>
            <FooterSec />
        </>
    )
}
