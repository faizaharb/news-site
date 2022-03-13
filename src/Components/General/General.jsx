import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function General() {

    let [ general, setgeneral ] = useState( [] );

    async function generalNews() {
        let { data } = await axios.get( 'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=46d104877a794fbea2c04f5565cc4a62' );
        setgeneral( data.articles );
    }

    useEffect( () => {
        generalNews();
    }, [] );

    return (
        <>
            <section id='business' className='my-5 py-5'>
                <div className="container">
                    <div className="secTitle d-flex justify-content-between align-items-center border-start border-5 border-success rounded-2 bg-light py-3">
                        <h2 className='text-capitalize ps-4 fs-2 fw-bolder text-danger'>general news</h2>
                        <button className='btn shadow-none text-capitalize text-secondary me-4 pe-4'>view all</button>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row">
                        { general.map( ( generalNew, index ) => <div className='col-md-4' key={ index }>
                            <p>{ generalNew.title }</p>
                        </div>
                        ) }
                    </div>
                </div>
            </section>
        </>
    )
}
