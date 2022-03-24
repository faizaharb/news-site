import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FooterSec from '../Footer/FooterSec/FooterSec';
import style from './Health.module.css';


export default function Health() {

    let [ health, sethealth ] = useState( [] );

    async function healthNews() {
        let { data } = await axios.get( 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=46d104877a794fbea2c04f5565cc4a62' );
        sethealth( data.articles );
    }

    useEffect( () => {
        healthNews();
    }, [] );

    return (
        <>
            <section id='health' className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className={ `${ style.secTitle }` }>
                                <h2 className='text-capitalize fs-2 fw-bolder text-danger'>health news</h2>
                                <p className='pb-1 text-primary'>Don't miss and stay up-to-date</p>
                            </div>
                            <div className="row my-4">
                                { health.map( ( healthNew, index ) => <div className='col-md-4' key={ index }>
                                    <img src={ healthNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                    <p>{ healthNew.title }</p>
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
