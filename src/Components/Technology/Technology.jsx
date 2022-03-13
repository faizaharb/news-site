import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
            <section id='business' className='my-5 py-5'>
                <div className="container">
                    <div className="secTitle d-flex justify-content-between align-items-center border-start border-5 border-success rounded-2 bg-light py-3">
                        <h2 className='text-capitalize ps-4 fs-2 fw-bolder text-danger'>technology news</h2>
                        <button className='btn shadow-none text-capitalize text-secondary me-4 pe-4'>view all</button>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row">
                        { technology.map( ( healthNew, index ) => <div className='col-md-4' key={ index }>
                            <p>{ healthNew.title }</p>
                        </div>
                        ) }
                    </div>
                </div>
            </section>
        </>
    )
}
