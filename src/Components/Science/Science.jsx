import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FooterSec from '../Footer/FooterSec/FooterSec';
import style from './Science.module.css';



export default function Science() {

    let [ science, setscience ] = useState( [] );

    async function scienceNews() {
        let { data } = await axios.get( 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=46d104877a794fbea2c04f5565cc4a62' );
        setscience( data.articles );
    }

    useEffect( () => {
        scienceNews();
    }, [] );

    return (
        <>
            <section id='science' className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className={ `${ style.secTitle }` }>
                                <h2 className='text-capitalize fs-2 fw-bolder text-danger'>science news</h2>
                                <p className='pb-1 text-primary'>Don't miss and stay up-to-date</p>
                            </div>
                            <div className="row my-4">
                                { science.map( ( scienceNew, index ) => <div className='col-md-4' key={ index }>
                                    <img src={ scienceNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                    <p>{ scienceNew.title }</p>
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
