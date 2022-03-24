import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FooterSec from '../Footer/FooterSec/FooterSec';
import style from './Business.module.css';

export default function Business() {

    let [ business, setbusiness ] = useState( [] )

    async function businessNews() {
        let { data } = await axios.get( 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=46d104877a794fbea2c04f5565cc4a62' );
        setbusiness( data.articles );
    }
    useEffect( () => {
        businessNews();
    }, [] );

    let sliceOne = business.splice( 0, 5 );
    let sliceThree = business.splice( 5 );

    return (
        <>
            <section id='business' className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className={ ` ${ style.secTitle }` }>
                                <h2 className='text-capitalize fs-2 fw-bolder text-danger'>business news</h2>
                                <p className='pb-1 text-primary'>Don't miss and stay up-to-date</p>
                            </div>
                            <div className="row my-4 py-4 px-5">
                                <div className="col-md-8">
                                    { sliceOne.map( ( businessNew, index ) =>
                                        <div key={ index }>
                                            <div className="mainNews">
                                                <img src={ businessNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                                <p className='text-danger text-end mt-1'>{ businessNew.source.name }</p>
                                                <div className="newsInfo">
                                                    <h3 className='mt-4'>{ businessNew.title }</h3>
                                                    <button className={ `btn border-0 p-0 text-capitalize text-primary` }>more ...</button>
                                                    <p className='content'></p>
                                                </div>
                                            </div>
                                        </div>
                                    ) }
                                </div>
                                <div className="col-md-4 vh-100">
                                    <div className="row ">
                                        { sliceThree.map( ( businessNew, index ) => <div className='col-sm-12' key={ index }>
                                            <img src={ businessNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                            <p className='my-3'>{ businessNew.title }</p>
                                        </div>
                                        ) }
                                    </div>
                                </div>
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
