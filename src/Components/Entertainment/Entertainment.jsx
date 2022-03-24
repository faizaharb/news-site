import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FooterSec from '../Footer/FooterSec/FooterSec';
import style from './Entertainment.module.css'


export default function Entertainment() {

    let [ entertainment, setEntertainment ] = useState( [] );

    async function entertainmentNews() {
        let { data } = await axios.get( 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=46d104877a794fbea2c04f5565cc4a62' );

        setEntertainment( data.articles );
    }

    useEffect( () => {
        entertainmentNews();
    }, [] );
    return (
        <>
            <section id='entertainment' className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className={ `${ style.secTitle }` }>
                                <h2 className='text-capitalize fs-2 fw-bolder text-danger'>entertainment news</h2>
                                <p className='pb-1 text-primary'>Don't miss and stay up-to-date</p>
                            </div>
                            <div className="row my-4 pb-5">

                                { entertainment.map( ( entertainmentNew, index ) => <div className='col-md-4' key={ index }>
                                    <img src={ entertainmentNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                    <p className='my-3'>{ entertainmentNew.title }</p>
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
